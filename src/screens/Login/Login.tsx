import * as React from 'react';
import {LoginProps, LoginState} from "./types";
import {getCharacters} from "../../actions/getPhotosAction";
import { connect } from 'react-redux'
import {AddMr} from "../../reducers/getPhotosReducer";
import {ListItem} from "../../styled-components/listItem";

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
        console.log(this.props)
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
                <p>{something}</p>
                </div>
        );
    }
}


const mapStateToProps = (state: any) => ({
    characters:  state.charactersReducer,
    something: AddMr(state),
});

const mapDispatchToProps = {
    getcharacters: getCharacters

};
export default connect(mapStateToProps,mapDispatchToProps)(Login);