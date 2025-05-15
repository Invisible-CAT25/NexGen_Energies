import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Map = () => {
  return (
    <div className='w-11/12 mx-auto mt-20 flex '>
        <MapContainer center={[22.9734, 78.6569]} zoom={5} style={{ height: '80vh', width: '50%' }}>
            <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* Example marker: Delhi */}
            <Marker position={[28.6139, 77.2090]}>
                <Popup>
                    <p>New Delhi</p>
                    1MW+ Commisioned
                </Popup>
            </Marker>
            <Marker position={[27.6139, 77.2090]}>
                <Popup>
                    <p>Agra</p>
                    0.5MW+ Commisioned
                </Popup>
            </Marker>
            {/* Add more markers as needed */}
        </MapContainer>
    </div>
  )
}

export default Map