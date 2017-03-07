import "../css/main.scss";
import React , { Component }from "react";
import ReactDOM , {render} from "react-dom";
import { createStore , applyMiddleware } from "redux";
import rootReducer from "./reducers";
import App from "./components/index.jsx";
import thunk from "redux-thunk"
import { Provider } from "react-redux";
import logger from "redux-logger";
const middleWare = applyMiddleware(thunk , logger() )

 const store = createStore(rootReducer, middleWare);
console.log(store.getState());

render(
    <Provider store = {store}>
        <App></App>
    </Provider>    
,document.getElementById('root'));
