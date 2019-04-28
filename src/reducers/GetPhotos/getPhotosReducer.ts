import {GET_CHARACTERS} from "../../actions/actionTypes";
import {AnyAction} from "redux";
import {AppState} from "../index";

const initstate: Array<any> = [];



export const characters = (state = initstate, action: AnyAction) => {
    switch (action.type) {
        case GET_CHARACTERS:
            return Object.assign([], initstate, action.payload);
        default:
            return state;
    }
};
//
export const getCharactersSelector = (state: AppState) =>  state.charactersReducer;
