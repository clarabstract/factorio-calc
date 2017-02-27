/* global React,App*/
App.Options = React.createClass({

  getInitialState: function() {
    return {
        showOptions: false
    };
  },

  showOptions: function(ev) {
    ev.preventDefault();
    this.setState({showOptions: true});
  },

  hideOptions: function(ev) {
    ev.preventDefault();
    this.setState({showOptions: false});
  },

  setOption: function(ev) {
        this.props.options[ev.target.name] = ev.target.value;
        this.props.onChangeOptions(this.props.options);
  },

  render: function() {

    
    if (this.state.showOptions) {
      return (
        <div>
          <a onClick={this.hideOptions} href="">
            <span className="glyphicon glyphicon-collapse-down"></span>
            Hide options
          </a>
          <div id="options">
            <label>Assembler level:</label>
            <select
              value={this.props.options.asslvl}
              name="asslvl"
              onChange={this.setOption}>
              <option value="0.5">1 (0.5 modifier)</option>
              <option value="0.75">2 (0.75 modifier)</option>
              <option value="1.25">3 (1.25 modifier)</option>
            </select>
            
            <label>Smelter level:</label>
            <select
              value={this.props.options.smeltlvl}
              name="smeltlvl"
              onChange={this.setOption}>
              <option value="1">Stone</option>
              <option value="2">Steel / Electric</option>
            </select>
            <label>Belt speed:</label>
            <select
              value={this.props.options.beltlvl}
              name="beltlvl"
              onChange={this.setOption}>
              <option value="3.8">Basic (slow corners)</option>
              <option value="5.7">Basic (straight)</option>
              <option value="6.3">Fast (slow corners)</option>
              <option value="9.4">Fast (straight)</option>
              <option value="8.3">Express (slow corners)</option>
              <option value="14.2">Express (straight)</option>
            </select>
          </div>
        </div>
      );
     
    } else {
      return (
        <p>
          <a onClick={this.showOptions} href="">
            <span className="glyphicon glyphicon-expand"></span>
            Show options
          </a>
          
        </p>
      );
    }
  }
});