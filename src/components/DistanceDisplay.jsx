import React from 'react';

const DistanceDisplay = (props) => {
  return (
    <div className="distance">
  {props.prop1 && (
         <h5> Distance: {props.prop1} Kilometers</h5>
      )}
    </div>
  );
};

export default DistanceDisplay;
