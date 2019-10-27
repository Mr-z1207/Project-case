import React,{ Component } from 'react'
import { Row, Col } from 'antd';


import "./index.css"
import { connect } from 'react-redux'
import { Action } from './store'

import { getColor } from 'util'

class Home extends Component{
	constructor(props){  
        super(props)
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.isRe = true
    }
    componentDidMount(){
        this.props.handleInit()
        this.props.handleInit()
        document.addEventListener('keydown', this.handleKeyDown)
    }

	shouldComponentUpdate(nextProps, nextState) {
		if(JSON.stringify(nextProps) == JSON.stringify(this.props)) {
			this.isRe = false
			return false
		}else {
			this.isRe = true
			return true
		}
	}

	componentDidUpdate(){
		getColor()
	}

	handleKeyDown(ev){
		// console.log(ev.keyCode)
		switch(ev.keyCode) {
			case 37:
				this.props.handleLeft()
				// this.props.handleInit()
			break;
			case 38:
				this.props.handleTop()
				// this.props.handleInit()
			break;
			case 39:
				this.props.handleRight()
				// this.props.handleInit()
			break;
			case 40:
				this.props.handleDown()
				// this.props.handleInit()
			break;
		}
		if (this.isRe) {
			setTimeout(function() {
				this.props.handleInit()
			}.bind(this),200)
		}
    }
	render() {
		const { cellNum } = this.props
		const cellData = [...cellNum].map((value)=>{
			return [...value]
		})
		return <div id="game-box">
			<Row>
				<Col span={6} className="cellCol">
					<div className="cellBox">{cellData[0][0]}</div>
				</Col>
				<Col span={6} className="cellCol">
					<div className="cellBox">{cellData[0][1]}</div>
				</Col>
				<Col span={6} className="cellCol">
					<div className="cellBox">{cellData[0][2]}</div>
				</Col>
				<Col span={6} className="cellCol">
					<div className="cellBox">{cellData[0][3]}</div>
				</Col>
			</Row>
			<Row>
				<Col span={6} className="cellCol">
					<div className="cellBox">{cellData[1][0]}</div>
				</Col>
				<Col span={6} className="cellCol">
					<div className="cellBox">{cellData[1][1]}</div>
				</Col>
				<Col span={6} className="cellCol">
					<div className="cellBox">{cellData[1][2]}</div>
				</Col>
				<Col span={6} className="cellCol">
					<div className="cellBox">{cellData[1][3]}</div>
				</Col>
			</Row>
			<Row>
				<Col span={6} className="cellCol">
					<div className="cellBox">{cellData[2][0]}</div>
				</Col>
				<Col span={6} className="cellCol">
					<div className="cellBox">{cellData[2][1]}</div>
				</Col>
				<Col span={6} className="cellCol">
					<div className="cellBox">{cellData[2][2]}</div>
				</Col>
				<Col span={6} className="cellCol">
					<div className="cellBox">{cellData[2][3]}</div>
				</Col>
			</Row>
			<Row>
				<Col span={6} className="cellCol">
					<div className="cellBox">{cellData[3][0]}</div>
				</Col>
				<Col span={6} className="cellCol">
					<div className="cellBox">{cellData[3][1]}</div>
				</Col>
				<Col span={6} className="cellCol">
					<div className="cellBox">{cellData[3][2]}</div>
				</Col>
				<Col span={6} className="cellCol">
					<div className="cellBox">{cellData[3][3]}</div>
				</Col>
			</Row>
		</div>;
	}
}

const mapStateToProps = (state)=>({
	cellNum:state.get('Home').get('cellNum')
})

const mapDispatchToProps = (dispatch)=>({
	handleInit:()=>{
		dispatch(Action.getInit())
	},
	handleLeft:()=>{
		dispatch(Action.getLeft())
	},
	handleTop:()=>{
		dispatch(Action.getTop())
	},
	handleRight:()=>{
		dispatch(Action.getRight())
	},
	handleDown:()=>{
		dispatch(Action.getDown())
	}
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)