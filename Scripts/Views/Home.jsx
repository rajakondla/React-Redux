var BaseComponent = require('../Views/BaseComponent.jsx');
var React = require('react');
const dispatch = require('../Dispatcher/Dispatch.jsx');

class Home extends BaseComponent {

    constructor(props) {
        super(props);
    }

    render() {
       // const isLoading = this.props.isLoading;
        return <div> {this.props.userData }</div>;
    }
}

const HomePage = dispatch.ConnectLoginComponentToStore(Home);

module.exports = HomePage;