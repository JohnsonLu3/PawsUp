
export const addtoPass = (id, pet) => {
    return ({
        type: "ADD_TO_PASS",
        payload: {
            id: id,
            pet: pet
        }
    })
}
