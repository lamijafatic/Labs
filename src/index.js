import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import './assets/fonts/fonts.css'; 


import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import CssBaseline from '@mui/material/CssBaseline';


const rootElement = document.getElementById("root");
/*const root = ReactDOM.createRoot(rootElement);

/*
root.render(
  <React.StrictMode>
     
        <App />
    
  </React.StrictMode>
);
*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
