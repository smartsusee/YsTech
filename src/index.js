import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from "@material-tailwind/react";
import RenderComponent from './RenderFile/Render';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <ThemeProvider>
     <RenderComponent/>
   </ThemeProvider>
  </React.StrictMode>
);

