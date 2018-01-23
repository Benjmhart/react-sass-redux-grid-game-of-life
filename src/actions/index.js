import { SET_MAX, SET_HEIGHT, SET_WIDTH, TOGGLE_USEMAX, CHANGE_RATE } from './action_types';


export function setMax(maxWidth, maxHeight) {
	console.log(`setmax action triggered with width: ${maxWidth} height: ${maxHeight}`)
	const payload = { maxWidth, maxHeight }
	console.log(payload);

	return {
		type: SET_MAX,
		payload
	}
}

export function setHeight(height) {
	return {
		type: SET_HEIGHT,
		payload: height
	}
}

export function setWidth(Width) {
	return {
		type: SET_WIDTH,
		payload: Width
	}
}

export function toggleUseMax() {
	return {
		type: TOGGLE_USEMAX
	}
}

export function changeRate(rate) {
	return {
		type: CHANGE_RATE,
		payload: rate
	}
}