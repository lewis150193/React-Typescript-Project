import {GET_CHARACTERS} from "../actionTypes";
import {Dispatch} from "redux";


export const getCharacters =  () => (dispatch: Dispatch) => {
    fetch('https://rickandmortyapi.com/api/character')
        .then(results => results.json())
        .then(characters => {
            return dispatch({
                type: GET_CHARACTERS,
                payload: characters.results,
            });
        })
};
