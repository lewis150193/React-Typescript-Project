import { History} from "history";

export interface LoginState {
 loginName: string;
}

export interface LoginProps {
 history: History;
 getcharacters: any;
 characters: any;
 something: any;

}