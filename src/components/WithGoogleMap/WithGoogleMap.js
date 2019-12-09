import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import MarkerNavigation from '../Navigation/MarkerNavigation/MarkerNavigation'

function Map() {

    return (
<div>
<GoogleMap 
        defaultZoom={12} 
        disableDefaultUI
        defaultCenter={{lat: 53.904541, lng: 27.561523 }}
        defaultOptions={{
            disableDefaultUI: true}} 
        />
        <MarkerNavigation
    />
</div>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap
