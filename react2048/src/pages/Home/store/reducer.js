import * as Type from './actionConstant.js'
const { fromJS } = require('immutable');

import { LeftMove, RightMove, rotate, LeftHasRepeat, RightHasRepeat, createCeli } from 'util'

const defaultState = fromJS({
	cellNum:[
		[null,null,null,null],
		[null,null,null,null],
		[null,null,null,null],
		[null,null,null,null]
	]
})

export default (state=defaultState,action)=>{
	if (action.type == Type.Init) {
		const data = [...state.get('cellNum')].map((value)=>{
			return [...value]
		})

		createCeli(data)

		return state.set('cellNum',data)
	}else if(action.type == Type.Left){
		const data = [...state.get('cellNum')].map((value)=>{
			return [...value]
		})

		var Arr1 = LeftMove(data)

		var Arr2 = LeftHasRepeat(Arr1)
		
		var ArrDone = LeftMove(Arr2)

		return state.set('cellNum',ArrDone)
	}else if(action.type == Type.Top){
		const data = [...state.get('cellNum')].map((value)=>{
			return [...value]
		})
		var rotateData1 = rotate(data)

		var Arr1 = LeftMove(rotateData1)

		var Arr2 = LeftHasRepeat(Arr1)

		var Arr3 = LeftMove(Arr2)

		var ArrDone = rotate(Arr3)

		return state.set('cellNum',ArrDone)
	}else if(action.type == Type.Right){
		const data = [...state.get('cellNum')].map((value)=>{
			return [...value]
		})
		
		var Arr1 = RightMove(data)

		var Arr2 = RightHasRepeat(Arr1)

		var ArrDone = RightMove(Arr2)

		return state.set('cellNum',ArrDone)
	}else if(action.type == Type.Down){
		const data = [...state.get('cellNum')].map((value)=>{
			return [...value]
		})
		var rotateData1 = rotate(data)

		var Arr1 = RightMove(rotateData1)

		var Arr2 = RightHasRepeat(Arr1)

		var Arr3 = RightMove(Arr2)

		var ArrDone = rotate(Arr3)

		return state.set('cellNum',ArrDone)
	}
    return state
}