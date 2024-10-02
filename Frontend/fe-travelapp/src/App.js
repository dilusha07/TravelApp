import { useState } from "react";
import "./app.css";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

function App() {
  const [viewport, setViewport] = useState({
    latitude: 47.040182,
    longitude: 17.071727,
    zoom: 4,
  });

  const handleMarkerClick = (id, lat, long) => {
    setCurrentPlaceId(id);
    setViewport({ ...viewport, latitude: lat, longitude: long });
  };
  
  return (
  <div className="App">
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken="process.env.REACT_APP_MAPBOX"
      mawpStyle="mapbox://styles/safak/cknndpyfq268f17p53nmpwira"
      onViewportChange={(viewport) => setViewport(viewport)}
    />
       <Marker
              latitude={p.lat}
              longitude={p.long}
              offsetLeft={-3.5 * viewport.zoom}
              offsetTop={-7 * viewport.zoom}
        >
           <Room
                style={{
                  fontSize: 7 * viewport.zoom,
                  color: "slateblue",
                  cursor: "pointer",
                }}
                onClick={() => handleMarkerClick(p._id, p.lat, p.long)}
              />
        </Marker>
    </div>
  );
}

export default App;
