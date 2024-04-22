import { FetchHttpClient } from './NinjaQuoteAPI/FetchHttpClient';
import { QuoteApi } from './NinjaQuoteAPI/QuoteApi';
import { NewHttpClient } from './DailyQuoteAPI/NewHttpClient';
import { NewQuoteAPI } from './DailyQuoteAPI/NewQuoteAPI';

const urlApi = import.meta.env.VITE_QUOTE_API_URL;
const apiKey = import.meta.env.VITE_QUOTE_API_KEY;
const fetchHttpClient = new FetchHttpClient(urlApi, apiKey);

export const quoteService1 = new QuoteApi(fetchHttpClient);

const urlApi2 = import.meta.env.VITE_QUOTE_NEW_API_URL;
const newHttpClient = new NewHttpClient(urlApi2);

export const quoteService2 = new NewQuoteAPI(newHttpClient);
