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