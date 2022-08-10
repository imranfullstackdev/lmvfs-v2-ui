import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import Logohead from "../UIDesign/Logohead";
import SideNav from "../UIDesign/SideNav";

const Sales = () => {
  const [position, setPosition] = useState(null);
  function LocationMarker() {
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        {console.log(position)}
        <Popup>Imran</Popup>
      </Marker>
    );
  }

  return (
    <>
      <div >
        {<Logohead />}
        <div style={{ background: "#00adff" }}>
          <h3 className="text-center">
            <b className="text-white">Employee Tracker</b>
          </h3>
          
        </div>
        <div className="text-center mb-3">
            <h5 className="mt-3" id="empdeslabel" style={{ color: "#00adff" }}>
            Employee Tracker
            </h5>
          </div>
        <div className="container-fluid d-flex">
          <SideNav />
          <MapContainer
            center={{ lat: 51, lng: -0.09 }}
            zoom={9}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://lmvit.com/">Design By Lmv IT</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker />
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default Sales;
