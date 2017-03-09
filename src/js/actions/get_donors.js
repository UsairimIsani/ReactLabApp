import { db } from "../firebase";
export default function getDonors(){
    return dispatch =>  {
        db.ref('donors').once('value', snap => {
            const donors = snap.val();
           
            dispatch(giveDonorsToRducer(donors));
        })
    }
    function   giveDonorsToRducer(donors){
        return {
            type : 'GET_DONORS',
            payload : Object.values(donors)
        }
    }
}

  