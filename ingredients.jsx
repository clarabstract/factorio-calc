/* global React,App*/

App.Ingredients = class Ingredients extends React.Component {
  state = {
    showIngredients: false
  }

  toggleShowIngredients = (event) => {
    event.preventDefault();
    this.setState({showIngredients: !this.state.showIngredients});
  }

  _wholeNumberRoundUpIfAppropriate(number) {
    if (this.props.alwaysShowDecimals) {
      return this._twoDecimalPlaces(number);
    } else {
      return Math.ceil(number);
    }
  }

  _twoDecimalPlaces(number) {
    return (Math.ceil(number * 100)/100).toFixed(2);
  }

  remove = (event) => {
    event.preventDefault();
    this.props.onRemove(this.props.req.name);
  }

  explain = (event) => {
    event.preventDefault();
    this.props.onExplain(this.props.req);
  }

  render() {
    var inputs, details;
    if (this.props.req.ingredients && this.props.req.ingredients.length && (this.state.showIngredients || this.props.ingredients=="always")) {
      var self = this;
      inputs = (
        <div className="inputs">
          {this.props.req.ingredients.map(function(ingredient){
            return <Ingredients key={ingredient.recipe.name} req={ingredient.recipe} ingredients="off" alwaysShowDecimals={self.props.alwaysShowDecimals}/>;
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
          { this._wholeNumberRoundUpIfAppropriate(this.props.req.assemblersRequired) } <span className="madeBy">{madeBy}</span>
        </div>
      ];
      if (this.props.req.type != "fluid")
      {
        details.push(
          <div key="lines_required" className="lines_required">
            { this._wholeNumberRoundUpIfAppropriate(this.props.req.lines) }
          </div>
        );
      }
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
            {this._twoDecimalPlaces(this.props.req.ips * 60)}
          </div>
          {details}
          {explainLink}
          {removeLink}
        </div>
        {inputs}
      </div>
    );
  }
};
