import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

    interface State {
        center: {
            lag: number,
            lat: number
        }
    }
    interface Props {

    }

class SimpleMap extends Component<State,Props> {
    constructor(props: any) {
        super(props);
        this.state = {
            center:{
                lat: 51.54993961861434,
                lng: -0.27077252045273786
            }
        }
    }

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '50vh', width: '35%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key:'AIzaSyAc74MwP4jB-tL0MB_WG8ItOZXwfgyFLac' }}
                    defaultCenter={this.state.center}
                    defaultZoom={11}
                >
                    <AnyReactComponent
                        lat={this.state.center.lat}
                        lng={this.state.center.lng}
                        text="We are here"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;