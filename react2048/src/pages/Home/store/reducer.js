import * as Type from './actionConstant.js'
const { fromJS } = require('immutable');

import { getRand } from 'util'

const defaultState = fromJS({
	cellNum:[
		[0,0,0,0],
		[0,0,0,0],
		[0,0,0,0],
		[0,0,0,0]
	]
})

export default (state=defaultState,action)=>{
	if (action.type == Type.Init) {
		const data = [...state.get('cellNum')].map((value)=>{
			return [...value]
		})

		let cel1 = getRand()
		let cel2
		do{
			cel2 = getRand()
		} while (cel1[0]==cel2[0] && cel1[1]==cel2[1])
		data[cel1[0]][cel1[1]] = 2
		data[cel2[0]][cel2[1]] = 2

		console.log(data)
		return state.set('cellNum',data)
		// return state
	}
    return state
}