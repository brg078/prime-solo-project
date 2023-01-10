
const submittedQReducer = (state = '',action) => {
    switch (action.type) {
        case 'SET_SUBMITTED':
            console.log('in SET_SUBMITTED',action.payload[0].count)
            return action.payload[0].count
        default:
            return state;
    }
}





export default submittedQReducer;