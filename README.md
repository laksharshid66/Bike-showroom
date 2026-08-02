# Bike Showroom

A simple bike showroom website built with React and Vite, made as a college practical (Git & GitHub - Topic 34).

## Features
- Home, Bikes, Services and Contact pages
- React Router DOM for navigation
- Plain CSS styling (no UI library)
- Contact form with validation using React state
- Fully responsive layout

## Tech Stack
- React 18
- Vite
- React Router DOM
- Plain CSS

## Getting Started

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually http://localhost:5173).

## Folder Structure

```
src/
  components/   -> reusable UI pieces (Navbar, Footer, Hero, cards)
  pages/        -> one file per route (Home, Bikes, Services, Contact)
  data/         -> static bike and service data
  css/          -> plain CSS files, one per section/page
```

## Notes
This project has no backend, database or authentication. All data is static
and the contact form does not actually send data anywhere - it just validates
the fields and shows a confirmation message.
