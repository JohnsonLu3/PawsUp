
export const addtoPass = (id) => {
    return ({
        type: "ADD_TO_PASS",
        payload: {
            id: id
        }
    })
}
