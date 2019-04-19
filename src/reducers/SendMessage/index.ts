import {MessageState, MessageActionTypes, SEND_MESSAGE } from "../../actions/actionTypes";

const initalState: MessageState = {
    messages: []
}

export const MessageReducer =  (state = initalState, action: MessageActionTypes): MessageState => {
    switch(action.type) {
        case "SEND_MESSAGE":
            return {
              messages:  [...state.messages, action.payload]
            };
        default:
            return state;
    }
};