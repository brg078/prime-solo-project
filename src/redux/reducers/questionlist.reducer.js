const questionList = (state = [],action) => {
    switch (action.type) {
        case 'SET_QUESTIONS':
            console.log('in SET_QUESTIONS',action.payload)
            return action.payload
        default:
            return state;
    }
}

export default questionList;