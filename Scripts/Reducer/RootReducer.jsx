const reducer = require('redux');
const loginReducer = require('../Reducer/LoginReducer.jsx');
const requestReducer = require('../Reducer/RequestReducer.jsx');
const loadingReducer = require('../Reducer/LoadingReducer.jsx');

const rootReducer = reducer.combineReducers({ loginReducer, requestReducer, loadingReducer });

module.exports = rootReducer;