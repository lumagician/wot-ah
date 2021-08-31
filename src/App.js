import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function App() {
  return (
    <div className="app">
      <div className="header">
        <h1 className="title-text">Wot-Ah</h1>
        <HeaderButton text="Home"/>
        <HeaderButton text="About"/>
        <HeaderButton text="Support"/>
      </div>
      <div className="content">

        <div className="map-dummy">
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
        </div>

      </div>
      <div className="footer">
        <HeaderButton text="made by lumagician"/>
      </div>
    </div>
  );
}

function HeaderButton(props) {
  return (
    <div className="header-button">
      <p>{props.text}</p>
    </div>
  );
}

export default App;
