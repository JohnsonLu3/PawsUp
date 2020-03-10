import TestData from '../../test/TestPets'

const initalState = {
    loading: false,
    data: [],
    error: ''
}

const petListReducer = (pets = initalState, action) => {
    switch (action.type) {
        case "REMOVE_PET":
            return {
                data: pets.data.filter(pet => pet !== action.payload),
                loading: false,
                error: false
            }
        case "FETCH_PETS_REQUEST":
            return {
                data: pets.data,
                loading: true,
                error: ''
            }
        case "FETCH_PETS_SUCCESS":
            return {
                loading: false,
                data: action.payload,
                error: ''
            }
        case "FETCH_PETS_FAILURE":
            return {
                loading: false,
                data: new TestData().getTestPets().animals,
                error: action.payload
            }
        default:
            return pets
    }
}
export default petListReducer