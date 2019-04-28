import {AppState} from "../index";


export const getMessages = (state: AppState) => state.messageReducer;