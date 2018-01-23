import { SET_HEIGHT } from "../actions/action_types";

export default function (state = 20, action) {
	console.log(`height Reducer Running with ${action.type}`)
	switch (action.type) {
		case SET_HEIGHT:
			console.log('Setheight payload received by dims reducer')
			return action.payload;
		default:
			return state;
	}
}