var VanikComponent = React.createClass({
  handle: function (e) {
    this.setState({
      field: e.target.value
    });
  },
  getInitialState: function () {
    return({
      field: '',
    });
  },
  render: function () {
    return (
      <div>
        <h2>Hey {this.props.name}</h2>
        <input type="text" onChange={this.handle} value={this.state.field} placeholder="Type" />
        <button onClick={this.handle}>Clear</button>
        <h3>{this.state.field}</h3>
      </div>
    );
  }
});
React.render(
  <div>
    <VanikComponent name="Vanik" />
    <VanikComponent name="Arthur" />
  </div>, 
  document.getElementById('content')
);