import * as Type from './actionConstant.js'
import { message } from 'antd'

const getInit  = ()=>({
    type:Type.Init,
})

export { getInit }