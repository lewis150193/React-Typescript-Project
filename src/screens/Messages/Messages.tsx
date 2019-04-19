import * as React from 'react';
import {MessageProps, MessageStat} from "./types";
import {SendMessage} from "../../actions/SendMessage";
import { connect } from 'react-redux'
import {Div} from "../../styled-components/div";

import { AppState } from "../../reducers";
import {SyntheticEvent} from "react";
import {Message} from "../../actions/actionTypes";

class Messages extends React.Component<MessageProps,MessageStat> {
    constructor(props: MessageProps) {
        super(props);
        this.state = {
            message: '',
            name: ''
        }
    }

    componentDidMount(): void {
        this.props.messageAction({
            name: 'Test Name',
            message: 'Test Message'
        })
    }

    submitMessage = (e: SyntheticEvent) => {
        e.preventDefault();
        this.props.messageAction({
            name: this.state.name,
            message: this.state.message
        })
        this.setState({name: '', message: ''})
    };

    onChange = (e: SyntheticEvent) => {
        // @ts-ignore
        this.setState({[e.target.name]: e.target.value});
    };

    render() {
        const { messages } = this.props.message;
        return (
            <>
                <form>
                    <input type="input" name='name'  onChange={(e) => this.onChange(e)} value={this.state.name}/>
                    <input type="input" name='message' onChange={(e) => this.onChange(e)} value={this.state.message}/>
                    <input type="submit" name='submit' onClick={(e) => this.submitMessage(e)} />
                </form>
                {messages.map((message: Message, index: number) => (
                        <Div key={index}>
                        <p> <strong>Title:</strong>{message.name}</p>
                        <p><strong>Message:</strong>{message.message}</p>
                        </Div>
                ))}



            </>
        );
    }
}


const mapStateToProps = (state: AppState) => ({
    message: state.messageReducer
});

const  mapDispatchToProps = {
    messageAction: SendMessage
};

export default connect(mapStateToProps,mapDispatchToProps)(Messages)