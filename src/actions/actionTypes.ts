export const SEND_MESSAGE = 'SEND_MESSAGE';
export const GET_CHARACTERS = 'GET_CHARACTERS';
export const GET_SWEETS = 'GET_SWEETS';

export interface Message {
    name: string
    message: string
    date: number
}

export interface MessagInitaleState {
    messages: Message[]
}

export interface SendMessageAction {
    type: typeof SEND_MESSAGE,
    payload: Message
    
}

interface SendSweets {
    type: typeof GET_SWEETS,
    payload: Message
    sweets: string
}

export type MessageActionTypes = SendMessageAction | SendSweets;