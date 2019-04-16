import * as React from 'react';
import {LoginProps, LoginState} from "./types";
import {getCharacters} from "../../actions/getPhotosAction";
import { connect } from 'react-redux'
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
        console.log(this.props);
        const { characters } = this.props;
        return (
            <ul>
                {characters.map( (char: any) => (
                       <ListItem key={char.id}>
                           {char.name}
                       </ListItem>
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