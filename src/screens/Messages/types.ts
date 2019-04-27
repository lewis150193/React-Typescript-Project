import {MessagInitaleState} from "../../actions/actionTypes";
import {SendMessage} from "../../actions/SendMessage";
import {Dispatch} from "redux";

export interface MessageStat {
    name: string
    message: string
}

export interface MessageProps {
    message: MessagInitaleState,
    messageAction: typeof SendMessage,
    className: string
    dispatch?: Dispatch
}