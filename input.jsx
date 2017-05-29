 /* global React,App*/

App.Input = class Input extends React.Component {
    componentWillMount() {
      this.recipes = App.getData.call();
    }

    render() {
        var self = this;
        var onChangeRecipe = function(event) {
            self.props.onChange({recipe: event.target.value, ipm: self.props.input.ipm});
        };
        var onChangeIpm = function(event) {
            self.props.onChange({recipe: self.props.input.recipe, ipm: parseFloat(event.target.value)});
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
            	{Object.keys(this.recipes).map(function(recipe) {
                    return <option key={recipe}>{recipe}</option>;
                })}
            </datalist>
            producing at a rate of
            <input
              id="ipm"
              type="number"
              min="0"
              step="any"
              value={this.props.input.ipm}
              onChange={onChangeIpm}/>
            item(s) / minute.
            <button id="addAnother" onClick={ this.props.onAddAnother }>Add Another</button>
            <button id="clear" onClick={ this.props.onClear }>Clear</button>
            <button id="bulk" onClick={ this.props.onBulk }>Bulk</button>
          </p>
          </div>
        );
    }
};
