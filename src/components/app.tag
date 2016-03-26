import ajax from '../helpers/ajaxhelper';
import buyButton from './buyButton.tag';
import buyModal from './buyModal.tag';

<app>
  <h1>hello world</h1>
  <div if={loading}>{ loader }</div>
  <buy-button data={data} price={20} currency="usd" />
  <buy-modal />

  <script>
    this.loading = true;
    this.loader = "loading...";    
    this.data = null;
    this.price = 20;
    this.currency = 'usd';

    ajax('get', 'http://coinmarketcap-nexuist.rhcloud.com/api/eth', (data) => {   
      this.update({loading: false, data: data});
      console.log(data);
    }
    , function(error){
      console.log(error)
    })

  </script>
  
</app>