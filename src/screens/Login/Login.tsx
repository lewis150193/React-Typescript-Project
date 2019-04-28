import * as React from "react";
import { LoginProps, LoginState } from "./types";
import { getCharacters } from "../../actions/GetPhotos/getPhotosAction";
import { connect } from "react-redux";
import { ListItem } from "../../styled-components/listItem";
import { AppState } from "../../reducers";
import { StyledButton } from "../../styled-components/Button";
import auth from "../../Auth/Auth";
import {
  getCharactersSelector,
  getOneCharacter
} from "../../reducers/GetPhotos/selectors";

class Login extends React.Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
    this.state = {
      loginName: ""
    };
  }

  getAuth = () => {
    return new auth();
  };

  componentDidMount(): void {
    this.props.getcharacters();
  }

  render() {
    if (!this.getAuth().isAuth()) {
      this.props.history.push("/error");
    }
    console.log(this.props.oneChar);
    const { characters, history } = this.props;
    return (
      <div>
        <ul>
          {characters.map((char: any) => (
            <ListItem key={char.id}>{char.name}</ListItem>
          ))}
        </ul>
        <StyledButton onClick={() => history.push("/messages")}>
          Go To Messages
        </StyledButton>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  characters: getCharactersSelector(state),
  oneChar: getOneCharacter(state, "Morty Smith")
});

const mapDispatchToProps = {
  getcharacters: getCharacters
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
