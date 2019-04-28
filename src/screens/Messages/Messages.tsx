import * as React from "react";
import { MessageProps, MessageStat } from "./types";
import { SendMessage } from "../../actions/SendMessage";
import { connect, MapStateToProps } from "react-redux";
import {MessageBox} from "../../components/Messages";
import Auth from "../../Auth/Auth";
import { AppState } from "../../reducers";
import { SyntheticEvent } from "react";
import { Message } from "../../actions/actionTypes";
import { StyledTextBox } from "../../styled-components/TextInput";
import { StyledButton } from "../../styled-components/Button";
import { store } from "../../Root";

class Messages extends React.Component<MessageProps, MessageStat> {
  constructor(props: MessageProps) {
    super(props);
    this.state = {
      message: "",
      name: ""
    };
  }

  public componentDidMount(): void {
    // @ts-ignore
      this.props.dispatch(
      SendMessage({
        name: "Test Name",
        message: "Test Message",
        date: this.getData()
      })
    );

    new Auth().handleAuth();
  }

  public submitMessage = (e: SyntheticEvent) => {
    e.preventDefault();
    // @ts-ignore
      this.props.dispatch(SendMessage({
      name: this.state.name,
      message: this.state.message,
      date: this.getData()
    }));
    this.setState({ name: "", message: "" });
  };

  public onChange = (e: SyntheticEvent) => {
    // @ts-ignore
    this.setState({ [e.target.name]: e.target.value });
  };

  private getData = (): number => {
    const date = new Date();
    return date.getTime();
  };
  render() {
    const { messages } = this.props.message;
    console.log(store.getState());
    return (
      <>
        <form>
          <StyledTextBox
            onChange={e => this.onChange(e)}
            name="name"
            value={this.state.name}
            className={this.props.className}
            placeHolder={"Enter Title"}
          />
          <StyledTextBox
            onChange={e => this.onChange(e)}
            name="message"
            value={this.state.message}
            className={this.props.className}
            placeHolder={"Enter Message"}
          />
          <StyledButton onClick={e => this.submitMessage(e)}>
            Send Message
          </StyledButton>
        </form>
        {messages.map((message: Message) => (
            <MessageBox title={message.name} value={message.message} date={message.date}/>
        ))}
      </>
    );
  }
}

const mapStateToProps: MapStateToProps<any,any,any> = (state: AppState) => ({
  message: state.messageReducer,
});

// const mapDispatchToProps: MapDispatchToProps<any, any> = {
//   messageAction: SendMessage
// };

export default connect(mapStateToProps)(Messages);
