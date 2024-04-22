import axios, { AxiosInstance } from 'axios';
import { ApiResponse, HttpClient } from '../Interfaces/IHttpClient';
import { UnsplashPhotoResponse } from '../../types/IUnsplashphoto';

export class ImageHttpClient implements HttpClient<UnsplashPhotoResponse> {
    private axiosInstance: AxiosInstance;

    constructor(
        private apiUrl: string,
        private apiKey: string,
    ) {
        this.axiosInstance = axios.create({
            baseURL: this.apiUrl,
            params: {
                client_id: this.apiKey,
            },
        });
    }

    async get(url: string): Promise<ApiResponse<UnsplashPhotoResponse>> {
        try {
            const response = await this.axiosInstance.get(url);
            return { data: response.data };
        } catch (error: unknown) {
            throw new Error(
                `Error fetching image data: ${(error as Error).message}`,
            );
        }
    }
}
