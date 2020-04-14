let initialState = {
    lat: 40.7128,
    long: -74.0060,
    sideMenu_isOpen: false
}

const utilsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_LOCATION":
            return {
                ...state,
                lat: action.payload.lat,
                long: action.payload.long
            };
        case "SET_SIDEMENU_OPEN":
            return {
                ...state,
                sideMenu_isOpen: true
            };
        case "SET_SIDEMENU_CLOSE":
            return {
                ...state,
                sideMenu_isOpen: false
            };
        default:
            return state;
    }
}
export default utilsReducer;