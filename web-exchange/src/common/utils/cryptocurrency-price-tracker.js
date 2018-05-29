import axios from 'axios';

const getCryptocurrencyPrices = () => {
  const currencies = ['LRC', 'ETH', 'APPC', 'EOS', 'SNOV', 'WETH'];
  const currenciesString = currencies.join(',');
  return axios.get(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${currenciesString}&tsyms=USD`);
};

export default getCryptocurrencyPrices;
