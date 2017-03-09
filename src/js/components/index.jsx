import React, {Component} from 'react'
import {Link ,hashHistory} from "react-router";
import { connect } from "react-redux";
import { auth } from "../firebase";
class App extends Component {
  
    render() {
        return (
            <center>
                <h1>Blood Bank</h1>
                <h2>Please Sign In or Sign Up</h2>
                <Link to="/signin">
                    <button className="btn btn-success">
                        Sign In
                    </button>
                </Link>
                <Link to="/signup">
                    <button className="btn ">
                        Sign Up
                    </button>
                </Link>
                
               
            </center>
        )
    }
}
function mapStateToProps(state){
    console.log("State", state);
    return {};
}

export default connect(mapStateToProps)(App);