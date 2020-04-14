import TestData from '../../test/TestPets'

const initalState = {
    loading: false,
    data: [],
    error: '',
    page: 1
}

const petListReducer = (pets = initalState, action) => {
    switch (action.type) {
        case "ADD_TO_WATCH":
            return {
                ...pets,
                data: pets.data.filter(pet => pet.id !== action.payload.id),
            }
        case "ADD_TO_PASS":
            return {
                ...pets,
                data: pets.data.filter(pet => pet.id !== action.payload.id),
            }
        case "REMOVE_PET":
            return {
                ...pets,
                data: pets.data.filter(pet => pet.id !== action.payload.id),
            }
        case "FETCH_PETS_REQUEST":
            return {
                data: pets.data,
                loading: true,
                error: null
            }
        case "FETCH_PETS_SUCCESS":
            return {
                loading: false,
                data: action.payload,
                error: null
            }
        case "FETCH_PETS_FAILURE":
            return {
                loading: false,
                data: new TestData().getTestPets().animals,
                error: action.payload
            }
        case "INCREMENT_PAGE":
            return {
                ...pets,
                page: pets.page + 1
            }
        default:
            return pets
    }
}
export default petListReducer