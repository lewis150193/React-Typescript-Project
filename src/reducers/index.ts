import {combineReducers} from "redux";
import {characters} from "./getPhotosReducer";

export default combineReducers({
    charactersReducer: characters
})