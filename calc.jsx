/** @jsx React.DOM */
var Calc = React.createClass({
  getInitialState: function() {
    return {
      recipe: 'science-pack-2',
      ips: 1,
      opts: {
        asslvl: "0.5",
        smeltlvl: "1",
      }
    };
  },
  changeDataLib: function(ev) {
    window.location.hash = "#"+ ev.target.value;
    window.location.reload();
  },
  calculate: function() {
    req = window.calcRequest.call(this.state.recipe, parseFloat(this.state.ips), this.state.opts)
    this.setState({result: req})
  },
  setIPS: function(ev) {
    this.setState({ips:ev.target.value}, this.calculate)

  },
  setRecipe: function(ev) {
    this.setState({recipe:ev.target.value}, this.calculate)
  },
  setOption: function(ev) {
    var state = {opts:this.state.opts};
    state.opts[ev.target.name] = ev.target.value;
    this.setState(state, this.calculate);
  },
  getSubtotals: function(req, subtotals) {
    if (!subtotals) {
      subtotals = {}
    }
    if (!subtotals[req.name]) {
      subtotals[req.name] = {
        name: req.name,
        ips: 0,
        ipspa: req.ipspa,
        assembler_max_line: req.assembler_max_line,
        cycle_time: req.cycle_time,
      }
    }
    var sub = subtotals[req.name];
    sub.ips += req.ips;
    sub.assemblers = sub.ips / sub.ipspa;
    sub.lines_required = sub.assemblers / Math.floor(sub.assembler_max_line);
    if (req.inputs) {
      for (var i = req.inputs.length - 1; i >= 0; i--) {
        this.getSubtotals(req.inputs[i], subtotals);
      };
    };
    return subtotals;
  },
  showOptions: function(ev) {
    ev.preventDefault();
    this.setState({showOptions: true});
  },
  hideOptions: function(ev) {
    ev.preventDefault();
    this.setState({showOptions: false});
  },
  render: function() {
    var result, subtotals;
    if (this.state.result) {
      result = <Req req={this.state.result}/>;
      subs = this.getSubtotals(this.state.result);
      subtotals = [];
      for( n in subs ) {
        subtotals.push(<Req req={subs[n]} />);
      }

    }
    var options;
    if (this.state.showOptions) {
      options = (
        <p>
          <a onClick={this.hideOptions} href="">
            <span className="glyphicon glyphicon-collapse-down"></span>
            Hide options
          </a>
          <div id="options">
            <label>Assembler level:
              <select
                value={this.state.opts.asslvl}
                name="asslvl"
                onChange={this.setOption}>
                <option value="0.5">1 (0.5 modifier)</option>
                <option value="0.75">2 (0.75 modifier)</option>
                <option value="1.25">3 (1.25 modifier)</option>
              </select>
            </label>
            <label>Smelter level:
              <select
                value={this.state.opts.smeltlvl}
                name="smeltlvl"
                onChange={this.setOption}>
                <option value="1">Stone</option>
                <option value="2">Steel / Electric</option>
              </select>
            </label>
          </div>
        </p>
      );
     
    } else {
      options = (
        <p>
          <a onClick={this.showOptions} href="">
            <span className="glyphicon glyphicon-expand"></span>
            Show options
          </a>
          
        </p>
      );
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
            min="0"
            step="any"
            value={this.state.ips}
            onChange={this.setIPS}/>
          item(s) / second.
        </p>
        {options}
        {result}
        <h2>Sub-totals</h2>
        {subtotals}
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
      details = null;
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
