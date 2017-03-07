// import "../css/bootstrap.min.css";
import "../css/index.scss";
import React , { Component }from "react";
import ReactDOM , {render} from "react-dom";
import { Router , Route , Link , hashHistory } from "react-router";
import { createStore , applyMiddleware } from "redux";
import rootReducer from "./reducers";
import App from "./components/index.jsx";
import thunk from "redux-thunk"
import { Provider } from "react-redux";
import logger from "redux-logger";
import { auth } from "./firebase";
import  SignUp from "./components/SignUp.jsx";
import  SignIn from "./components/SignIn.jsx"



class Home extends Component {
    render () {
        return (
            <div>
                <h1>Home</h1>
            </div>
        )
    }
}


// const middleWare = applyMiddleware(thunk , logger() )

//  const store = createStore(rootReducer, middleWare);
// console.log(store.getState());
auth.onAuthStateChanged(user =>
    {
        if(user){
           hashHistory.push("/home");
        }else{
            hashHistory.push("/app");
        }
    }
)
render(
    // <Provider store = {store}>
        <Router history={hashHistory}>
            <Route path="/home" component={Home}></Route>
            <Route path="/" component={App}></Route>
            <Route path="/signup" component={SignUp}></Route> 
            <Route path="/signin" component={SignIn}></Route>
        </Router>
    // </Provider>    
,document.getElementById('root'));
