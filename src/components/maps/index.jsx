import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

function Maps() {
  return (
    <MapContainer center={[-6.963611, 107.753889]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://maps.app.goo.gl/Zkx4nVkSqa8gj5qn7">OpenStreetMap</a> contributors'
      />
      <Marker position={[-6.963611, 107.753889]}>
        <Popup>
        2R33+MF3, Jl. Bojong Cibodas, Sangiang, Kec. Rancaekek, Kabupaten Bandung, Jawa Barat 40396
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Maps