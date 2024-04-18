import { useState, useEffect } from 'react';
import { ImageHttpClient } from '../api/ImageAPI/ImageHttpClient';
import { ImageApi } from '../api/ImageAPI/ImageApi';

const useCityImage = (
    city: string,
    urlApiImage: string,
    apiKeyImage: string,
) => {
    const [cityImage, setCityImage] = useState<string | null>(null);
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
                    const { results } = await imageService.fetchImage(city); // Desestructurar results
                    console.log('City Image Response:', results);
                    if (results.length > 0) {
                        const { description, urls } = results[0];
                        console.log('City Image URL:', urls.regular);
                        console.log('City Image Description:', description); // Agregar console.log para descripción
                        // Agregar console.log para URL regular
                        // Desestructurar description y urls
                        setCityImage(urls.regular);
                        // Hacer algo con la descripción si es necesario
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

    return { cityImage, isLoading };
};

export default useCityImage;
