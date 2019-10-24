import React,{ Component } from 'react'

import { 
	BrowserRouter as Router, 
	Route, 
	Link,
	Switch,
	Redirect,
} from "react-router-dom"

import Home from 'pages/Home/'

class App extends Component{
	render(){
		return (
			<Router forceRefresh={true}>
				<Switch>
					<Route path="/" component={Home}/>
				</Switch>
			</Router>
		)
	}
}

export default App