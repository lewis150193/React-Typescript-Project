import {GET_CHARACTERS} from "../actions/actionTypes";
import {AnyAction} from "redux";

export const characters = (state = [], action: AnyAction) => {
    switch (action.type) {
        case GET_CHARACTERS:
            return action.payload;
        default:
            return state;
    }
};
