import React from 'react';
import './index.css';
import App from './App';
import * as ReactDOMClient from 'react-dom/client';

let root = null;
let container = null;
window.renderChild2 = (containerId) => {
    container = document.getElementById(containerId);
    root = ReactDOMClient.createRoot(container);

    root.render(<App/>);
};

window.unmountChild2 = () => {
    root.unmount(container);
};

if (!document.getElementById('Child2-container')) {
    const container = document.getElementById('root');
    const root = ReactDOMClient.createRoot(container);
    root.render(<App/>);
}
