import { combineReducer } from "redux"
import passListReducer from "./passListReducer"
import watchListReducer from "./watchListReducer"

const rootReducer = combineReducer({
    passList: passListReducer,
    watchList: watchListReducer
})
export default rootReducer