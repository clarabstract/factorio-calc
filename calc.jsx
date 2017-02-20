/* global React,ReactDOM,App*/

var Calculator = App.Calculator;
var Datasource = App.Datasource;
var Input = App.Input;
var Options = App.Options;
var Ingredients = App.Ingredients;
var Graph = App.Graph;

var Calc = React.createClass({
  getInitialState: function() {
    return {
      input: {recipe: null, ips: 1 },
      options: {
        asslvl: "0.5",
        smeltlvl: "1",
        beltlvl: "5.7"
      }
    };
  },

  calculate: function() {
    var req = Calculator.calculateAndAnalyze(this.state.input.recipe, parseFloat(this.state.input.ips), this.state.options);
    this.setState({result: req});
  },

  setInput: function(input) {
    this.setState({input:input}, this.calculate);
  },

  setOptions: function(options) {
    this.setState({options: options }, this.calculate);
  },
  
  render: function() {
    var result, subtotals;
    if (this.state.result) {
      result = <Ingredients req={this.state.result.recipe}/>;
      subtotals = this.state.result.totals.map(function(total) {
        return (<Ingredients req={total} />);    
      });
    }
    
    return (
    	<div className="wrapper">
        <Datasource datalib={this.props.currentLib} datalibs={this.props.datalibs} />
        <Input input={this.state.input} recipes={this.props.recipes} onChange={this.setInput}/>
        <Options options={this.state.options} onChangeOptions={this.setOptions}/>
        {result}
        <h2>Sub-totals</h2>
        {subtotals}
        <h2>Layout</h2>
        <Graph req={this.state.result} />
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
