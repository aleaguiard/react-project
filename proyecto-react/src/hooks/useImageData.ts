import { useState, useEffect } from 'react';
// import { ImageApi } from '../api/ImageAPI/ImageApi';
import { Service } from '../api/Interfaces/IService';
import { UnsplashPhotoResponse } from '../types/IUnsplashphoto';

const useCityImage = (
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

export default useCityImage;
