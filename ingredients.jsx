/* global React,App*/

var Ingredients = React.createClass({
  getInitialState: function() {
    return {
      showIngredients: this.props.ingredients == "on"
    };
  },
  toggleShowIngredients: function(event) {
    event.preventDefault();
    this.setState({showIngredients: !this.state.showIngredients});
  },

  _wholeNumberRoundUp: function(number) {
    return Math.ceil(number);
  },

  remove: function(event) {
    event.preventDefault();
    this.props.onRemove(this.props.req.name);
  },

  explain: function(event) {
    event.preventDefault();
    this.props.onExplain(this.props.req);
  },

  render: function() {
    var inputs, details;
    if (this.props.req.ingredients && this.props.req.ingredients.length && (this.state.showIngredients || this.props.ingredients=="always")) {
      inputs = (
        <div className="inputs">
          {this.props.req.ingredients.map(function(ingredient){
            return <Ingredients key={ingredient.recipe.name} req={ingredient.recipe} ingredients="off"/>;
          })}
        </div>
      );
    }
    if (this.props.req.assemblersRequired) {
      var madeBy = "assemblers";
      if (this.props.req.category == "ore") {
        madeBy = "drills";
      } else if (this.props.req.category == "smelting") {
        madeBy = "furnaces";
      } else if (this.props.req.category == "chemistry") {
        madeBy = "chemplants";
      }

      details = [
        <div key="assemblers" className="assemblers">
          { this._wholeNumberRoundUp(this.props.req.assemblersRequired) } <span className="madeBy">{madeBy}</span>
        </div>,
        <div key="lines_required" className="lines_required">
          { this._wholeNumberRoundUp(this.props.req.lines) }
        </div>
      ];
    } else {
      details = null;
    }

    var explainLink;
    if (this.props.onExplain) {
      explainLink = ( 
        <div className="explain">
          <a href onClick={this.explain}>Explain</a>
        </div>
      );
    } else {
      explainLink = null;
    }

    var removeLink;
    if (this.props.onRemove) {
      removeLink = ( 
        <div className="remove">
          <a href onClick={this.remove}>Remove</a>
        </div>
      );
    } else {
      removeLink = null;
    }

    var name;
    if (this.props.ingredients == "always" || this.props.ingredients == "never" || !this.props.req.ingredients || !this.props.req.ingredients.length) {
      name = (<div className="name">{this.props.req.name}</div>);
    } else {
      name = (<div className="name"><a href style={{color: "black"}} onClick={this.toggleShowIngredients}>{this.state.showIngredients ? "-" : "+"} {this.props.req.name}</a></div>);
    }

    return (
      <div className="req">
        { name }
        <div className="data">
          <div className="ips">
            {(this.props.req.ips * 60).toFixed(2)}
          </div>
          {details}
          {explainLink}
          {removeLink}
        </div>
        {inputs}
      </div>
    );
  }
});

App.Ingredients = Ingredients;