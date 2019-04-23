//const AppDispatcher = require('../Dispatcher/AppDispatcher.jsx');
const Constants = require('../Constants/FluxConstants.jsx');
const API = require('../Utilis/API.jsx');
const RootReducer = require('../Reducer/RootReducer.jsx');
//let history = require('../Utilis/helper.jsx');

loadingStart = () => {
    return { type: Constants.Process_Start };
};

loadingEnd = () => {
    return { type: Constants.Process_End };
};

requestSuccess = (data) => {
    return { type: Constants.REQUEST_SUCCESS, data: data };
};

requestError = (data) => {
    return { type: Constants.REQUEST_ERROR, data: data };
};

userLoginSuccess = () => { return { type: Constants.UserLogin_Success } };

userLoginFailure = (error) => {
    return {
        type: Constants.UserLogin_Failure, data:error
    };
};

class LoginAction {

    constructor() {
       
    }

    userData = function (userName, password) {
        this.userName = userName;
        this.password = password;
    };

    userLogin = (dispatch,history) => {

        dispatch(loadingStart());
       
        API.Login(this.userName, this.password).then(res => {

            if (res.data.isSuccess) {
                dispatch(requestSuccess(res.data));
                sessionStorage.setItem('user', res.data.result);
                dispatch(userLoginSuccess());
                history.push('/about/sheri');
            }
            else {
                alert(res.data.message);
                dispatch(userLoginFailure(res.data.message));
            }

            dispatch(loadingEnd());
        },
            error => {
                dispatch(requestError());
                alert(error.toString());
                dispatch(userLoginFailure(error.toString()));
                dispatch(loadingEnd());
             //   history.push('/about/sheri');
            }
        );

    }

}

//const loginAction=new LoginAction;
module.exports = LoginAction;