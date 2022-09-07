import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBr36w7NP3GHMKz4mPuR1F8hf_1kSWBwZg",
  });
  const containerStyle = {
    width: "100%",
    height: "590px",
  };

  const center = {
    lat: -3.745,
    lng: -38.523,
  };
  //   const apiKey = "AIzaSyBr36w7NP3GHMKz4mPuR1F8hf_1kSWBwZg";
  return (
    <div className="Map">
      {" "}
      {isLoaded ? (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          {/* Child components, such as markers, info windows, etc. */}
          <Marker position={center} />
        </GoogleMap>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default Map;
