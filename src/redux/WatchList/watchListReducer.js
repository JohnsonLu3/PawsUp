
const watchListReducer = (watchList = [], action) => {
    switch (action.type) {
        case "ADD_TO_WATCH":
            return [
                ...watchList,
                action.payload
            ]
        case "REMOVE_FROM_WATCH":
            return watchList.filter(pet => pet.id !== action.payload.id)
        default:
            return watchList
    }
}
export default watchListReducer