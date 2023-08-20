import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';
import './DirectionsMap.css'; // Import your custom CSS file

import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhbGlrYWhtZWQiLCJhIjoiY2xsaGkxOGhvMWdxMDNmbWd2eGxsNzd4ZSJ9.GYMldYREEIBZv3YCsDPBag';

const DirectionsMap = () => {
  const [selectedDistance, setSelectedDistance] = useState(null);
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-79.4512, 43.6568],
      zoom: 13
    });
    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken
    });

    // Add a callback to listen for route events
    directions.on('route', event => {
      if (event.route) {
        const distanceMiles = event.route[0].distance;
        const distanceKm = Math.round(distanceMiles).toFixed(2); // Convert miles to kilometers
        setSelectedDistance(distanceKm);
      } else {
        setSelectedDistance(null);
      }
    });
    map.addControl(
      new MapboxDirections({
        accessToken: mapboxgl.accessToken
      }),
      'top-left'
    );
  }, []);

  return (
    <div className="map-container">
      <div id="map" />
      <div className='display-distance'>   
  
      </div>
      {selectedDistance && (
         <h5> Distance: {selectedDistance} miles</h5>
      )}
    </div>
  );
};

export default DirectionsMap;
