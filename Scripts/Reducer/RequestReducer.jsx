const constant = require('../Constants/FluxConstants.jsx');

let requestStatus = {
    isSuccess: false, responseData: {}
};

const RequestReducer = function (state = requestStatus, action) {

    switch (action.type) {

        case constant.REQUEST_SUCCESS:
            return {
                ...state,
                isSuccess: true,
                responseData: action.data
            };
            //return state;
           

        case constant.REQUEST_ERROR:
            return {
                ...state,
                isSuccess: false,
                responseData: action.data
            };
           // return state;
          

         default: return state;

    }

}

module.exports = RequestReducer;