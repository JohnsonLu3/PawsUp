import { combineReducers } from "redux"
import passListReducer from "./PassList/passListReducer"
import watchListReducer from "./WatchList/watchListReducer"
import petListReducer from "./Pets/petListReducer"

const rootReducer = combineReducers({
    passList: passListReducer,
    watchList: watchListReducer,
    petList: petListReducer
})
export default rootReducer