import React from 'react';
import { Marker as GoogleMarker } from 'google-maps-react';

function Marker(props) {
    return <GoogleMarker {...props} />;
}

export default Marker;
