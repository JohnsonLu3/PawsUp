import Axios from 'axios'

export const removePet = (pet) => {
    return {
        type: "REMOVE_PET",
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
export const fetchPets = (page = 1) => {
    return (dispatch) => {
        dispatch(fetchPetsRequest())
        Axios.get(`/getPets?page=${page}`)
            .then(res => {
                dispatch(fetchPetsSuccess(res.data))
            })
            .catch(err => {
                dispatch(fetchPetsFailure(err))
            })
    }
}