
export const addtoWatch = (id, pet) => {
    return ({
        type: "ADD_TO_WATCH",
        payload: {
            id: id,
            pet: pet
        }
    })
}

export const removeFromWatch = (id, pet) => {
    return ({
        type: "REMOVE_FROM_WATCH",
        payload: {
            id: id,
            pet: pet
        }
    })
}
