const constant = require('../Constants/FluxConstants.jsx');

let userLoginStatus = {
    loggedIn: false, userData:{}
};

const LoginReducer = (state = userLoginStatus, action) => {
    switch (action.type) {
        case constant.UserLogin_Success:

            if (sessionStorage.getItem('user')
                !== null) {
                return {
                    ...state,
                    loggedIn: true,
                    userData: sessionStorage.getItem('user')
                };
            }
            return state;

        case constant.UserLogin_Failure:
            return {
                ...state,
                loggedIn: false,
                userData: action.data
            };
           // return state;

        default:
            return state;
    }
};

module.exports = LoginReducer;


