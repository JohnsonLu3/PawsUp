
const watchListReducer = (watchList = new Map(), action) => {
    switch (action.type) {
        case "ADD_TO_WATCH":
            return [
                ...watchList,
                action.payload
            ]
        case "REMOVE_FROM_WATCH":
            return watchList
        default:
            return watchList
    }
}
export default watchListReducer