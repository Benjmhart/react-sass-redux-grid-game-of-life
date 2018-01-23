import { CHANGE_RATE } from "../actions/action_types";

export default function (state = 1000, action) {
	console.log(`Rate Reducer Running with ${action.type}`)
	switch (action.type) {
		case CHANGE_RATE:
			console.log('ChangeRate payload received by reducer')
			return action.payload;
		default:
			return state;
	}
}