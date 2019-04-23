
const reactRedux = require('react-redux');

const ConnectLoginComponentToStore = (loginComponent) => {

    const mapStateToProps = state => {
       
        return { loggedIn: state.loginReducer.loggedIn, userData: state.loginReducer.userData, isLoading: state.loadingReducer.isLoading };
    };


    //const mapDispatchToProps = dispatch => {
    //    return {
    //        userLogin: userData => dispatch(userData)
    //    };
    //};

    return reactRedux.connect(mapStateToProps)(loginComponent);

};

module.exports = { ConnectLoginComponentToStore };


