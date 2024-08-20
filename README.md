# Getting Started with this project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the unit tests.

# About project

## AoE Project Component Overview and Scalability
The AoE Project is structured using the Atomic Design methodology, which breaks down the UI into hierarchical levels of components to enhance reusability, maintainability, and consistency. The project is designed with scalability in mind, allowing for easy expansion and adaptation as new features are added. Here’s a detailed look at the components and the setup that supports future growth:<br/>

### Atoms
Atoms are the basic building blocks of the UI, providing fundamental UI elements. All atoms have the possiblity to have different versions with different styles if needed in the future. <br/>
In the AoE Project, atoms include:

**Button**: A versatile button component used across the application for various actions. It is styled according to the design system and supports different variants, sizes, and states. <br/>
**Input**: A fundamental text input component designed to be flexible for various forms and data entry needs. It supports validation, different input types, and integrates with form handling.<br/>
**Card**: Gives the basic structure for a card with a border that accepts children.<br/>
**Select**: Gives the basic structure for a select.<br/>

### Molecules
Molecules are combinations of atoms that form more complex UI elements. They include:<br/>

**PlayerCard**: A composite component that presents information about a player, combining images, text, and other elements. It is reusable for displaying different players and integrates well with the grid layout.<br/>

### Organisms
Organisms are more complex components that combine multiple molecules and atoms to form functional sections of the application. They include:<br/>

**Header**: A header bar that for now only has text, but can hold links and buttons in the future.<br/>

### Pages
Pages combine organisms and other components to create full-page layouts:<br/>

**Player**: Integrates PlayerGrid and PlayerDetail to provide an overview of players and detailed information for selected players. It demonstrates how the application’s main features work together.<br/>
Player has two components:<br/>
  - **PlayerDetail**: Displays detailed information about a selected player. This component integrates the Card component, form elements, and action buttons (e.g., submit and close).<br/>
  - **PlayerGrid**: Manages a grid of player cards, allowing users to view and select different players. It handles layout, interaction, and state management for displaying and selecting players.<br/>
  - **Player Sorting**: It handles the sorting of the cards in the grid.<br/>
  
### Setup for Scalability
The AoE Project is designed with future growth in mind:<br/>

**Flexible Atoms**: The Input Field atom is designed to support various types of forms and data entry requirements. Its extensibility allows for the easy addition of new input types and validation rules as needed.<br/>
**Form Handling**: The project uses Axios for submitting data, providing a robust and scalable solution for API interactions. This setup ensures that form submissions can be easily integrated with backend services.<br/>
**Component Reusability**: Components are built to be reusable across different parts of the application. This modular approach makes it easier to maintain and extend the application with new features or UI changes.<br/>
**Consistent Styling**: A design system is applied consistently across all components, ensuring a cohesive look and feel. This system also facilitates the addition of new styles or themes in the future.<br/>

By leveraging Atomic Design principles and preparing for future scalability, the AoE Project is well-equipped to grow and adapt as new features and requirements emerge. The modular and flexible component structure ensures that the application remains maintainable and extensible over time.<br/>


***NOTE: I wanted it to be a masonry layout so i add images. and added more text to the asset so we can see the ... in the cards
I assumed this is okay since the project does not require any kind of focus on Backend.
From the test pdf, i went with a combination of both focus points. this is a combination of More Frontend less Javascript and More Javascript less Frontend
as I have improved the design keeping UX and UI in mind, while maintaining a scalable and flexible structure for the code.***
