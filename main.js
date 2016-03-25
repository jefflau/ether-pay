var Ajax = require('./js/ajaxhelper'),
    React = require('react'),
    ReactDOM = require('react-dom');


class App extends React.Component {
  constructor () {
    super();
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    Ajax('get', 'http://coinmarketcap-nexuist.rhcloud.com/api/eth', (data) => this.setState({ data: data})
    , function(error){
      console.log(error)
    })
  }

  render() {
    var data = JSON.stringify(this.state.data)
    return (
      <div className="ether-pay">
        {data}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('ether-pay-root')
);
