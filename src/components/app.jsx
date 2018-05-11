import React from 'react';

import CityListContainer from '../containers/CityListContainer';
import CityContainer from '../containers/CityContainer';

const App = () => {
  return (
    <div className="app">
      <CityListContainer />
      <CityContainer />
    </div>
  );
};

export default App;
