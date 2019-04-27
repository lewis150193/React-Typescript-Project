import * as React from "react";
import { HomeProps, HomeState } from "./types";
import { StyledTextBox } from "../../styled-components/TextInput";
import { Wrapper } from "../../components/Wrapper";
import { StyledButton } from "../../styled-components/Button";
import { SyntheticEvent } from "react";
import Map from "../../components/Map";
import queryString from "query-string";

const Cords = {
  center: {
    lat: 51.548936,
    lng: -0.27175
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
    } else {
      // alert("Sorry Wrong Credentials");
      fetch(`http://localhost:9898/service/user/signup`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: queryString.stringify({
          username: username,
          password: password
        })
      }).then(response => {
        console.log(response);
        if (response.status === 200) {
          console.log(response);
          history.push("/login");
        }
      });
    }
  };

  onCheck = () => {
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
          <div style={{ display: "inline-block" }}>
            <input
              type="checkbox"
              onChange={() => this.onCheck()}
              checked={this.state.accepted}
            />
            <p>Accept terms and conditions</p>
          </div>
          <Map center={Cords.center} />
          <StyledButton onClick={e => this.onSumbit(e)}>Click Me</StyledButton>
        </div>
      </Wrapper>
    );
  }
}
