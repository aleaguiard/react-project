# Proyecto React con TypeScript y Vite

Este proyecto es una aplicación de React desarrollada con TypeScript y Vite. Está diseñado para mostrar la fecha y hora actual, obtener información meteorológica que incluye imágenes para una ciudad específica, y mostrar citas de diversas categorías utilizando diferentes servicios.

## Estructura del Proyecto

- **api/**: Contiene clases y servicios para realizar solicitudes a APIs externas utilizando Axios.
- **components/**: Componentes reutilizables de la interfaz de usuario como DateTime, Weather y RandomQuote.
- **hooks/**: Hooks personalizados para lógica reutilizable adaptada a necesidades específicas de la aplicación.
- **pages/**: Componentes que representan diferentes vistas o páginas de la aplicación.
- **types/**: Tipos de datos y definiciones de interfaces utilizados en toda la aplicación.

## Pruebas

- **tests/**: Pruebas unitarias e integración utilizando Vitest y React Testing Library para garantizar la calidad y confiabilidad del código.

## Inyección de Dependencias y Servicios

La aplicación utiliza inyección de dependencias para gestionar y desacoplar servicios de manera efectiva:

- **api/services**: Define servicios que se inyectan en los componentes según sea necesario, como servicios de clima y citas.
- **React Context**: Utilizado para proporcionar servicios y datos globales a componentes hijos sin necesidad de pasar props manualmente.

## Autenticación

Para acceder a todas las funcionalidades y utilizar los servicios, se requiere autenticación. Puedes utilizar las siguientes credenciales de prueba para iniciar sesión:

- **Usuario**: `admin`
- **Contraseña**: `123`

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/aleaguiard/react-project.git
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd react-project/proyecto-react
    ```

3. Instala las dependencias:
    ```bash
    npm install
    ```

4. Inicia la aplicación:
    ```bash
    npm run dev
    ```

---
