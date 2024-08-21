# AoE Project Documentation

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm install`

Installs the project dependencies.

#### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `npm test`

Launches the unit tests to ensure code quality and functionality.

## Project Overview

The AoE Project is a React application designed using TypeScript and modern state management and data fetching tools. It employs the Atomic Design methodology to create a scalable and maintainable UI. The application is structured to support easy expansion and adaptation as new features are added.

### Component Structure

#### Atoms

Atoms are the basic building blocks of the UI, providing fundamental UI elements. In the AoE Project, atoms include:

- **Button**: A versatile button component used across the application for various actions. It is styled according to the design system and supports different variants, sizes, and states.<br/>
- **Input**: A fundamental text input component designed to be flexible for various forms and data entry needs. It supports validation, different input types, and integrates with form handling.<br/>
- **Card**: Provides a basic structure for a card with a border that accepts children.<br/>
- **Select**: Provides the basic structure for a select dropdown component.<br/>

#### Molecules

Molecules are combinations of atoms that form more complex UI elements. They include:

- **PlayerCard**: A composite component that presents information about a player, combining images, text, and other elements. It is reusable for displaying different players and integrates well with the grid layout.<br/>

#### Organisms

Organisms are more complex components that combine multiple molecules and atoms to form functional sections of the application. They include:

- **Header**: A header bar that currently contains only text but can be extended to include elements like links and buttons in the future.<br/>

### Pages

Pages combine organisms and other components to create full-page layouts:

- **Player**: Integrates `PlayerGrid`, `PlayerDetail`, and `PlayerSorting` to provide an overview of players and detailed information for selected players. It demonstrates how the application’s main features work together.<br/>

  - **PlayerDetail**: Displays detailed information about a selected player. This component integrates the `Card` component, form elements, and action buttons (e.g., submit and close).<br/>
  - **PlayerGrid**: Manages a grid of player cards, allowing users to view and select different players. It handles layout, interaction, and state management for displaying and selecting players.<br/>
  - **PlayerSorting**: Handles the sorting of the cards in the grid.<br/>

### Custom Hook

**`usePlayerQuery`**

**Purpose**: Handles data fetching for player information using React Query.<br/>

**Features**:
- Manages loading and error states.
- Fetches data from the `getPlayers` service.<br/>

**File**: `playerQuery.ts`

### Zustand Store

**`usePlayerStore`**

**Purpose**: Manages global state related to players, including selection, sorting, and data fetching.<br/>

**Features**:
- Allows selecting and deselecting players.
- Manages sorting order and player list.
- Handles fetching and submitting player data.<br/>

**File**: `playerStore.ts`

### Services

**Player Service**

**Purpose**: Handles API interactions for fetching and submitting player data.<br/>

**Features**:
- `getPlayers`: Retrieves player data from the server.
- `submitPlayer`: Submits player details to the server.<br/>

**File**: `playerService.ts`

### HTTP Configuration

**`http`**

**Purpose**: Configures Axios for HTTP requests, including JWT token management and error handling.<br/>

**Features**:
- Includes request and response interceptors for authentication and error logging.<br/>

**File**: `http.ts`

### Application Layout

**`App.tsx`**

**Purpose**: Main application component with routing and header.<br/>

**Features**:
- Manages routes for the home (players) page and a 404 page.
- Includes a `Header` component that is displayed across all pages.<br/>

**File**: `App.tsx`

## Setup for Scalability

The AoE Project is designed with future growth and flexibility in mind:<br/>

- **Flexible Atoms**: Basic components like `Input` and `Button` are designed to be extensible and reusable, supporting various styles and use cases.<br/>
- **Form Handling**: Uses Axios for API interactions, allowing seamless integration with backend services for form submissions.<br/>
- **Component Reusability**: Components are modular and designed for reuse, ensuring ease of maintenance and adaptability to new features.<br/>
- **Consistent Styling**: Applies a cohesive design system across all components, facilitating a uniform look and feel throughout the application.<br/>
- **Masonry Layout**: Utilizes the Masonry layout for dynamic and responsive grid presentation in the `PlayerGrid` component.<br/>
- **UI/UX Enhancements**: Incorporates improvements such as text truncation and image handling to enhance the user experience.<br/>

## Future Improvements

As the AoE Project evolves, several enhancements and new features can be considered to further improve the application's functionality and user experience:

### Enhanced Sorting Functionality

**Current State**: The `PlayerSorting` component provides basic sorting capabilities with options for ascending and descending order based on player names.<br/>

**Future Improvements**:
- **Multi-Criteria Sorting**: Introduce the ability to sort by multiple criteria (e.g., sorting by player name and then by asset). This would allow for more refined and user-specific sorting options.<br/>
- **Search and Filter Integration**: Integrate search and filter functionality with sorting to enable users to quickly find and sort players based on various attributes such as name, asset, or other metadata.<br/>
- **Dynamic Sorting Options**: Allow users to dynamically choose sorting criteria from a dropdown or similar UI element, providing a more flexible and interactive sorting experience.<br/>
- **User-Specific Preferences**: Save user preferences for sorting criteria and order, so that users can have a personalized sorting experience that persists across sessions.<br/>

### Improved Player Details

**Current State**: The `PlayerDetail` component displays player information with basic styling and functionality.<br/>

**Future Improvements**:
- **Rich Media Support**: Enhance player details with additional media types, such as video highlights or audio commentary, to provide a richer user experience.<br/>
- **Interactive Elements**: Add interactive elements such as editing player details.<br/>

### User Experience and Performance

**Current State**: The application uses a Masonry layout for displaying player cards, which provides a responsive and visually appealing grid.<br/>

**Future Improvements**:
- **Lazy Loading**: Implement lazy loading of player cards to improve performance and reduce initial load times, especially for large datasets.<br/>
- **Optimized Rendering**: Utilize advanced rendering techniques such as virtualization to ensure smooth performance and responsiveness as the number of players increases.<br/>
- **Pagination**: Add pagination so that a user is not bombarded with a lot of players. Also improves loading times and more.<br/>

### Enhanced State Management

**Current State**: The application uses Zustand for state management, providing a simple and efficient solution for managing player-related state.<br/>

**Future Improvements**:
- **Complex State Management**: Explore more advanced state management solutions or patterns if the application requirements become more complex, such as integrating additional state management libraries or using Context API for more fine-grained state control.<br/>
- **Centralized Error Handling**: Implement a centralized error handling mechanism to manage and display errors consistently across the application.<br/>

### Advanced Features

**Future Enhancements**:
- **Real-Time Data Updates**: Incorporate real-time updates for player data using WebSockets or similar technologies to keep the player information current and synchronized across multiple clients.<br/>
- **User Authentication**: Add user authentication and authorization features to support personalized experiences and secure data interactions.<br/>
- **Mobile Optimization**: Continue to optimize the application for mobile devices, ensuring that all components are fully responsive and provide a seamless experience across different screen sizes.<br/>

## Notes

- **Masonry Layout**: The `PlayerGrid` component uses a Masonry layout to provide a responsive and visually appealing grid of player cards.<br/>
- **Text and Image Updates**: Player cards have been enhanced to include longer text and images, improving the overall UI/UX.<br/>
- **Frontend Focus**: The project balances frontend design improvements with functional JavaScript enhancements, ensuring a robust and user-friendly application.<br/>


By leveraging Atomic Design principles and preparing for future scalability, the AoE Project is well-equipped to evolve and adapt as new features and requirements emerge.<br/>

