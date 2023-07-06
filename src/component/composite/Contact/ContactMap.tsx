//应用
import React, { Fragment, useRef } from "react";
//style
import { css } from "@emotion/react";
import { useTheme } from "@mui/material/styles";
//组件
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/images/marker-icon-2x.png";

type TContactMap = {};

function ContactMap({ ...props }: TContactMap) {
  return (
    <MapContainer
      center={[39.085, 117.199]}
      zoom={6}
      scrollWheelZoom={false}
      attributionControl={false}
      style={{width:'500px', height: '386px', marginTop: '40px'}}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[39.085, 117.199]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default ContactMap;
