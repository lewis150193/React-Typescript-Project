import {MessageState} from "../../actions/actionTypes";
import {SendMessage} from "../../actions/SendMessage";

export interface MessageStat {
    name: string
    message: string
}

export interface MessageProps {
    message: MessageState,
    messageAction: typeof SendMessage
}