/* global React,ReactDOM,App*/

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
    var req = window.calcRequest.call(this.state.input.recipe, parseFloat(this.state.input.ips), this.state.options);
    this.setState({result: req});
  },

  setInput: function(input) {
    this.setState({input:input}, this.calculate);
  },

  setOptions: function(options) {
    this.setState({options: options }, this.calculate);
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
  },
  
  render: function() {
    var result, subtotals;
    if (this.state.result) {
      result = <Ingredients req={this.state.result}/>;
      var subs = this.getSubtotals(this.state.result);
      subtotals = [];
      for(var n in subs ) {
        subtotals.push(<Ingredients req={subs[n]} />);
      }
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
