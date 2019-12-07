import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps";

// const MenuToggle = props => {
    //     const cls = [
    //         classes.MenuToggle,
    //         'fa'
    //     ]
    //     if (props.isOpen) {
    //         cls.push('fa-times')
    //         cls.push(classes.open)
    //     } else {
    //         cls.push('fa-bars')
    //     }
    
    
    //     return (
    //         <i
    //         className={cls.join(' ')}
    //         onClick={props.onToggle}
    //         />
    //     )
    // }
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
    <Marker position={{lat: 53.904541, lng: 27.561523 }} onClick={() => console.log="Маркер" } />
</div>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap
