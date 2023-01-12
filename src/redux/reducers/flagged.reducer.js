//'SET_FLAGGED'

const questionFlaggedList = (state = [],action) => {
    switch (action.type) {
        case 'SET_FLAGGED':
            console.log('in SET_FLAGGED',action.payload)
            return action.payload
        default:
            return state;
    }
}

export default questionFlaggedList;