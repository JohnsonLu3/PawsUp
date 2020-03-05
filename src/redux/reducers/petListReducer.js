const petListReducer = (petList = [], action) => {
    switch (action.type) {
        case "ADD_TO_PET_LIST":
            return [...petList, action.payload]
        case "REMOVE_FROM_PET_LIST":
            return petList.filter(pet => pet !== action.payload)
        default:
            return petList
    }
}
export default petListReducer