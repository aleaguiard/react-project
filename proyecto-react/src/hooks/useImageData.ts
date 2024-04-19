import { useState, useEffect } from 'react';
import { ImageApi } from '../api/ImageAPI/ImageApi';

const useCityImage = (city: string, imageService: ImageApi) => {
    const [cityImage, setCityImage] = useState<string | null>(null);
    const [description, setDescription] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchCityImage = async () => {
            if (city.trim() !== '') {
                setIsLoading(true);
                try {
                    const { results } = await imageService.fetchImage(city);
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
