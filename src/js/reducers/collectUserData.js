import db from "../firebase/firebase";
export default (state = null,action ) => {
    switch(action.type){
        case "NEW_USER_ADDED" : 
         return (db.ref("users").push().set({
            ...action.payload
        }));
    }
    return state;
}