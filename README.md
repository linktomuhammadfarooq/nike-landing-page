# Nike Landing Page

A simple and responsive landing page built using **React**, **Vite**, and **TailwindCSS**. This project provides a minimal setup to get React running in a Vite environment with Hot Module Replacement (HMR) and includes some basic ESLint rules for linting.

---

## Features

- Powered by **React** with **Vite** for a fast and modern development experience.
- Styled with **TailwindCSS** for easy and customizable styling.
- Includes ESLint configurations for code consistency and quality.
- Supports both development and production environments via Docker.

---

## Official Plugins

This project supports the following official Vite plugins for React:

1. [**@vitejs/plugin-react**](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)  
   Uses [Babel](https://babeljs.io/) for Fast Refresh during development.

2. [**@vitejs/plugin-react-swc**](https://github.com/vitejs/vite-plugin-react-swc)  
   Leverages [SWC](https://swc.rs/) for enhanced performance with Fast Refresh.

---

## Running in Docker Environment

This project is Dockerized, allowing you to easily run it in both development and production environments.

### Development Environment

To run the application in a development environment within Docker, use the following command:

```bash
docker-compose -f docker-compose.yml up
```

This will start the application with development configurations, enabling features like Hot Module Replacement for a seamless development experience.

---

## Production Environment

For a production-ready environment, use this command:

```bash
docker-compose -f docker-compose.prod.yml up
```

This will launch the application with optimized settings suitable for production deployment.

---

Feel free to clone, explore, and customize this project to suit your needs. 🚀
