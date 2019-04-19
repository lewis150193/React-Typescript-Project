import {combineReducers} from "redux";
import {characters} from "./GetPhotos/getPhotosReducer";
import {MessageReducer} from "./SendMessage";

export const rootReducer = combineReducers({
    charactersReducer: characters,
    messageReducer: MessageReducer
})

export type AppState = ReturnType<typeof rootReducer>

