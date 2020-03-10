
const passListReducer = (passList = [], action) => {
    switch (action.type) {
        case "ADD_TO_PASS":
            return [
                ...passList,
                action.payload
            ]
        default:
            return passList
    }
}
export default passListReducer