# Travel Destination Explorer

A React-based web application for exploring and discovering travel destinations. This project provides an interactive interface to browse destinations, filter them, and manage favorites.

## Features

- **Browse Destinations**: View a curated list of popular travel destinations from around the world
- **Search Functionality**: Search destinations by name or country
- **Advanced Filtering**: Filter destinations by continent and country
- **Detailed Views**: Click on any destination to view detailed information in a modal
- **Favorites Management**: Add destinations to your favorites list and remove them as needed
- **Persistent Storage**: Favorites are saved locally in your browser's storage

## How It Works

The application loads destination data from a local JSON file and displays them in a responsive grid layout. Users can interact with the app through:

1. **Search Bar**: Enter text to filter destinations by name or country
2. **Filter Bar**: Select continent and/or country to narrow down results
3. **Destination Cards**: Each card shows a preview image, name, rating, and description
4. **Modal Details**: Clicking "View Details" opens a modal with full destination information
5. **Favorites**: Use the heart icon to add/remove destinations from your favorites list
6. **Local Storage**: Favorites are automatically saved and restored between sessions

## Project Structure

```
travel-explorer/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── DestinationCard.jsx
│   │   ├── DestinationList.jsx
│   │   ├── DestinationModal.jsx
│   │   ├── Favorites.jsx
│   │   ├── FilterBar.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── SearchBar.jsx
│   ├── data/
│   │   └── destinations.json
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 5.0.0
- **Styling**: Bootstrap 5.3.8, React Bootstrap 2.10.10
- **Language**: JavaScript (JSX)
- **Linting**: ESLint with React plugins
- **Development Server**: Vite with Hot Module Replacement (HMR)

## Getting Started

To run the project locally:

1. Install dependencies: `npm install`
2. Start the development server: `npm run dev`
3. Open your browser to `http://localhost:5173`

## Build

To build for production: `npm run build`

## Linting

Run ESLint: `npm run lint`

## Vite Plugins

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
