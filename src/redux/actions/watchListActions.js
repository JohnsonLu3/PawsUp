
export const addtoWatch = (id) => {
    return ({
        type: "ADD_TO_WATCH",
        payload: {
            id: id
        }
    })
}

export const removeFromWatch = (id) => {
    return ({
        type: "REMOVE_FROM_WATCH",
        payload: {
            id: id
        }
    })
}
