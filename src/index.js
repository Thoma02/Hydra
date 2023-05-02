import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/Home';
import RouteSwitch from './RouteSwitch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouteSwitch />
);