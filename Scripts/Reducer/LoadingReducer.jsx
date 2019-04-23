const constant = require('../Constants/FluxConstants.jsx');

let loadingState = { isLoading: false, image: '' };

const LoadingReducer = function (state = loadingState, action) {

    switch (action.type) {
        case constant.Process_Start:
            return {
                ...state,
                isLoading: true,
                image: ''
            };
            
            //return state;

        case constant.Process_End:
            return {
                ...state,
                isLoading: false,
                image: ''
            };
            //return state;

         default: return state;
    }

};


//const loadingReducer = new LoadingReducer();
module.exports = LoadingReducer;