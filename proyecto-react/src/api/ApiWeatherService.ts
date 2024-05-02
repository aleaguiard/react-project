import { UnsplashPhotoResponse } from '../types/IUnsplashphoto';
import WeatherData from '../types/IWeatherData';
import { ImageApi } from './ImageAPI/ImageApi';
import { ImageHttpClient } from './ImageAPI/ImageHttpClient';
import { Service } from './Interfaces/IService';
import { AxiosHttpClient } from './WeatherAPI/AxiosHttpClient';
import { WeatherApi } from './WeatherAPI/WeatherApi';

let weatherService: Service<WeatherData>;
let imageService: Service<UnsplashPhotoResponse>;

export function getWeatherService(): Service<WeatherData> {
    if (!weatherService) {
        const urlApiWeather = import.meta.env.VITE_WEATHER_API_URL;
        const apiKeyWeather = import.meta.env.VITE_WEATHER_API_KEY;
        const httpClientWeather = new AxiosHttpClient(
            urlApiWeather,
            apiKeyWeather,
        );
        weatherService = new WeatherApi(httpClientWeather);
    }
    return weatherService;
}

export function getImageService(): Service<UnsplashPhotoResponse> {
    if (!imageService) {
        const urlApiImage = import.meta.env.VITE_IMAGE_API_URL;
        const apiKeyImage = import.meta.env.VITE_IMAGE_API_KEY;
        const httpClientImage = new ImageHttpClient(urlApiImage, apiKeyImage);
        imageService = new ImageApi(httpClientImage);
    }
    return imageService;
}
