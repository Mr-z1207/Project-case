import { combineReducers } from 'redux-immutable'

import { reducer as HomeReducer } from 'pages/Home/store'

export default combineReducers({
    Home:HomeReducer
})