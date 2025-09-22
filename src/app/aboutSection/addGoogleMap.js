"use client"
import React  from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

export default function Googlemap   () {
const { isLoaded, loadError } = useLoadScript ({
googleMapsApiKey: "AIzaSyBBIq2v5x76iASz2EMBu8CHWgZgvWn0D70",
});
const mapRef = React.useRef();
const onMapLoad = React.useCallback((map) => {
mapRef.current = map;
}, []);
if (loadError) return "Error";
if (!isLoaded) return "Maps";

return (
<div className="mb-70" >
<GoogleMap
mapContainerStyle= {{
height: "500px",
width:"500px"}}
center= {{ lat: 28.7041 ,
    lng:77.1025
}}
zoom={13}
onLoad={onMapLoad}></GoogleMap>
</div>

)
}