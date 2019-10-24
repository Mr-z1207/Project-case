import { combineReducers } from 'redux-immutable'

import { reducer as LoginReducer } from 'pages/Login/store'

export default combineReducers({
    login:LoginReducer
})