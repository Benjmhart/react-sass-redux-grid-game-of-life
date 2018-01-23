import { SET_MAX } from "../actions/action_types";

export default function (state = {}, action) {
	console.log(`maxDims Reducer Running with ${action.type}`)
	switch (action.type) {
		case SET_MAX:
			console.log('SetMax payload received by reducer')
			return action.payload;
		default:
			return state;
	}
}