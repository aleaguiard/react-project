export interface WeatherSearchProps {
    onButtonClick: (city: string) => void;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
