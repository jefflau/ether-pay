import React from 'react';
import Radium from 'radium';
import Ajax from '../helpers/ajaxhelper';

class BuyButton extends React.Component {



  constructor () {
    super();
  }

  convertPrice(data, currency, price) {
    return price / data.price[currency];
  }

  render() {
    var buyStyles = {
      background: 'blue',
      color: 'white',
      padding: 20,
      fontFamily: 'Helvetica, Arial'
    }

    var ethPrice = this.convertPrice(this.props.data, this.props.currency, 20)

    return (
      <div className="buy-button" style={buyStyles}>
        Buy this product for Ξ{ethPrice}( {this.props.currency}{this.props.price})
      </div>
    )
  }
}

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      data: null,
      loading: true
    }
  }

  componentDidMount() {
    Ajax('get', 'http://coinmarketcap-nexuist.rhcloud.com/api/eth', (data) => this.setState({ data: data, loading: false})
    , function(error){
      console.log(error)
    })
  }
  render() {
    if(this.state.loading) {
      var content = "Loading...";
    } else {
      var content = <BuyButton data={this.state.data} price={20} currency={'usd'}/>; 
    }
    return (
      <div className="ether-pay">
        {content}
      </div>
    )
  }
}

export default Radium(App);