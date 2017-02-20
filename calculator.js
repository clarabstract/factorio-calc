/* global App*/

App.Calculator = {

	doCalculation: function(recipe, ips, options) {
		return this._request(recipe, ips, options);
	},

	_get_recipe: function(name, options) {
		var rdata = App.getRawRecipe.call(name);
		console.log("_get_recipe: " + name);

		if (name == "iron-ore" || name == "copper-ore") {
			rdata = {};
			rdata.name = name;
			rdata.energy_required = 1 / 0.525;
			rdata.category = "ore";
			rdata.ingredients = [];
		}

		var recipe = {};
		if (!rdata) {
			console.log("No data found for " + name);
			return rdata;
		}
		recipe.name = rdata.name;
		recipe.time = rdata.energy_required || 0.5;
		recipe.category = rdata.category;
		if (rdata.category == 'smelting') {
			console.log(options.smeltlvl);
			recipe.time = recipe.time / parseFloat(options.smeltlvl);
			recipe.outputs = rdata.result_count || 1;
		}
		else if (rdata.category == 'chemistry') {
			recipe.time = recipe.time / 1.25;
			if (rdata.results && rdata.results.forEach) {
				rdata.results.forEach(function(res) {
					if (res.name == recipe.name) {
						recipe.outputs = res.amount;
					}
				});
			}
			else {
				recipe.outputs = 1;
			}
		}
		else if (rdata.category == 'ore') {
			recipe.outputs = 1;
		}
		else {
			recipe.time = recipe.time / parseFloat(options.asslvl);
			recipe.outputs = rdata.result_count || 1;
		}
		recipe.ips = recipe.outputs / recipe.time;
		recipe.inputs = [];
		if (rdata.ingredients.forEach) {
			rdata.ingredients.forEach(function(ingr) {
				var ingredient = {};
				if (ingr.name) {
					ingredient.name = ingr.name;
					ingredient.amount = ingr.amount;
				}
				else {
					ingredient.name = ingr[0];
					ingredient.amount = ingr[1];
				}
				recipe.inputs.push(ingredient);
			});
		}
		return recipe;
	},

	_request: function(name, ips, options) {

		var recipe = this._get_recipe(name, options);
		if (!options) {
			options = {asslvl: 1, smeltlvl: 1, beltlvl: 14.2};
		}
		if (!recipe) {
			return {name: name, ips: ips};
		}
		
		var req = {};
		req.name = recipe.name;
		req.ips = ips;
		req.ipspa = recipe.ips ;
		req.assemblers = req.ips / req.ipspa;
		req.assembler_max_line = parseFloat(options.beltlvl) / recipe.ips;
		req.lines_required = req.assemblers / Math.floor(req.assembler_max_line);
		req.cycle_time = recipe.time;
		req.category = recipe.category;
		req.inputs = [];
		var self = this;
		if (recipe.inputs.forEach) {
			recipe.inputs.forEach(function(input) {
				var ingr_per_cycle = input.amount * req.assemblers;
				var ingr_required_ips = ingr_per_cycle /  req.cycle_time;
				req.inputs.push(self._request(input.name, ingr_required_ips, options));
			});
		}
		return req;

	},

	getSubtotals: function(req, subtotals) {
	    if (!subtotals) {
	    	subtotals = {};
	    }
	    if (!subtotals[req.name]) {
	    	subtotals[req.name] = {
	        	name: req.name,
		        ips: 0,
		        ipspa: req.ipspa,
		        assembler_max_line: req.assembler_max_line,
		        cycle_time: req.cycle_time,
		        category: req.category  
	      	};
	    }
	    var sub = subtotals[req.name];
	    sub.ips += req.ips;
	    sub.assemblers = sub.ips / sub.ipspa;
	    sub.lines_required = sub.assemblers / Math.floor(sub.assembler_max_line);
	    if (req.inputs) {
	    	for (var i = req.inputs.length - 1; i >= 0; i--) {
	    		this.getSubtotals(req.inputs[i], subtotals);
	      	}
	    }
	    return subtotals;
  }

};