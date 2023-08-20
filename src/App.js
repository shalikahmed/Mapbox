import React from 'react';
import DirectionsMap from './components/DirectionsMap';
import Navbar from "./components/Navbar";
import DistanceDisplay from "./components/DistanceDisplay"
function App() {
  return (
    <div className="App">
      <Navbar />
      <DirectionsMap />
      <DistanceDisplay/>
    </div>
  );
}

export default App;
