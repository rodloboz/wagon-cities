import React from 'react';

export default function CityList(props) {

  const renderCities = props.cities.map((city, index) => {
    return  <li key={index}
            onClick={() => props.selectCity(city)}>
              { city.name }
            </li>
  });

  return (
    <ul>
      { renderCities }
    </ul>
  )

}
