import { FetchHttpClient } from './NinjaQuoteAPI/FetchHttpClient';
import { QuoteApi } from './NinjaQuoteAPI/QuoteApi';
import { NewHttpClient } from './DailyQuoteAPI/NewHttpClient';
import { NewQuoteAPI } from './DailyQuoteAPI/NewQuoteAPI';

let quoteService1: QuoteApi;
let quoteService2: NewQuoteAPI;

export function getQuoteService1() {
    if (!quoteService1) {
        const urlApi = import.meta.env.VITE_QUOTE_API_URL;
        const apiKey = import.meta.env.VITE_QUOTE_API_KEY;
        const fetchHttpClient = new FetchHttpClient(urlApi, apiKey);
        quoteService1 = new QuoteApi(fetchHttpClient);
    }
    return quoteService1;
}

export function getQuoteService2() {
    if (!quoteService2) {
        const urlApi2 = import.meta.env.VITE_QUOTE_NEW_API_URL;
        const newHttpClient = new NewHttpClient(urlApi2);
        quoteService2 = new NewQuoteAPI(newHttpClient);
    }
    return quoteService2;
}
