import { History } from 'history';

export interface HomeProps {
    time?: number;
    history: History;

}

export interface HomeState {
    profession: string;
}