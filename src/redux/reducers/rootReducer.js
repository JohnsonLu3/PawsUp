import { combineReducers } from "redux"
import passListReducer from "./passListReducer"
import watchListReducer from "./watchListReducer"

const rootReducer = combineReducers({
    passList: passListReducer,
    watchList: watchListReducer
})
export default rootReducer