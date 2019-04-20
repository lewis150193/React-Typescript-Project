import * as React from "react";
import { HomeProps, HomeState } from "./types";
import { StyledTextBox } from "../../styled-components/TextInput";
import { Wrapper } from "../../components/Wrapper";
import { StyledButton } from "../../styled-components/Button";
import { SyntheticEvent } from "react";
import Map from '../../components/Map'

const Cords = {
  center: {
    lat: 51.548936,
    lng: -0.271750
  }
};
export class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      username: "",
      password: "",
      accepted: true
    };
  }

  onChange = (e: SyntheticEvent) => {
    // @ts-ignore
    this.setState({ [e.target.name]: e.target.value });
  };

  onSumbit = (e: SyntheticEvent) => {
    e.preventDefault();
    const { username, password, accepted } = this.state;
    const { history } = this.props;
    if (!accepted) {
      alert("Please accepted terms and conditions");
    } else if (username === "username" && password === "password" && accepted) {
      history.push("/login");
    } else {
      alert("Sorry Wrong Credentials");
    }
  };

  onCheck = (e: SyntheticEvent) => {
    e.preventDefault();
    this.setState(prevState => ({
      accepted: !prevState.accepted
    }));
  };

  render() {
    console.log(this.state);
    return (
      <Wrapper styling={{ flex: 1, color: "black" }}>
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
          <input
            type="checkbox"
            onChange={e => this.onCheck(e)}
            checked={this.state.accepted}
          />
          <Map center={Cords.center} />
          <StyledButton onClick={e => this.onSumbit(e)}>Click Me</StyledButton>
        </div>
      </Wrapper>
    );
  }
}
