import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CityList from '../components/CityList';
import { setCities, selectCity } from '../actions';


class CityListContainer extends Component {
  componentWillMount() {
    // TODO: call action
    this.props.setCities();
  }

  render() {
    return <CityList {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  cities: state.cities,
});

const mapDispatchToProps = (dispatch) => {
 return bindActionCreators(
  {
    setCities: setCities,
    selectCity: selectCity
  },
  dispatch
 );
}

export default connect(mapStateToProps, mapDispatchToProps)(CityListContainer);
