import { UnsplashPhotoResponse } from '../../types/IUnsplashphoto';
import { HttpClient } from '../Interfaces/IHttpClient';
import { Service } from '../Interfaces/IService';

export class ImageApi implements Service<UnsplashPhotoResponse> {
    constructor(private httpClient: HttpClient<UnsplashPhotoResponse>) {}

    async fetch(url: string): Promise<UnsplashPhotoResponse> {
        try {
            const response = await this.httpClient.get(url);
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
