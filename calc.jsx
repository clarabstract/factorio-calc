/** @jsx React.DOM */

var Calc = React.createClass({
  getInitialState: function() {
    return {value: 'Hello!'};
  },
  changeDataLib: function(ev) {
    window.location.hash = "#"+ ev.target.value;
    window.location.reload()
    

  },
  render: function() {
    return (
    	<div>
        <header className="clearfix">
          <span className="pull-right">
            Data source:
            <select value={this.props.currentlib} onChange={this.changeDataLib}>
              {this.props.datalibs.map(function(lib){
                return <option key={lib}>{lib}</option>;
              })}
            </select>
          </span>
        </header>
        <input type="text" list="recipes" placeholder="item name" />
        <datalist id="recipes">
        	{Object.keys(this.props.recipes).map(function(recipe) {
  	          return <option key={recipe}>{recipe}</option>;
  	        })}
        </datalist>
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
