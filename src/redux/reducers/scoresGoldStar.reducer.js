const scoresGold = (state = [],action) => {
    switch (action.type) {
        case 'SET_GOLDSTARS':
            console.log('in SET_GOLDSTARS',action.payload[0].count)
            return action.payload[0].count;
        default:
            return state;
    }
}
export default scoresGold;