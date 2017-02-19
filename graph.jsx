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
      var visit = function (inp, k) {
        console.log(inp.name + ' ' + k);
        dict[inp.name] = k;
        g.setNode(k, { label: inp.name, class: "type-TOP"});
        if (inp.inputs && inp.inputs.length) {
          for (var j = 0; j < inp.inputs.length; j++) {
            if(!(inp.inputs[j].name in dict)){
              var n = ++i;
              visit(inp.inputs[j], n);
            }
            if(dict[inp.inputs[j].name] != dict[inp.name]) {
              g.setEdge(dict[inp.inputs[j].name], dict[inp.name],
                {}); //lineInterpolate: 'linear' 
            }
          }
        }

      };
      if (props.req) {
        visit(props.req, 0);
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