
const usersListReducer = (state = [],action) => {
    switch (action.type) {
        case 'SET_USERS':
            console.log('in SET_USERS',action.payload)
            return action.payload
        default:
            return state;
    }
}


export default usersListReducer