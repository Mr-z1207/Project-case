import * as Type from './actionConstant.js'
import { message } from 'antd'

const getInit = ()=>({
    type:Type.Init,
})

const getLeft = ()=>({
	type:Type.Left
})
const getTop = ()=>({
	type:Type.Top
})
const getRight = ()=>({
	type:Type.Right
})
const getDown = ()=>({
	type:Type.Down
})

export { 
	getInit,
	getLeft,
	getTop,
	getRight,
	getDown
}