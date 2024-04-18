import { UnsplashPhotoResponse } from '../../types/IUnsplashphoto';

export interface ImageService {
    fetchImage(city: string): Promise<UnsplashPhotoResponse>;
}
