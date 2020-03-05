import { combineReducers } from "redux"
import passListReducer from "./passListReducer"
import watchListReducer from "./watchListReducer"
import petListReducer from "./petListReducer"

const rootReducer = combineReducers({
    passList: passListReducer,
    watchList: watchListReducer,
    petList: petListReducer
})
export default rootReducer