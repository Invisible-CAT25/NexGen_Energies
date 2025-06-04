// components/core/ContactUsPage/OfficeLocationsMap.jsx
import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix default icon issue
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})

// offices data
const offices = [
  {
    id: 1,
    position: [28.4595, 77.0266],
    address: "Head Office: Tower A, Space I Tech Park, Sector 49, Gurugram, Haryana, 122018",
  },
  {
    id: 2,
    position: [25.5941, 85.1376],
    address: "Branch Office: Chanakya City, Dariyapur, Patna, Bihar, 804453",
  },
  {
    id: 3,
    position: [21.2514, 81.6296],
    address: "Branch Office: New Progressive Point, Rishab Nagar, Raipur, Chhattisgarh, 492001",
  },
  {
    id: 4,
    position: [18.5246, 73.8786],
    address: "Branch Office: Pride Icon CHS, Kharadi, Pune, Maharashtra, 411014",
  },
  {
    id: 5,
    position: [22.7196, 75.8577],
    address: "Branch Office: Poddar Plaza, New Siyaganj, Indore, Madhya Pradesh, 452003",
  },
  {
    id: 6,
    position: [20.2960, 85.8246],
    address: "Branch Office: Saheed Nagar Road, Bhubaneswar, Khordha, Odisha, 751007",
  },
  {
    id: 6,
    position: [26.9124, 75.7873],
    address: "Branch Office: Sapphire Center, Ajmer Road, Madrampura, Jaipur, Rajasthan, 302006",
  },
]

const OfficeLocationMap = () => {
  return (
    <div className="w-full h-[400px] mt-10 rounded-2xl overflow-hidden shadow-lg">
      <MapContainer
        center={[23.2599, 77.4126]} // Central India
        zoom={5}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {offices.map(({ id, position, address }) => (
          <Marker key={id} position={position}>
            <Popup>
              <p className="text-sm font-semibold text-gray-700">{address}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default OfficeLocationMap
