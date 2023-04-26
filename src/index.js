import React from 'react';
import './index.css';
import App from './App';
import * as ReactDOMClient from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Component1 from "./components/component1";

let isMounted = false;
let root = null;
let container = null;

const router = createBrowserRouter([
    {
        path: "/components/cms",
        element: <App/>,
    },
    {
        path: "/com1",
        element: <Component1/>,
    },
    {
        path: "/"
    }
]);

window.renderChild2 = (containerId) => {
    container = document.getElementById(containerId);

    if (isMounted === false) {
        root = ReactDOMClient.createRoot(container);

        root.render(
            <React.StrictMode>
                <RouterProvider router={router}/>
            </React.StrictMode>);

        console.log("Application 2 - CMS - is mounted.");
    }

    isMounted = true;
};

window.unmountChild2 = () => {
    if (isMounted === true) {
        root.unmount(container);
        isMounted = false;

        console.log("Application 2 - CMS - unmounting previous...");
    }
};

if (!document.getElementById('Child2-container')) {
    const container = document.getElementById('root');
    const root = ReactDOMClient.createRoot(container);
    root.render(
        <React.StrictMode>
            <RouterProvider router={router}/>
        </React.StrictMode>);
}
