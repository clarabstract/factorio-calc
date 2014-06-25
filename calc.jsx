/** @jsx React.DOM */
var Calc = React.createClass({
  getInitialState: function() {
    return {
      recipe: null,
      ips: 1,
    };
  },
  changeDataLib: function(ev) {
    window.location.hash = "#"+ ev.target.value;
    window.location.reload();
  },
  calculate: function() {
    req = window.calcRequest.call(this.state.recipe, this.state.ips)
    this.setState({result: req})
  },
  setIPS: function(ev) {
    this.setState({ips:Number(ev.target.value)}, this.calculate)

  },
  setRecipe: function(ev) {
    this.setState({recipe:ev.target.value}, this.calculate)
  },
  render: function() {
    var result;
    if (this.state.result) {
      result = <Req req={this.state.result}/>;
    }
    return (
    	<div>
        <header className="clearfix">
          <span className="pull-right">
            Data source:
            <select
              value={this.state.currentlib} 
              onChange={this.changeDataLib}>
              {this.props.datalibs.map(function(lib){
                return <option key={lib}>{lib}</option>;
              })}
            </select>
          </span>
        </header>
        <p>
          Calculate the requirements for
          <input 
            id="recipe"
            type="text"
            list="recipes"
            placeholder="recipe name"
            value={this.state.recipe}
            onChange={this.setRecipe}/>
          <datalist id="recipes">
          	{Object.keys(this.props.recipes).map(function(recipe) {
    	          return <option key={recipe}>{recipe}</option>;
    	        })}
          </datalist>
          producing at a rate of
          <input
            id="ips"
            type="number"
            value={this.state.ips}
            onChange={this.setIPS}/>
          item(s) / second.
        </p>
        {result}
    </div>
    );
  }
});

var Req = React.createClass({
  render: function() {
    var inputs, details;
    if (this.props.req.inputs && this.props.req.inputs.length) {
      inputs = (
        <div className="inputs">
          {this.props.req.inputs.map(function(input){
            return <Req req={input} />;
          })}
        </div>
      );
    }
    if (this.props.req.assemblers) {
      details = [
        <div className="assemblers">
          requires
          <span className="val">{this.props.req.assemblers.toFixed(2)}</span>
          assemblers
        </div>,
        <div className="lines_required">
          on
          <span className="val">{this.props.req.lines_required.toFixed(2)}</span>
          assembly lines
        </div>,
        <div className="recipe-info">
          (
          <div className="assembler_max_line">
            <span className="val">{this.props.req.assembler_max_line.toFixed(2)}</span>
            max assemblers per line
          </div>
          -
          <div className="cycle_time">
            cycles every
            <span className="val">{this.props.req.cycle_time.toFixed(2)}s</span>
          </div>
          <div className="ipspa">
            @
            <span className="val">{this.props.req.ipspa.toFixed(2)}</span>i/s
          </div>
          )
        </div>
      ];
    } else {
      details = (
        <div className="lines_required">
          on
          <span className="val">{this.props.req.lines_required.toFixed(2)}</span>
          assembly lines
        </div>
      );
    }
    return (
      <div className="req">
        <div className="name">{this.props.req.name}</div>
        <div className="data">
          <div className="ips">@
            <span className="val ips-val">{this.props.req.ips.toFixed(2)}</span>
            items/s
            (or 
            <span className="val ips-val">{(1.0 / this.props.req.ips).toFixed(2)}</span>
            s/item)
          </div>
          {details}
        </div>
        {inputs}
      </div>
    );
  }
});

function renderCalc(recipeData) {
  React.renderComponent(
    <Calc
      recipes={recipeData}
      datalibs={window.DATALIBS}
      currentlib={window.CURRENT_LIB}/>,
    document.getElementById('calc')
  );	
}
