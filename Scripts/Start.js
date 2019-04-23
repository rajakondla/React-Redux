require('E:\\Angular5\\ReactJS - Redux\\node_modules\\bootstrap\\dist\\css\\bootstrap.css');
var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./App.jsx');
const reactRedux = require('react-redux');
const store = require('../Scripts/Store/Store.jsx');

const Provider = reactRedux.Provider;

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('app'));
//ReactDOM.render(<Components.Login />, document.getElementById('app'));