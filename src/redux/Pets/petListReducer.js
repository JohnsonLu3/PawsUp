const petListReducer = (petList = [], action) => {
    switch (action.type) {
        case "ADD_TO_PET_LIST":
            return [...petList, action.payload]
        case "REMOVE_FROM_PET_LIST":
            return petList.filter(pet => pet !== action.payload)
        case "FETCH_PETS_REQUEST":
            console.log("TESTEST")
            return {
                ...petList,
                loading: true
            }
        case "FETCH_PETS_SUCCESS":
            console.log("TESTEST")
            return {
                loading: false,
                petList: action.payload,
                error: ''
            }
        case "FETCH_PETS_FAILURE":
            return {
                loading: false,
                petsList: [],
                error: action.payload
            }
        default:
            return petList
    }
}
export default petListReducer