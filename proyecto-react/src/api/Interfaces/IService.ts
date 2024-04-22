export interface Service<T> {
    fetch(url: string, category?: string): Promise<T>;
}
