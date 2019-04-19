import {combineReducers} from "redux";
import {characters} from "./GetPhotos/getPhotosReducer";
import {MessageReducer} from "./SendMessage";

export const rootReducer = combineReducers({
    messageReducer: MessageReducer,
    charactersReducer: characters,

});

export type AppState = ReturnType<typeof rootReducer>

