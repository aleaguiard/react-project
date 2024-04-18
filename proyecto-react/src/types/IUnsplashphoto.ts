export interface UnsplashPhotoResponse {
    total: number;
    total_pages: number;
    results: UnsplashPhoto[];
}

export interface UnsplashPhoto {
    description: string;
    urls: {
        regular: string;
    };
}
