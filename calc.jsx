/* global React,ReactDOM,ReactModal,App,_*/

ReactModal.setAppElement('#calc');

var Calculator = App.Calculator;
var Datasource = App.Datasource;
var Input = App.Input;
var Options = App.Options;
var Ingredients = App.Ingredients;
var Graph = App.Graph;
var Explain = App.Explain;
var Bulk = App.Bulk;

var Calc = React.createClass({
  getInitialState: function() {
    return {
      input: {recipe: "", ipm: 1 },
      additionalInputs: [],
      options: {
        asslvl: "0.5",
        smeltlvl: "1",
        beltlvl: "5.7"
      },
      explainingRecipe: null,
      bulkVisible: false
    };
  },

  componentDidMount: function() {
    this.calculate();
  },

  calculate: function() {
    
    var inputs = _.map(_.union([this.state.input], this.state.additionalInputs), function(input) {
      return {recipe: input.recipe, ips: input.ipm / 60};
    });
    var result = Calculator.calculateAndAnalyze(inputs, this.state.options);
    this.setState({result: result});
  },

  setInput: function(input) {
    this.setState({input:input}, this.calculate);
  },

  removeRecipe: function(recipeName) {
    var additionalInputs = _.filter(this.state.additionalInputs, function(input) {
      return input.recipe != recipeName;
    });
    this.setState({
      additionalInputs: additionalInputs
    }, this.calculate);
  },

  addAnother: function() {
    var additionalInputs = this.state.additionalInputs.concat(this.state.input);
    this.setState({
      input: {recipe: "", ipm: 1 },
      additionalInputs: additionalInputs
    }, this.calculate);
  },

  clear: function() {
    this.setState({
      input: {recipe: "", ipm: 1 },
      additionalInputs: []
    }, this.calculate);
  },

  setOptions: function(options) {
    this.setState({options: options }, this.calculate);
  },

  explain: function(recipe) {
    this.setState({explainingRecipe: recipe});
  },

  stopExplain: function() {
    this.setState({explainingRecipe: null});
  },

  showBulk: function() {
    this.setState({bulkVisible: true});
  },

  hideBulk: function() {
    this.setState({bulkVisible: false});
  },

  bulkImport: function(recipes) {
    this.setState({
      input: {recipe: "", ipm: 1 },
      additionalInputs: recipes,
      bulkVisible: false
    }, this.calculate);
  },
  
  render: function() {
    var results, subtotals;
    if (this.state.result) {
      var self = this;
      results = this.state.result.recipes.map(function(recipe) {
        return (<Ingredients key={recipe.name} req={recipe} ingredients="toggle" onRemove={recipe.name == self.state.input.recipe ? null : self.removeRecipe}/>);
      });
      subtotals = this.state.result.totals.map(function(total) {
        return (<Ingredients key={total.name} req={total} onExplain={self.explain}/>);    
      });
    }
    var header = (
      <div className="req header">
        <div className="name">
          Recipe
        </div>
        <div className="data">
          <div className="ips">
            Items/min
          </div>
          <div key="assemblers" className="assemblers">
            # Assemblers
          </div>
          <div key="lines_required" className="lines_required">
            # Assembly Lines
          </div>
        </div>
      </div>
    );
    
    return (
    	<div className="wrapper">
        <Datasource datalib={this.props.currentLib} datalibs={this.props.datalibs} />
        <Input input={this.state.input} recipes={this.props.recipes} onChange={this.setInput} onAddAnother={this.addAnother} onClear={this.clear} onBulk={this.showBulk}/>
        <Options options={this.state.options} onChangeOptions={this.setOptions}/>
        {header}
        {results}
        <h2>Totals</h2>
        <div className="totals">
        {header}
        {subtotals}
        </div>
        <h2>Layout</h2>
        <Graph req={this.state.result} />
        <Explain recipe={this.state.explainingRecipe} options={this.state.options} onRequestClose={this.stopExplain} />
        <Bulk bulkVisible={this.state.bulkVisible} inputs={ _.union([this.state.input], this.state.additionalInputs)} onRequestClose={this.hideBulk} onImport={this.bulkImport} />
    </div>
    );
  }
});

window.renderCalc = function(recipeData) {
  window.setTimeout(function() {
    ReactDOM.render(
      <Calc
        recipes={recipeData}
        datalibs={window.DATALIBS}
        currentlib={window.CURRENT_LIB}/>,
      document.getElementById('calc')
    );
  }, 0);
};
