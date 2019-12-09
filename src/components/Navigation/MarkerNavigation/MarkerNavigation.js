import React from 'react'
import {Marker} from "react-google-maps"

const MarkerNavigation = (props) => {

    const onMarkerClick = () => {
        console.log('dfdf')
    };

    return (
        <Marker position={{lat: 53.904541, lng: 27.561523 }}
        onClick={onMarkerClick}
        {...props}
        
        />
    )

}
export default MarkerNavigation