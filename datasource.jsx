/* global React,App*/

App.Datasource = class Datasource extends React.Component {
    onChangeDataLib = (ev) => {
      window.location.hash = "#"+ ev.target.value;
      window.location.reload();
    }

    render() {
        return (
          <header className="clearfix">
            <span className="pull-right">
              Data source:
              <select
                value={this.props.datalib}
                onChange={this.onChangeDataLib}>
                {this.props.datalibs.map(function(lib){
                    return <option key={lib}>{lib}</option>;
                })}
              </select>
            </span>
          </header>
        );
    }
};
