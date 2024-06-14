# React Project with TypeScript and Vite

This project is a React application developed with TypeScript and Vite. It is designed to display the current date and time, fetch weather information including images for a specific city, and show quotes from various categories using different services.

## Project Structure

- **api/**: Contains classes and services for making requests to external APIs using Axios.
- **components/**: Reusable UI components such as DateTime, Weather, and RandomQuote.
- **hooks/**: Custom hooks for reusable logic tailored to specific application needs.
- **pages/**: Components representing different views or pages of the application.
- **types/**: Data types and interface definitions used throughout the application.

## Testing

- **tests/**: Unit and integration tests using Vitest and React Testing Library to ensure code quality and reliability.

## Dependency Injection and Services

The application utilizes dependency injection to manage and decouple services effectively:

- **api/services**: Defines services that are injected into components as needed, such as weather and quote services.
- **React Context**: Utilized to provide services and global data to child components without manual prop drilling.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/aleaguiard/react-project.git
    ```

2. Navigate to the project directory:
    ```bash
    cd react-project/proyecto-react
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the application:
    ```bash
    npm run dev
    ```

---
