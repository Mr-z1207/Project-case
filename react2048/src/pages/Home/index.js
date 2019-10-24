import React,{ Component } from 'react'
import { Row, Col } from 'antd';


import "./index.css"
import { connect } from 'react-redux'
import { Action } from './store'

class Home extends Component{
	constructor(props){  
        super(props)
    }
    componentDidMount(){
        this.props.handleInit()
    }
	render() {
		const { cellNum } = this.props
		const cellData = [...cellNum].map((value)=>{
			return [...value]
		})
		// const cellData = cellNum.toJS()
		return <div id="game-box">
			<Row>
				<Col span={6}>
					<div className="cellBox">{cellData[0][0]}</div>
				</Col>
				<Col span={6}>
					<div className="cellBox">{cellData[0][1]}</div>
				</Col>
				<Col span={6}>
					<div className="cellBox">{cellData[0][2]}</div>
				</Col>
				<Col span={6}>
					<div className="cellBox">{cellData[0][3]}</div>
				</Col>
			</Row>
			<Row>
				<Col span={6}>
					<div className="cellBox">{cellData[1][0]}</div>
				</Col>
				<Col span={6}>
					<div className="cellBox">{cellData[1][1]}</div>
				</Col>
				<Col span={6}>
					<div className="cellBox">{cellData[1][2]}</div>
				</Col>
				<Col span={6}>
					<div className="cellBox">{cellData[1][3]}</div>
				</Col>
			</Row>
			<Row>
				<Col span={6}>
					<div className="cellBox">{cellData[2][0]}</div>
				</Col>
				<Col span={6}>
					<div className="cellBox">{cellData[2][1]}</div>
				</Col>
				<Col span={6}>
					<div className="cellBox">{cellData[2][2]}</div>
				</Col>
				<Col span={6}>
					<div className="cellBox">{cellData[2][3]}</div>
				</Col>
			</Row>
			<Row>
				<Col span={6}>
					<div className="cellBox">{cellData[3][0]}</div>
				</Col>
				<Col span={6}>
					<div className="cellBox">{cellData[3][1]}</div>
				</Col>
				<Col span={6}>
					<div className="cellBox">{cellData[3][2]}</div>
				</Col>
				<Col span={6}>
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
	}
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)