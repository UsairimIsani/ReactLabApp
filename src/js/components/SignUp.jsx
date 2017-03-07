import React, { Component, PropTypes } from 'react'
import { auth } from "../firebase";
import { Link , hashHistory } from "react-router";
class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : '',
            error: {
                message: ''
            },
           
        }
    }
    signUp(){
        console.log("This State", this.state)
        const { email , password } = this.state; 
        auth.createUserWithEmailAndPassword(email,password)
        
        .catch(error => {console.log("Error :",error.message);this.setState({error})});
        // console.log("Error message", this.state.error.message);
        this.setState({
            email: '',
            password : '',
            error : {
                message : ''
            },
          
        });
        hashHistory.push("/signin");
        
      
        
    }
    render () {
        return (
            <center>
                <div className="form-inline centre container">
                    <div className="form-group">
                        <input type="email" className="form-control" onChange={(e) => this.setState({email:e.target.value})} placeholder="Email" value={this.state.email}/>
                        <input type="password" className="form-control" onChange={(e) => this.setState({password: e.target.value })} placeholder="Password"  value={this.state.password}/>
                        <button className="btn btn-primary" onClick={() => this.signUp()}>Sign Up</button>
                    </div>
                    <div>{this.state.error.message}</div>
                </div>
                <div>
                    <Link to="/"><button className="btn btn-success">Home</button></Link>
                </div>
                </center>
           
        )
    }
}

SignUp.propTypes = {

}

export default SignUp;