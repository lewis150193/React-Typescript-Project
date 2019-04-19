import React, {SyntheticEvent} from 'react'
import {AppState} from "../../reducers";
import {connect} from "react-redux";
import {SendMessage} from "../../actions/SendMessage";
import {MessageProps, MessageStat} from "./types";

export class MessagesScreen extends React.Component<MessageProps,MessageStat> {
    constructor(props: MessageProps) {
        super(props);
        this.state = {
            name: '',
            message: ''
        }
    }

    componentDidMount(): void {
        this.props.messageAction({
            name: 'Test Name',
            message: 'Test Message'
        })
    }

    submitMessage = (e: SyntheticEvent) => {
        e.preventDefault()
        this.props.messageAction({
            name: this.state.name,
            message: this.state.message
        })
    }

    onChange = (e: SyntheticEvent) => {
        // @ts-ignore
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        console.log(this.props);
        console.log(this.state)
        return (
            <div>
                <form>
                    <input type="input" name='name'  onChange={(e) => this.onChange(e)} value={this.state.name}/>
                    <input type="input" name='message' onChange={(e) => this.onChange(e)} value={this.state.message}/>
                    <input type="submit" name='submit' onClick={(e) => this.submitMessage(e)} />
                </form>
            </div>
        );
    }
}
  const mapStateToProps = (state: AppState) => ({
        message: state.messageReducer
    });

 const  mapDispatchToProps = {
        messageAction: SendMessage
    };

export default connect(mapStateToProps,mapDispatchToProps)(MessagesScreen)

