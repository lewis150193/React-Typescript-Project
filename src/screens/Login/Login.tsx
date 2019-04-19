import * as React from 'react';
import {LoginProps, LoginState} from "./types";
import {getCharacters} from "../../actions/GetPhotos/getPhotosAction";
import { connect } from 'react-redux'
import {AddMr} from "../../reducers/GetPhotos/getPhotosReducer";
import {ListItem} from "../../styled-components/listItem";
import { AppState} from "../../reducers";

class Login extends React.Component<LoginProps,LoginState> {
    constructor(props: LoginProps) {
        super(props);
        this.state = {
            loginName: ''
        }
    }

    componentDidMount(): void {
            this.props.getcharacters();
    };

    render() {
        const {history} = this.props;
        console.log(this.props);
        const { characters,  something } = this.props;
        return (
            <div>
            <ul>
                {characters.map( (char: any) => (
                       <ListItem key={char.id}>
                           {char.name}
                       </ListItem>
                ))}
            </ul>
                <button onClick={() => history.push('/messages')}>Go To Messages</button>
                <p>{something}</p>
                </div>
        );
    }
}


const mapStateToProps = (state: AppState) => ({
    characters:  state.charactersReducer,
    something: AddMr(state),
});

const mapDispatchToProps = {
    getcharacters: getCharacters

};
export default connect(mapStateToProps,mapDispatchToProps)(Login);