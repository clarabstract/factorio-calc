/* global React,ReactDOM,d3,dagreD3,App*/

var update = function(props) {
    return function(me) {
      var g = new dagreD3.graphlib.Graph()
        .setGraph({})
        .setDefaultEdgeLabel(function() { return {}; });

      // Here we"re setting nodeclass, which is used by our custom drawNodes function
      // below.
      var i = 0;
      
      var dict = {};
      var visit = function (recipe, k) {
        dict[recipe.name] = k;
        g.setNode(k, { label: recipe.name, class: "type-TOP"});
        if (recipe.ingredients && recipe.ingredients.length) {
          for (var j = 0; j < recipe.ingredients.length; j++) {
            var ingredient = recipe.ingredients[j];
            if(!(ingredient.name in dict)){
              var n = ++i;
              visit(ingredient.recipe, n);
            }
            if(dict[ingredient.name] != dict[recipe.name]) {
              g.setEdge(dict[ingredient.name], dict[recipe.name],
                {}); //lineInterpolate: 'linear' 
            }
          }
        }

      };
      if (props.req) {
        props.req.recipes.forEach(function(recipe) {
          visit(recipe, i);
          i++;
        });        
      }

      // Create the renderer
      // var renderer = new dagreD3.Renderer().edgeInterpolate("linear");

      var render = new dagreD3.render();

      // Run the renderer. This is what draws the final graph.
      render(me, g);

      var svgGroup = me;
      var svg = d3.select("svg");
      // Center the graph
      var xCenterOffset = (svg.attr("width") - g.graph().width) / 2;
      svgGroup.attr("transform", "translate(" + xCenterOffset + ", 20)");
      svg.attr("height", g.graph().height + 40);
    };
};

App.Graph = React.createClass({
    render: function() {
        return <svg width="960" height="600"></svg>;
    },
    componentDidMount: function () {
        d3.select(ReactDOM.findDOMNode(this))
            .append("g")
            .call(update(this.props));
    },
    shouldComponentUpdate: function(props) {
        d3.select(ReactDOM.findDOMNode(this))
            .select("g")
            .call(update(props));

        // always skip React's render step
        return false;
    }
});