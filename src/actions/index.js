// TODO: add and export your own actions
import cities from '../../data/cities';

export function setCities() {
 // TODO: Api call! For now, simulate a DB
 return {
   type: 'SET_CITIES',
   payload: cities
 }
}

export function selectCity(city) {
 // TODO: Api call! For now, simulate a DB
 return {
   type: 'SELECT_CITY',
   payload: city
 }
}
