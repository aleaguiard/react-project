import { FetchHttpClient } from './1.API/FetchHttpClient';
import { QuoteApi } from './1.API/QuoteApi';
import { NewHttpClient } from './2.API/NewHttpClient';
import { NewQuoteAPI } from './2.API/NewQuoteAPI';

const urlApi = import.meta.env.VITE_QUOTE_API_URL;
const apiKey = import.meta.env.VITE_QUOTE_API_KEY;
const fetchHttpClient = new FetchHttpClient(urlApi, apiKey);

export const quoteService1 = new QuoteApi(fetchHttpClient);

const urlApi2 = 'https://zenquotes.io/api/today/';
const newHttpClient = new NewHttpClient(urlApi2);
export const quoteService2 = new NewQuoteAPI(newHttpClient);
