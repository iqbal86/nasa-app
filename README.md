# NASA App

https://nasa-app-client.onrender.com/

## Overview

The NASA App allows users to view photos from the Mars Rover and the Astronomy Picture of the Day (APOD). It integrates with NASA's APIs to fetch the latest photos, utilizing modern web technologies such as React for the frontend and Express.js for the backend.

## Features

- Dynamic User Interface: A responsive design for an optimal viewing experience across devices.
- API Integration: Seamless communication with multiple NASA APIs for fetching and displaying data.
- Data Visualization: Interactive visualizations for intuitive and engaging presentation of data.
- Custom Hooks: Efficient state management and API calls through reusable custom hooks.
- Error Handling: Robust handling of API request failures.

## Technologies Used

### Frontend

- React: For building the user interface.
- Axios: For making HTTP requests to the backend.
- React Router: For handling navigation between different pages.
- Custom Hooks: For managing API calls and state, promoting code reusability and separation of concerns.

### Backend

- Node.js: JavaScript runtime for server-side development.
- Express.js: Framework for building the backend API.
- Axios: To handle requests to NASA's Open APIs.

## Architecture

### Frontend

- React: The frontend is built using React and implements React Query for data fetching and caching.
- Material UI: Used for styling, ensuring responsive and consistent design components.
- React Query: Efficiently manages asynchronous data fetching and caching, specifically used in hooks like useFetchRoverPhotos and useFetchApod.
- Axios: Handles HTTP requests with the AxiosClient utility, which is responsible for making GET requests to NASA's API endpoints.
- Context API: The API provider context (ApiProvider.tsx) wraps the application and provides centralized access to API services like apodService and roverPhotosService.

### Backend

- Express.js: The backend is built with Express and serves as a proxy to the NASA API.
- Axios: Used on the backend to fetch data from NASA’s public APIs for APOD and Mars Rover photos.
- CORS: Cross-Origin Resource Sharing (CORS) is enabled to allow communication between the frontend and backend.
- Environment Variables: NASA API key and other sensitive information are managed through environment variables using dotenv.

## Performance

### Frontend Performance

- React Query: Ensures efficient API calls by caching the results and automatically refetching when necessary. This reduces the number of redundant API calls.
- Lazy Loading: Mars Rover photos are sliced and limited to 20 on initial load (roverPhotosService.ts), reducing the amount of data transferred and improving page load times.
- Optimized Image Loading: Images fetched from NASA APIs are cached and optimized for performance.

### Backend Performance

- Proxy to NASA API: The backend acts as a middle layer, caching NASA API responses to reduce latency and avoid redundant external API calls.
- Environment Configurations: The backend is optimized to handle API rate limits by using environment variables for the NASA API key and routing API calls through a single server.

## API Endpoints

- /api/apod: Fetches Astronomy Picture of the Day (APOD) data for a specified date.
- /api/rover: Retrieves photos taken by Mars Rover on a specific day.

## Running the Project

### Prerequisites

- Node.js
- npm or yarn
- NASA API Key (add this to a .env file in the backend directory)

### Installation

- Clone the repository.
- Navigate to the frontend and backend directories, and run the following commands:

```
npm install
```

- Create a .env file in the backend directory with your NASA API key:

```
NASA_API_KEY=your_key_here
```

- Running the Frontend and Backend

```
npm run dev
```

After running this command, open your browser and navigate to http://localhost:3000 (or whatever port Vite specifies) to view the app.
