export const setLocation = (lat, long) => {
    return ({
        type: "SET_LOCATION",
        payload: {
            lat: lat,
            long: long
        }
    })
}

export const setSideMenuClose = () => {
    return ({
        type: "SET_SIDEMENU_CLOSE"
    })
}

export const setSideMenuOpen = () => {
    return ({
        type: "SET_SIDEMENU_OPEN"
    })
}