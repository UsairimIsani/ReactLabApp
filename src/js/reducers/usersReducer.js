import db from "../firebase/firebase";
// export default () => {
//     const users = [];
//     // db.ref("users").once("value", snap => {
//     //     users.push(snap.val());
//     // })
//     db.ref("users").on("child_added" , snap => {
//         users.push(snap.val());
//     }) 
// return users;

// }
const users = []

export default (state= null,action) => {
    switch(action.type){
        case "GET_USERS":
        const newState = Object.assign({},state,{users:db.ref("users").once("value", (snap) =>  snap.val()).then((response) =>  response)})
        
return newState        

    }
    return state
}
