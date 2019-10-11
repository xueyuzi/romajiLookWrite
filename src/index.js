import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router } from "react-router-dom"
import routeConfig from "./routeConfig"
import {renderRoutes} from "react-router-config"
import Header from "./components/Header"
import Footer from "./components/Footer"


ReactDOM.render(
<Router>
    <div>
    <Header />
    {renderRoutes(routeConfig)}
    <Footer />
    </div>
</Router>
, document.getElementById('root'));
registerServiceWorker();
