const reduxStore = require('redux');
const rootReducer = require('../Reducer/RootReducer.jsx');
const thunkMiddleware = require('redux-thunk');
const reducDevTools = require('redux-devtools-extension');

const store = reduxStore.createStore(rootReducer, reducDevTools.composeWithDevTools());

module.exports = store;