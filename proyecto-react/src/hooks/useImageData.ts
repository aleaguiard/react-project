import { useState, useEffect } from 'react';
import { Service } from '../api/Interfaces/IService';
import { UnsplashPhotoResponse } from '../types/IUnsplashphoto';
/**
 * Custom hook to fetch an image for a given city using an image service.
 * @param city - The name of the city for which to fetch an image.
 * @param imageService - The service to use for fetching the image.
 * @returns An object containing the fetched city image URL, its description, and a boolean indicating whether the image is currently being fetched.
 */
const useImageData = (
    city: string,
    imageService: Service<UnsplashPhotoResponse>,
) => {
    const [cityImage, setCityImage] = useState<string | null>(null);
    const [description, setDescription] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchCityImage = async () => {
            if (city.trim() !== '') {
                setIsLoading(true);
                try {
                    const { results } = await imageService.fetch(
                        `search/photos?query=${city}`,
                    );
                    if (results.length > 0) {
                        const { description, urls } = results[0];
                        setCityImage(urls.regular);
                        setDescription(description);
                    }
                } catch (error) {
                    console.error('Error fetching city image:', error);
                } finally {
                    setIsLoading(false);
                }
            }
        };
        fetchCityImage();
    }, [city, imageService]);

    return { cityImage, description, isLoading };
};

export default useImageData;
