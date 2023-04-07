const axios = require('axios');
const colors = require('colors');


class CryptoAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    // apikey = '36982a1b4cmsh8c5814b8e132abap1868b0jsn1e26f7a2af76';
    this.baseUrl = 'https://alpha-vantage.p.rapidapi.com/query';
  }



  async getPriceData(coinOption, curOption) {
    try {
        const options = {
          method: 'GET',
          url: this.baseUrl,
          params: {from_currency: coinOption, function: 'CURRENCY_EXCHANGE_RATE', to_currency: curOption},
          headers: {
            'X-RapidAPI-Key': '36982a1b4cmsh8c5814b8e132abap1868b0jsn1e26f7a2af76',
            'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
          }
        };
      // Formatter for currency
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: curOption
      });

      // const res = await axios.get(
      //   `${this.baseUrl}?key=${this.apiKey}&ids=${coinOption}&convert=${curOption}`
      // );

        let output = '';``
        axios.request(options).then(function (response) {
	         // console.log(response.data);
             // output += response.data;
             response.data.forEach(res => {
                 output += `Coin: ${res.`1. From_Currency Code`.yellow} (${res.'2. From_Currency Name'}) | Price: ${
                 formatter.format(res.'Exchange Rate').green
                 } \n`;
             });
             console.log(output);
         }).catch(function (error) {
	         console.error(error);
        });


        return output;
    } catch (err) {
      handleAPIError(err);
    }
  }
}

function handleAPIError(err) {
  if (err.response.status === 401) {
    throw new Error('Your API key is invalid - Go to https://nomics.com');
  } else if (err.response.status === 404) {
    throw new Error('Your API is not responding');
  } else {
    throw new Error('Something is not working');
  }
}

module.exports = CryptoAPI;
