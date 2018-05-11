import React, { Component } from 'react';
import { connect } from 'react-redux';
import City from '../components/City';

class CityContainer extends Component {
  render() {
    return <City {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  city: state.selectCity
});

export default connect(mapStateToProps)(CityContainer);
