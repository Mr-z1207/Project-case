import * as Type from './actionConstant.js'
import { message } from 'antd'

const getSetCountAction  = (data)=>({
    type:Type.SET_COUNT,
    payLoad:data
})

export {getCountAction}