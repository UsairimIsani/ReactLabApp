let user = {
    email : null
};
(state = user, action) => {
    switch(action.type){
        case 'SIGNED_IN' : 
        const { email } = action;
        user = {
            email
        };
        return user;
    default: 
    return state;    
    };

}
