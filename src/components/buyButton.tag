<buy-button>
  <div class="buy-button" onclick={openModal} >
    Buy this product for Ξ{ethPrice}( {opts.currency} {opts.price})
  </div>

  this.ethPrice = null;

  console.log(this.currency, this.price, this.data)

  this.on('update', () => {
    console.log('called');
    if(this.data) {
      this.ethPrice = convertPrice(this.opts.data, this.opts.currency, this.opts.price)
      console.log(this.ethPrice);
      this.update();
    }
    // allows recalculation of context data before the update
  })

  function convertPrice(data, currency, price) {

    return price / data.price[currency];
  }

  function openModal() {
  }
</buy-button>
