const askedQReducer = (state = [],action) => {
    switch (action.type) {
        case 'SET_ASKED':
            console.log('in SET_ASKED',action.payload[0].count)
            return action.payload[0].count;
        default:
            return state;
    }
}
export default askedQReducer;