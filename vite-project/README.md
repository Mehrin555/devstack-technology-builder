<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project. -->
# DevStack — Technology Stack Builder

## 📖 About the Project

DevStack is a React-based web application that helps users explore web development technologies and build their own technology stack. Users can search for technologies, add them to their stack, and remove technologies whenever they want.

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- React-Toastify
- JSON
- Vite

## ✨ Features

1. **Technology Explorer:** Displays different web development technologies in organized cards.
2. **Search and Stack Builder:** Allows users to search technologies and add or remove them from their personal stack.
3. **Interactive Notifications:** Shows notifications when users add technologies, try to add duplicates, remove items, or clear their stack.

## ❓ React Questions and Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes React components easier to read and create.

### 2. What is the difference between props and state?

Props pass data from a parent component to a child component. State stores data that can change inside a component.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` stores changing data and updates the UI when the data changes. I used it to manage the search input, technology list, loading status, errors, and selected stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs side effects in a React component. I used it to fetch technology data from the JSON file when the component loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list and update the UI correctly when items change.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying content based on a condition. For example, I show a loading message while data is being fetched and an empty-stack message when no technologies are selected.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using props. A child can send information back by calling a callback function passed by the parent.

## 🔗 Project Links

- **GitHub Repository:** Add your GitHub repository URL here.
- **Live Website:** Add your deployed website URL here.
