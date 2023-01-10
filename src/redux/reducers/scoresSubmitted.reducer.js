
const submittedQReducer = (state = '',action) => {
    switch (action.type) {
        case 'SET_SUBMITTED':
            console.log('in SET_SUBMITTED',action.payload)
            return action.payload
        default:
            return state;
    }
}





export default submittedQReducer;