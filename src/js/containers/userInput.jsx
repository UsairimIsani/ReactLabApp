import React , { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import collectUserData from "../actions/index";
class User{
    constructor(id,name,age,email){
        this.id = id;
        this.name = name;
        this.age = age;
        this.email = email;
    }
}

class UserInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:"",
            email: "",
            age : Number(""),
            id :null 
        }
        this.handleUsers = this.handleUsers.bind(this);
        this.renderList = this.renderList.bind(this);
    }
    
    handleUsers(e){
        e.preventDefault();
    
    this.props.collectUserData(new User(Date.now(),this.state.name,this.state.age,this.state.email));
    this.setState({name: "",email:"",   age : Number(""),})
    
}
renderList(){
    return (
        <div>
            <form action="POST" onSubmit={this.handleUsers}>
                <input type="text" onChange={(e) => this.setState({name: e.target.value})} value={this.state.name} placeholder="Name"/>
                <input type="email" onChange={(e) => this.setState({email:e.target.value})} value={this.state.email} placeholder="Email"/>
                <input type="number" onChange={(e) => this.setState({age :e.target.value})} value={this.state.age} placeholder="Age"/>
                <input type="submit" value="I'm in."/>
            </form>
        </div>
    )
}
    render(){
        return(
        <div>
            {this.renderList()}
             
        </div>); 
 
 

    

    }
}

function mapStateToProps(state){
    return {
        users: state.users,
         
    }
};
function matchDispatchToProps(dispatch){
    return bindActionCreators({collectUserData : collectUserData,}, dispatch)
};

export default connect(mapStateToProps,matchDispatchToProps)(UserInput);

