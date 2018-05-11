import React from 'react';

export default function City(props) {
  return (
    <div className="active-city">
      { props.city ? props.city.name : 'Select City'}
    </div>
  )
}
