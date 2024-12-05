const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-LAfdzTX5LATsBYbEfK68g4UE";

const getCoinList = (page, currency) => {
  return `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&sparkline=false&locale=en&x_cg_demo_api_key=${API_KEY}`;
};

export { getCoinList };
