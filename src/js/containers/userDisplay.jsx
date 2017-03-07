import React , { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import getUsers from "../actions/get_users"

class UserDisplay extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
componentWillMount(){
    console.log("In the will Mount Lifercycle and calling ");
    this.props.getUsers();
}
   render(){
       console.log(`This is the render method and rendering the props ${this.props}`,this.props);
      return( <div>
          <h1>If your coming you'll be shown who els is coming.</h1>
          <ul>
        {/*{this.props.users.map((user,idx)=>{
        return (
            
            <li key={idx}>{user.name}
            </li>
            
        ) 
    })}*/}
       </ul>
         </div>)
    
    }
}
    

    

function mapStateToProps(state){
    return {
        users: state.users,
         
    }
};
function matchDispatchToProps(dispatch){
    return bindActionCreators({getUsers:getUsers}, dispatch)
};

export default connect(mapStateToProps,matchDispatchToProps)(UserDisplay);