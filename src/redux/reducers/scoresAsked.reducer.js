const askedQReducer = (state = '',action) => {
    switch (action.type) {
        case 'SET_ASKED':
            console.log('in SET_ASKED',action.payload)
            return action.payload
        default:
            return state;
    }
}
export default askedQReducer;