import React, {Component} from 'react'

export default class BloodCard extends Component {
    constructor(props){
        super(props);
        // this.state = {
        //     donor : {
        //         name: '',
        //         age : null,
        //         bloodGroup : '',
        //         gender : '',
        //         photoURl : ''
        //     }
    // }
    }
    render() {
        return (
            <div style ={ { width: 320, margin: 20  }}>
                <div className="card" style={{}}>
                    <img className="card-img-top" src="usairim.jpg" style={
                        {width:318,height:180}
                    } alt="Card image cap"/>
                    <div className="card-block">
                        <h4 className="card-title">{this.props.donor.name}</h4>
                     
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Blood Group : {this.props.donor.bloodGroup}</li>
                        <li className="list-group-item">Age : {this.props.donor.age}</li>
                        <li className="list-group-item">Gender : {this.props.donor.gender}</li>
                    </ul>
                    <div className="card-block">
                        <a href="" className="card-link">More</a>
                        <a href="" className="card-link btn btn-primary">Use Blood</a>
                    </div>
                </div>
            </div>
            )
    }
}