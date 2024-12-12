import { render } from 'preact';
import './index.scss';
import { App } from './app.jsx';
import {  BrowserRouter, Routes, Route } from "react-router";
import ReactDOM from "react-dom/client";


render(<App />, document.getElementById('app'))
