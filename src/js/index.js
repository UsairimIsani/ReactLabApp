
import "../css/index.scss";
import React , { Component }from "react";
import ReactDOM , {render} from "react-dom";
import { Router , Route , Link , hashHistory , IndexRoute } from "react-router";
import { createStore , applyMiddleware } from "redux";
import reducer from "./reducers";
import App from "./components/index.jsx";
import thunk from "redux-thunk"
import { Provider } from "react-redux";
import logger from "redux-logger";
import { auth } from "./firebase";
import  SignUp from "./components/SignUp.jsx";
import  SignIn from "./components/SignIn.jsx";
import  logUser  from "./actions";
import BloodBank from "./components/BloodBank.jsx";
import "./style/tether.min.js";







const middleWare = applyMiddleware(thunk , logger() );

 const store = createStore(reducer,
//  __REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  middleWare);
console.log(store.getState());
auth.onAuthStateChanged(user =>
    {
          if(user){
           
           const { email } = user;
           store.dispatch(logUser(email));
        }else{
           
        }
    }
)
render(
    <Provider   store = {store}>
        <Router path="/" history={hashHistory}>
            <Route path="/" component={App}></Route>
            <Route path="/bloodbank" component={BloodBank}></Route>
            
            <Route path="/signup" component={SignUp}></Route> 
            <Route path="/signin" component={SignIn}></Route>
        </Router>
     </Provider>    
,document.getElementById('root'));
