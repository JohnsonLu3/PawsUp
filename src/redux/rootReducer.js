import { combineReducers } from "redux"
import passListReducer from "./PassList/passListReducer"
import watchListReducer from "./WatchList/watchListReducer"
import petListReducer from "./Pets/petListReducer"
import utilsReducer from "./Utils/utilsReducer"

const rootReducer = combineReducers({
    passList: passListReducer,
    watchList: watchListReducer,
    pets: petListReducer,
    utils: utilsReducer
})
export default rootReducer