export interface HttpClient<T> {
    get(url: string): Promise<ApiResponse<T>>;
}

export interface ApiResponse<T> {
    data: T;
}
