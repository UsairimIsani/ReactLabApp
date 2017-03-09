import React, { Component } from 'react'
import BloodCard from "./BloodCard.jsx";
import { connect  } from "react-redux";
import { bindActionCreators } from 'redux';
import  getDonors from "../actions/get_donors";
import { auth } from "../firebase";
import { hashHistory } from 'react-router';
class BloodBank extends Component {
  
     signOut(){
    auth.signOut();
    hashHistory.replace("/");
   } 
    componentWillMount() {
        this.props.getDonors();
        
    }
    componentDidMount() {
        console.log(this.props)
    }
    componentWillReceieveProps(nextProps){
        return nextProps
    }
    shouldComponentUpdate(nextProps){
        return nextProps !== this.props
    }
    render () {
       if(this.props.donors[0] != null || this.props.donors[0] != undefined){
        return (
        <div>
          {this.props.donors.map((donor,idx) => {
              return (
                  <div key={idx} className="line"><BloodCard donor={donor}></BloodCard></div>
              )
          })}
           <button className="btn btn-danger" onClick={() => this.signOut()}>Sign out</button>
        </div>
    )
       }else{
           return(
               <div>
       Loading ...
          </div>
           )
       }
    
       
      
    }
}

function mapStateToProps(state){
    return {
        donors : state.donors
    }
}
function dispatchActionToProps(dispatch){
    return  bindActionCreators({getDonors : getDonors } , dispatch);
}
export default connect(mapStateToProps,dispatchActionToProps)(BloodBank)