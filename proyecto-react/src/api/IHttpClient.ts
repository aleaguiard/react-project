export interface HttpClient {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    get(url: string): Promise<any>;
}
