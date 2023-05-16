import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from "./components/Home.js";
import AccessRes from "./components/AccessRes";

export{Home,AccessRes}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
