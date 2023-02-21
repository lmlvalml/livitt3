import React from "react";
import {MapContainer, Marker, Popup,TileLayer} from 'react-leaflet'
import "leaflet/dist/leaflet"

   
    const position = [55,-0.09 ]

 export default function Maps(){
    return(
        <div className="box-2">
            <MapContainer center={position} zoom={13} className='Maps'>
                
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://api.maptiler.com/maps/286d3053-06ba-42e5-989f-df983fd1a144/style.json?key=UUPCzpM7YSZVLK4y5lsv"
                />
                <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
                </Marker>
            </MapContainer>,
        </div>
    );
} 

 