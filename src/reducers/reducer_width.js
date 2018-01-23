import { SET_WIDTH } from "../actions/action_types";

export default function (state = 20, action) {
	console.log(`width Reducer Running with ${action.type}`)
	switch (action.type) {
		case SET_WIDTH:
			console.log('Setwidth payload received by dims reducer')
			return action.payload;
		default:
			return state;
	}
}