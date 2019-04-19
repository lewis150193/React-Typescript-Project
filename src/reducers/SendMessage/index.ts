import {MessagInitaleState, MessageActionTypes } from "../../actions/actionTypes";

const initalState: MessagInitaleState = {
    messages: []
}

export const MessageReducer =  (state = initalState, action: MessageActionTypes): MessagInitaleState => {
    switch(action.type) {
        case "SEND_MESSAGE":
            return {
              messages:  [...state.messages, action.payload]
            };
        default:
            return state;
    }
};