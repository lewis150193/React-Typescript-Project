import * as React from 'react';
import {LoginProps, LoginState} from "./types";
import {getCharacters} from "../../actions/getPhotosAction";
import { connect } from 'react-redux'


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
        console.log(this.props);
        const { characters } = this.props;
        return (
            <ul>
                {characters.map( (char: any) => (
                       <li key={char.id}>
                           {char.name}
                       </li>
                ))}
            </ul>
        );
    }
}


const mapStateToProps = (state: any) => ({
    characters:  state.charactersReducer
});

const mapDispatchToProps = {
    getcharacters: getCharacters

};
export default connect(mapStateToProps,mapDispatchToProps)(Login);