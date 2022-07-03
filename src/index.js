import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

import './index.css';
import App from './App';
import {FavoritesContextProvider} from "./store/favorite-context";

//with this wrapping all the components able to interact with the context
ReactDOM.render(
    <FavoritesContextProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </FavoritesContextProvider>,
    document.getElementById('root')
);
