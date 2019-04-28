import { AppState } from "../index";

export const getCharactersSelector = (state: AppState) =>
  state.charactersReducer;
export const getOneCharacter = (state: AppState, name: string) =>
  state.charactersReducer.filter((char: any) => char.name === name);
