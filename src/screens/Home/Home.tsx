import * as React from "react";
import { HomeProps, HomeState } from "./types";
import { StyledTextBox } from "../../styled-components/TextInput";
import { Wrapper } from "../../components/Wrapper";
import { StyledButton } from "../../styled-components/Button";
import { SyntheticEvent } from "react";

export class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  onChange = (e: SyntheticEvent) => {
    // @ts-ignore
    this.setState({ [e.target.name]: e.target.value });
  };

  onSumbit = (e: SyntheticEvent) => {
    e.preventDefault();
    const { username, password } = this.state;
    const { history } = this.props;
    if (username === "username" && password === "password") {
      history.push("/login");
    } else {
      alert("Sorry Wrong Credentials");
    }
  };

  render() {
    console.log(this.state);
    return (
      <Wrapper styling={{flex: 1, color: 'black'}}>
        <div style={{ backgroundColor: "#E0E0E0", flex: 2 }}>
          <StyledTextBox
            className={this.props.className}
            onChange={e => this.onChange(e)}
            name={"username"}
            value={this.state.username}
            placeHolder={"Enter Username"}
          />
          <StyledTextBox
            className={this.props.className}
            onChange={e => this.onChange(e)}
            name={"password"}
            value={this.state.password}
            placeHolder={"Enter Password"}
          />
          <StyledButton onClick={e => this.onSumbit(e)}>Click Me</StyledButton>
        </div>
      </Wrapper>
    );
  }
}
