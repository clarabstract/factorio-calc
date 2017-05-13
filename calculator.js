/* global App, _*/

App.Calculator = {

	init: function() {
		this.data = App.getData.call();
	},

	calculateAndAnalyze: function(inputs, options) {
		var self = this;	

		var recipes = _.filter(_.map(inputs, function(input) {
			var recipe = self._getRecipeTree(input.recipe, input.ips, options.difficulty);
			if (recipe.category == "unknown") {
				return null;
			}
			self._addAnalyis(recipe, options);
			return recipe;
		}));
		
		var totals = this._getMultipleRecipeTreeTotals(recipes);
		totals.forEach(function (total) {
			self._addAnalyis(total, options);
		});

		return {recipes: recipes, totals: totals};
	},

	_addAnalyis: function(recipe, options) {
		var assemblyInfo = this._getAssemblyInfoForRecipe(recipe, options);
		var assemblyLineInfo = this._getAssemblyLinesInfoForRecipe(recipe, assemblyInfo, options);
		_.extend(recipe, assemblyInfo);
		_.extend(recipe, assemblyLineInfo);
		var self = this;
		(recipe.ingredients || []).forEach(function(ingredient) {
			self._addAnalyis(ingredient.recipe, options);
		});
	},

	_asArray: function(object) {
		return _.isArray(object) ? object: [];
	},


	_getRecipe: function(name, difficulty) {
		var rawData = this.data[name];

		if (name == "iron-ore" || name == "copper-ore" || name == "stone" || name == "coal") {
			rawData = {};
			rawData.name = name;
			rawData.energy_required = 1 / (name == "stone" ? 0.65 : 0.525);
			rawData.category = "ore";
			rawData.ingredients = [];
		}

		var recipe = {};
		if (!rawData) {
			return {
				name: name,
				category: "unknown",
				ingredients: []
			};
		}
		recipe.name = rawData.name;
		recipe.category = rawData.category;

		var rawDataForDifficulty;
		if (rawData[difficulty]) {
			rawDataForDifficulty = rawData[difficulty];
		} else {
			rawDataForDifficulty = rawData;
		}

		recipe.baseTime = rawDataForDifficulty.energy_required || 0.5;
		if (rawDataForDifficulty.results) {
			var selfResult = _.findWhere(rawDataForDifficulty.results, {name: recipe.name});
			recipe.outputs = selfResult ? selfResult.amount : 1;
			recipe.type = selfResult ? selfResult.type : "item";
		} else {
			recipe.outputs = rawDataForDifficulty.result_count || 1;
			recipe.type = "item";
		}

		recipe.ingredients = this._asArray(rawDataForDifficulty.ingredients).map(function(rawIngredient) {
			if (rawIngredient.name) {
				return {name: rawIngredient.name, amount: rawIngredient.amount};
			} else {
				return {name: rawIngredient[0], amount: rawIngredient[1]};
			}
		});

		recipe.minAssemblerLevel = this._getMinAssemblerLevel(recipe);
	
		return recipe;
	},

	_getRecipeTree: function(name, ips, difficulty) {
		var recipe = this._getRecipe(name, difficulty);
		recipe.ips = ips;
		var self = this;
		recipe.ingredients.forEach(function(ingredient) {
			var ingredientIps = recipe.ips / recipe.outputs * ingredient.amount;
			ingredient.recipe = self._getRecipeTree(ingredient.name, ingredientIps, difficulty);
		});

		return recipe;
	},

	_getMultipleRecipeTreeTotals: function(recipes) {
		var self = this;
		var allSubtotals = _.flatten(_.map(recipes, function(recipe) {
			return self._getRecipeTreeTotals(recipe);
		}));
		
		return this._combineTotals(allSubtotals);
	},

	_getRecipeTreeTotals: function(recipe) {
		var self = this;
		var allSubtotals = _.flatten(_.map(recipe.ingredients, function(ingredient) {
			return self._getRecipeTreeTotals(ingredient.recipe);
		}));
		allSubtotals.unshift(recipe);
	
		return this._combineTotals(allSubtotals);
	},

	_combineTotals: function(allSubtotals) {
		var groupedSubtotals = _.groupBy(allSubtotals, "name");

		var finalTotals = _.map(groupedSubtotals, function(subtotalsForName, name) {
			var total = _.clone(subtotalsForName[0]);
			delete total.ingredients;
			total.ips = _.sum(subtotalsForName, "ips");

			return total;
		});

		return finalTotals;
	},

	_getMinAssemblerLevel: function(recipe) {

		if (recipe.ingredients.length > 4) {
			return 1.25;
		} else if (recipe.ingredients.length > 2) {
			return 0.75;
		} else {
			return 0.5;
		}

	},

	_getAssemblyInfoForRecipe: function(recipe, options) {

		var assemblyTime;

		if (recipe.category == 'smelting') {
			assemblyTime = recipe.baseTime / parseFloat(options.smeltlvl);
		}
		else if (recipe.category == 'chemistry') {
			assemblyTime = recipe.baseTime / 1.25;
		}
		else if (recipe.category == 'ore') {
			assemblyTime = recipe.baseTime;
		}
		else {
			assemblyTime = recipe.baseTime / Math.max(recipe.minAssemblerLevel, parseFloat(options.asslvl));
		}

		var oneAssemblerRate = recipe.outputs / assemblyTime;
		var assembersRequired = recipe.ips / oneAssemblerRate;

		return {assemblersRequired: assembersRequired, assemblyTime: assemblyTime, oneAssemblerRate: oneAssemblerRate};
	},

	_getAssemblyLinesInfoForRecipe: function(recipe, assemblyInfo, options) {

		var assemblersPerLine = parseFloat(options.beltlvl) * assemblyInfo.assemblyTime / recipe.outputs;
		var lines = assemblyInfo.assemblersRequired / assemblersPerLine;

		return {assemblersPerLine: assemblersPerLine, lines: lines};
	}

};