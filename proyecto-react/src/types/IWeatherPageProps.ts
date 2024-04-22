import { Service } from '../api/Interfaces/IService';
import { UnsplashPhotoResponse } from './IUnsplashphoto';
import WeatherData from './IWeatherData';

export interface WeatherPageProps {
    weatherService: Service<WeatherData>;
    imageService: Service<UnsplashPhotoResponse>;
}
