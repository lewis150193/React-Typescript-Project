import {GET_CHARACTERS} from "../actions/actionTypes";
import {AnyAction} from "redux";
import {initstate, } from "../initalState";

export const characters = (state = initstate, action: AnyAction) => {
    switch (action.type) {
        case GET_CHARACTERS:
            return action.payload;
        default:
            return state;
    }
};
//
export const AddMr = (state: any) => {

    let nameString: string;

    if(state.charactersReducer){
         nameString = 'Howdy'
    } else {
        nameString = 'Powdy'
    }

    return state.charactersReducer.map((m: any) => `${nameString} ${m.name} - `)
};
