import { UnsplashPhotoResponse } from '../types/IUnsplashphoto';
import WeatherData from '../types/IWeatherData';
import { ImageApi } from './ImageAPI/ImageApi';
import { ImageHttpClient } from './ImageAPI/ImageHttpClient';
import { Service } from './Interfaces/IService';
import { AxiosHttpClient } from './WeatherAPI/AxiosHttpClient';
import { WeatherApi } from './WeatherAPI/WeatherApi';

//Servicio para info del tiempo
const urlApiWeather = import.meta.env.VITE_WEATHER_API_URL;
const apiKeyWeather = import.meta.env.VITE_WEATHER_API_KEY;
const httpClientWeather = new AxiosHttpClient(urlApiWeather, apiKeyWeather);

export const weatherService: Service<WeatherData> = new WeatherApi(
    httpClientWeather,
);

//Servicio para imagen ciudad
const urlApiImage = import.meta.env.VITE_IMAGE_API_URL;
const apiKeyImage = import.meta.env.VITE_IMAGE_API_KEY;
const httpClientImage = new ImageHttpClient(urlApiImage, apiKeyImage);

export const imageService: Service<UnsplashPhotoResponse> = new ImageApi(
    httpClientImage,
);
