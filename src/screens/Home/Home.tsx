import * as React from 'react';
import {Hello} from "../../components/Hello";
import {HomeProps, HomeState} from "./types";

export class Home extends React.Component<HomeProps,HomeState>{
    constructor(props: HomeProps) {
        super(props);
        this.state = {
            profession: 'Developer'
        }
    }

    render() {
        console.log(this.props);

        const { history } = this.props;
        return (
            <div>
                <Hello age={35} name='Lewis'/>
                <p>{this.state.profession}</p>
                <p>{this.props.time}</p>
                <button onClick={() => history.push('/login')}>Click Me</button>
            </div>
        );
    }

}