 /* global React,App*/

App.Input = React.createClass({

    render: function() {
        var self = this;
        var onChangeRecipe = function(event) {
            self.props.onChange({recipe: event.target.value, ips: self.props.input.ips});
        };
        var onChangeIps = function(event) {
            self.props.onChange({recipe: self.props.input.recipe, ips: event.target.value});
        };

        return (
          <div>
          <p>
            Calculate the requirements for
            <input 
              id="recipe"
              type="text"
              list="recipes"
              placeholder="recipe name"
              value={this.props.input.recipe}
              onChange={onChangeRecipe}/>
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
              value={this.props.input.ips}
              onChange={onChangeIps}/>
            item(s) / second.
          </p>
          </div>
        );
    }
});