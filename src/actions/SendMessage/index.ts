import { SEND_MESSAGE, Message, MessageActionTypes} from "../actionTypes";

// TypeScript infers that this function is returning SendMessageAction
export const SendMessage = (newMessage: Message): MessageActionTypes => {
    return {
        type: SEND_MESSAGE,
        payload: newMessage,
    }
};