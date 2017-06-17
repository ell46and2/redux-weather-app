import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {

	switch(action.type) {
		case FETCH_WEATHER:
			return [action.payload.data, ...state]; // Never mutate the state, always return a new instance of state. Use Spread syntax to create a new array of new data plus the current state array.
	}
	return state;
}