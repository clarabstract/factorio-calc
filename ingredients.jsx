/* global React,App*/

var Ingredients = React.createClass({
  render: function() {
    var inputs, details;
    if (this.props.req.ingredients && this.props.req.ingredients.length) {
      inputs = (
        <div className="inputs">
          {this.props.req.ingredients.map(function(ingredient){
            return <Ingredients key={ingredient.recipe.name} req={ingredient.recipe} />;
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
          requires
          <span className="val">{this.props.req.assemblersRequired.toFixed(2)}</span>
          {madeBy}
        </div>,
        <div key="lines_required" className="lines_required">
          on
          <span className="val">{this.props.req.lines.toFixed(2)}</span>
          assembly lines
        </div>,
        <div key="recipe-info" className="recipe-info">
          (
          <div className="assembler_max_line">
            <span className="val">{this.props.req.assemblersPerLine.toFixed(2)}</span>
            max {madeBy} per line
          </div>
          -
          <div className="cycle_time">
            cycles every
            <span className="val">{this.props.req.assemblyTime.toFixed(2)}s</span>
          </div>
          <div className="ipspa">
            @
            <span className="val">{(1 / this.props.req.assemblyTime).toFixed(2)}</span>i/s
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
            items/sec
            (or 
            <span className="val spi-val">{(1.0 / this.props.req.ips).toFixed(2)}</span>
            s/item)
          </div>
          {details}
        </div>
        {inputs}
      </div>
    );
  }
});

App.Ingredients = Ingredients;