import { UnsplashPhotoResponse } from '../../types/IUnsplashphoto';
import { HttpClient } from '../IHttpClient';
import { ImageService } from './IImageService';

export class ImageApi implements ImageService {
    constructor(private httpClient: HttpClient<UnsplashPhotoResponse>) {}

    async fetchImage(city: string): Promise<UnsplashPhotoResponse> {
        try {
            const response = await this.httpClient.get(
                `search/photos?query=${city}`,
            );
            return response.data;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Error fetching image data: ${error.message}`);
            } else {
                throw new Error(`Unknown error fetching image data`);
            }
        }
    }
}
