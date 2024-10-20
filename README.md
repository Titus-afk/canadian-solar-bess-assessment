# BESS Dashboard for Canadian Solar

https://github.com/user-attachments/assets/84670721-07ce-453e-b4a4-52bc77aacb14

This project is a real-time monitoring dashboard designed to manage the fleet (all grids) for Canadian Solar's Battery Energy Storage Systems (BESS). The dashboard displays cards for each grid, showcasing several assumed metrics such as grid performance, status, and other relevant data.

## To view the hosted live dashboard - [Click here](https://dapper-kulfi-dea38c.netlify.app/)

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation](#installation)

## Project Overview

This dashboard helps Canadian Solar manage and monitor the performance and status of its grid systems through a real-time interface. The UI provides a view of all grids managed by Canadian Solar, with each grid represented as a card containing essential metrics, assumed for this assessment.

## Tech Stack

- **TypeScript**: For type-safe JavaScript code.
- **React**: As the core library for building the user interface.
- **Vite**: For fast build times and development.
- **Tailwind CSS**: For styling the UI components.
- **SHADCN**: Used for UI components and design system implementation.

## Features

- Real-time dashboard displaying the status of multiple grids.
- Card-based UI showcasing key grid metrics.
- Fleet-wide monitoring with assumed metrics such as performance, capacity, and status.
- Designed to scale and handle real-time data feeds.
- Currently uses Highcharts for Realtime Graphs. Can be replaced with D3.js.

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:

   ```bash
   git clone repo-url
   ```

2. Navigate to the project folder:

   ```bash
   cd candian-solar
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

The application will now be available at `http://localhost:5173`.
