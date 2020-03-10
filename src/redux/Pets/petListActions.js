import Axios from 'axios'
export const addToPetList = (pet) => {
    return {
        type: "ADD_TO_PET_LIST",
        payload: pet
    }
}

export const removeFromPetList = (pet) => {
    return {
        type: "REMOVE_FROM_PET_LIST",
        payload: pet
    }
}

export const fetchPetsRequest = () => {
    return {
        type: "FETCH_PETS_REQUEST"
    }
}
export const fetchPetsSuccess = pets => {
    return {
        type: "FETCH_PETS_SUCCESS",
        payload: pets
    }
}

export const fetchPetsFailure = error => {
    return {
        type: "FETCH_PETS_FAILURE",
        payload: error
    }
}
export const fetchPets = () => {
    return (dispatch) => {
        dispatch(fetchPetsRequest())
        Axios.get(`/getPets?page=1`)
            .then(res => {
                dispatch(fetchPetsSuccess(res.data))
            })
            .catch(err => {
                throw fetchPetsFailure(err)
            })
    }
}