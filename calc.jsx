"use strict";
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

class Calc extends React.Component {
  state = {
    input: {recipe: "", ipm: 1 },
    additionalInputs: [],
    options: {
      asslvl: "0.5",
      smeltlvl: "1",
      beltlvl: "5.7",
      difficulty: "normal",
      alwaysShowDecimals: false
    },
    explainingRecipe: null,
    bulkVisible: false
  }

  componentDidMount() {
    this.calculate();
  }

  calculate() {
    var inputs = _.map(this.getInputs(), function(input) {
      return {recipe: input.recipe, ips: input.ipm / 60};
    });
    var result = Calculator.calculateAndAnalyze(inputs, this.state.options);
    this.setState({result: result});
  }

  setInput = (input) => {
    this.setState({input:input}, this.calculate);
  }

  removeRecipe = (recipeName) => {
    var additionalInputs = _.filter(this.state.additionalInputs, function(input) {
      return input.recipe != recipeName;
    });
    this.setState({
      additionalInputs: additionalInputs
    }, this.calculate);
  }

  addAnother = () => {
    var additionalInputs = this.state.additionalInputs.concat(this.state.input);
    this.setState({
      input: {recipe: "", ipm: 1 },
      additionalInputs: additionalInputs
    }, this.calculate);
  }

  clear = () => {
    this.setState({
      input: {recipe: "", ipm: 1 },
      additionalInputs: []
    }, this.calculate);
  }

  setOptions = (options) => {
    this.setState({options: options }, this.calculate);
  }

  explain = (recipe) => {
    this.setState({explainingRecipe: recipe});
  }

  stopExplain = () => {
    this.setState({explainingRecipe: null});
  }

  showBulk = () => {
    this.setState({bulkVisible: true});
  }

  hideBulk = () => {
    this.setState({bulkVisible: false});
  }

  bulkImport = (recipes) => {
    this.setState({
      input: {recipe: "", ipm: 1 },
      additionalInputs: recipes,
      bulkVisible: false
    }, this.calculate);
  }

  render() {
    var results, subtotals;
    if (this.state.result) {
      var self = this;
      results = this.state.result.recipes.map(function(recipe) {
        return (<Ingredients key={recipe.name} req={recipe} ingredients="off" onRemove={recipe.name == self.state.input.recipe ? null : self.removeRecipe} alwaysShowDecimals={self.state.options.alwaysShowDecimals}/>);
      });
      subtotals = this.state.result.totals.map(function(total) {
        return (<Ingredients key={total.name} req={total} ingredients="never" onExplain={self.explain} alwaysShowDecimals={self.state.options.alwaysShowDecimals}/>);
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
        <Datasource datalib={this.props.currentlib} datalibs={this.props.datalibs} />
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
        <Bulk bulkVisible={this.state.bulkVisible} inputs={ this.getInputs() } onRequestClose={this.hideBulk} onImport={this.bulkImport} />
    </div>
    );
  }

  getInputs() {
    if (this.state.input.recipe) {
      return _.union([this.state.input], this.state.additionalInputs);
    } else {
      return this.state.additionalInputs;
    }
  }
};
