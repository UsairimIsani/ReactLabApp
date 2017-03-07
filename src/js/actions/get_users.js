import db  from "../firebase/firebase"
export default function getUsers(){
    return {
        type: "GET_USERS",
     
    };

}