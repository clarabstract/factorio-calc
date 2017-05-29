 /* global React,App,ReactModal*/

App.Explain = class Explain extends React.Component {
    onRequestClose = (event) => {
      event.preventDefault();
      this.props.onRequestClose();
    }

    render() {
        var style = {
          content: {
            top: "100px",
            left: "50%",
            right: "auto",
            width: "800px",
            marginLeft: "-400px"
          }
        };

        var bmono = function(text) {
          return (<span className="bmono">{text}</span>);
        };

        var decimalNumber = function(number) {
          return (<span className="bmono">{ (Math.ceil(number * 100)/100).toFixed(2) }</span>);
        };

        var wholeNumber = function(number) {
          return (<span className="bmono">{ Math.ceil(number) }</span>);
        };

        var content;
        if (this.props.recipe) {
          var recipe = this.props.recipe;
          var details = null;
          if (this.props.recipe.assemblersRequired) {
            var madeBySingular, madeByPlural, madeUnits, assemblerPartOne;
            if (recipe.category == "ore") {
              madeBySingular = "drill";
              madeByPlural = "drills";
              assemblerPartOne = (<span>It takes {decimalNumber(recipe.assemblyTime)} seconds to mine { wholeNumber(recipe.outputs)} { bmono(recipe.name) }.</span>);
            } else if (recipe.category == "smelting") {
              madeBySingular = "furnace";
              madeByPlural = "furnaces";
              assemblerPartOne = (<span>Your chosen furnace has a crafting speed of { bmono(this.props.options.smeltlvl) }. This means it will take {decimalNumber(recipe.assemblyTime)} seconds to smelt { wholeNumber(recipe.outputs)} { bmono(recipe.name) }.</span>);
            } else if (recipe.category == "chemistry") {
              madeBySingular = "chemplant";
              madeByPlural = "chemplants";
              assemblerPartOne = (<span>Chemplants have a crafting speed of { bmono(1.25) }. This means it will take {decimalNumber(recipe.assemblyTime)} seconds to create { wholeNumber(recipe.outputs)} { bmono(recipe.name) }.</span>);
            } else {
              madeBySingular = "assembler";
              madeByPlural = "assemblers";
              assemblerPartOne = (<span>Your chosen assembler has a crafting speed of { bmono(Math.max(recipe.minAssemblerLevel, this.props.options.asslvl)) }. This means it will take {decimalNumber(recipe.assemblyTime)} seconds to create { wholeNumber(recipe.outputs)} { bmono(recipe.name) }.</span>);
            }
            if (recipe.type == "fluid") {
              madeUnits = "units";
            } else {
              madeUnits = "items";
            }

            var assemblyLinesExplanation = null;
            if (recipe.type != "fluid") {
                assemblyLinesExplanation = [
                  <div key="1" className="section"># Assembly Lines</div>,
                  <div key="2">
                    One lane of your chosen transport belt can transport only { decimalNumber(this.props.options.beltlvl * 60) } {madeUnits}/min. Since one { madeBySingular } produces at a rate of { decimalNumber(60 / recipe.assemblyTime) } {madeUnits}/min, if { wholeNumber(recipe.assemblersPerLine) } or more { madeByPlural } output onto the same belt, then the belt will back up, limiting production.
                  </div>,
                  <div key="3">
                    Since you need { wholeNumber(recipe.assemblersRequired) } { madeByPlural }, this means you will need { decimalNumber(recipe.lines) } separate belt lines, which in real life means { wholeNumber(recipe.lines) } belt lines.
                  </div>
                ];
            }
            details = (
              <div className="details">
                <div className="section"># Assemblers</div>
                <div>
                  { assemblerPartOne } This in turn means one { madeBySingular } produces at a rate of { decimalNumber(recipe.oneAssemblerRate * 60) } {madeUnits}/min.
                </div>
                <div>
                  Therefore, to meet the required rate of { decimalNumber(recipe.ips * 60) } {madeUnits}/min, you need { decimalNumber(recipe.assemblersRequired) } { madeByPlural }, which in real life means { wholeNumber(recipe.assemblersRequired) } { madeByPlural }.
                </div>
                {assemblyLinesExplanation}
              </div>
            );
          }

          content = (
            <div className="explainContent">
              <div className="title">Explanation for <span className="mono">{recipe.name}</span></div>
              <div className="section">Items/min</div>
              <div>
                This is the total rate that { bmono(recipe.name) } is used across all the recipes you've requested. To satify all recipes, you'll need to create { decimalNumber(recipe.ips * 60) } of { bmono(recipe.name) } per minute.
              </div>
              {details}
            </div>
          );
        } else {
          content = null;
        }

        return (
          <ReactModal isOpen={!!this.props.recipe} contentLabel="Recipe Explanation" onRequestClose={this.props.onRequestClose} style={ style }>
            <a href className="closeLink" onClick={this.onRequestClose}>Close</a>
            { content }
          </ReactModal>
        );
    }
};
