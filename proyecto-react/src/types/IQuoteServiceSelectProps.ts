export interface QuoteServiceSelectProps {
    selectedOption: string;
    handleOptionSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
