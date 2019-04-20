import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

    interface Props {
        center: {
            lat: number,
            lng: number
        }
        text: string
    }

class SimpleMap extends Component<Props> {
    constructor(props: any) {
        super(props);

    }

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '50vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key:'AIzaSyAc74MwP4jB-tL0MB_WG8ItOZXwfgyFLac' }}
                    defaultCenter={this.props.center}
                    defaultZoom={11}
                >
                    <AnyReactComponent
                        lat={this.props.center.lat}
                        lng={this.props.center.lng}
                        text={this.props.text}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;