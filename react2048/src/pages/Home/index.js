import React,{ Component } from 'react'
import {  } from 'antd';


import "./index.css"
import { connect } from 'react-redux'
import { Action } from './store'

class Home extends Component{
	constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.handleCount()
    }
	render() {
		// const {usernum,ordernum,productnum } = this.props
		return ;
	}
}

const mapStateToProps = (state)=>({
	usernum:state.get('home').get('usernum'),
    ordernum:state.get('home').get('ordernum'),
    productnum:state.get('home').get('productnum')
})

const mapDispatchToProps = (dispatch)=>({
	handleCount:()=>{
		dispatch(Action.getCountAction())
	}
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)