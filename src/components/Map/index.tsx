import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import image from '../../Images/pin-blue.png'

const AnyReactComponent = ({ image }: any) => <img src={image} alt={'pointer'}/>;

    interface Props {
        center: {
            lat: number,
            lng: number
        }
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
                        image={image}
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;