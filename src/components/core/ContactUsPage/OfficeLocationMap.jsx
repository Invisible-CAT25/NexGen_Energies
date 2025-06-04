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
    address: "Head Office: 10th Floor, Unit 1032, Tower A, Space I Tech Park, Sohna Road, Sector 49, Gurugram, Haryana, 122018",
  },
  {
    id: 2,
    position: [18.5246, 73.8786],
    address: "Branch Office: 1st Floor, Office No 102, 103, Pride Icon CHS, Kharadi Road, Pune, Maharashtra, 411014",
  },
  {
    id: 3,
    position: [26.9124, 75.7873],
    address: "Branch Office: 1st Floor, Unit 201-202, Sapphire Center, Ajmer Road, Madrampura, Jaipur, Rajasthan, 302006",
  },
  {
    id: 4,
    position: [20.2960, 85.8246],
    address: "Branch Office: Plot No-A/2, Saheed Nagar Road, Bhubaneswar, Khordha, Odisha, 751007",
  },
  {
    id: 5,
    position: [23.3441, 85.3096],
    address: "Branch Office: 1st Floor, MIMEC IT Park Pvt Ltd, Namkum Industrial Area, Namkum Ranchi, 834010",
  },
  {
    id: 6,
    position: [22.7196, 75.8577],
    address: "Branch Office: 3rd Floor, Block C2-C4, Poddar Plaza, New Siyaganj, Indore, Madhya Pradesh, 452003",
  },
  {
    id: 7,
    position: [23.2599, 77.4126],
    address: "Branch Office: BSNL Building CRC Centre, BSNL Bhawan Campus, Hoshangabad Road, Arera Hills, Bhopal, Madhya Pradesh, 462027",
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
