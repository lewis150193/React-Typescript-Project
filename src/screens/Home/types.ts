import { History } from 'history';

export interface HomeProps {
    time?: number;
    history: History;
    className: string

}

export interface HomeState {
    username: string;
    password: string;
}