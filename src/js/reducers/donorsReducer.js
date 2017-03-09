export default (state = {},action) => {
    switch(action.type){
        case 'GET_DONORS' : 
       
        return Object.values(action.payload);
        default : 
        return state;
    }
}