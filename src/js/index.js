
import "../css/index.scss";
import React , { Component }from "react";
import ReactDOM , {render} from "react-dom";
import { Router , Route , Link , hashHistory , IndexRoute } from "react-router";
import { createStore , applyMiddleware } from "redux";
import reducer from "./reducers";

import thunk from "redux-thunk"
import { Provider } from "react-redux";
import logger from "redux-logger";
import { auth , db } from "./firebase";
import  SignUp from "./components/SignUp.jsx";
import  SignIn from "./components/SignIn.jsx";

import "./style/tether.min.js";





db.ref('donor').on('value', (s) => console.log("On value ::" , s.val()));
db.ref('donor').on('value', (s) => console.log("On value ::" , s));
db.ref('donor').once('value', (s) => console.log("Once value ::" , s.val()));



// const middleWare = applyMiddleware(thunk , logger() );

//  const store = createStore(reducer,
//  __REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   middleWare);
// store.subscribe(()=> {
//     console.log('The State of the store', store.getState());
// })
class App extends Component{

    render(){
        return (
            <div>
                <h1>Usairim Isani</h1>
            </div>
        )
    }
}

render(
    <App />
     
,document.getElementById('root'));
