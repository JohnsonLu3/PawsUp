
export const addToWatch = (pet) => {
    return ({
        type: "ADD_TO_WATCH",
        payload: pet
    })
}

export const removeFromWatch = (pet) => {
    return ({
        type: "REMOVE_FROM_WATCH",
        payload: pet
    })
}
