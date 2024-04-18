import { useState, useEffect } from 'react';
import { ImageHttpClient } from '../api/ImageAPI/ImageHttpClient';
import { ImageApi } from '../api/ImageAPI/ImageApi';

const useCityImage = (
    city: string,
    urlApiImage: string,
    apiKeyImage: string,
) => {
    const [cityImage, setCityImage] = useState<string | null>(null);
    const [description, setDescription] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchCityImage = async () => {
            if (city.trim() !== '') {
                setIsLoading(true);
                const imageHttpClient = new ImageHttpClient(
                    urlApiImage,
                    apiKeyImage,
                );
                const imageService = new ImageApi(imageHttpClient);
                try {
                    const { results } = await imageService.fetchImage(city);
                    console.log('City Image Results:', results);
                    if (results.length > 0) {
                        const { description, urls } = results[0];
                        console.log('City Image Description:', description);
                        console.log('City Image URL:', urls.regular);
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
    }, [city, urlApiImage, apiKeyImage]);

    return { cityImage, description, isLoading };
};

export default useCityImage;
