var React = require('react');
var path = require('path');
var reactStrap = require('react-bootstrap');
var Button = reactStrap.Button;
var FormGroup = reactStrap.FormGroup;
var FormControl = reactStrap.FormControl;
var ControlLabel = reactStrap.ControlLabel;
var ReactDOM = require('react-dom');
var ReactRoute = require('react-router-dom');
var Redirect = ReactRoute.Redirect;
require('E:\\Angular5\\ReactJS - Redux\\Content\\Login.css');
const dispatch = require('../Dispatcher/Dispatch.jsx');
const loginAction = require('../Actions/LoginAction.jsx');
const Loading = require('../Common Components/Loading.jsx');



class Login extends React.Component {


    constructor(props) {
        
        super(props);
       
        this.state = { email: "", password: "" };
        this.action = new loginAction();
      
      //  this.state = { email: "", password: "", loading: false };
    }

    componentWillMount = () => {
    }

    componentWillUnmount = () => {
    }

    validateForm() {
        return (this.state.email.length > 0 && this.state.password.length > 0);
    }

    handleChange = event => {
        //if (event.target.id === 'email')
        //    this.state.email = event.target.value;
        //else
        //    this.state.password = event.target.value;
        this.setState(
            {
                [event.target.id]: event.target.value
            }
        );

    }

    handleSubmit = event => {

        event.preventDefault();
       
        this.action.userData(this.state.email, this.state.password);
        this.action.userLogin(this.props.dispatch,this.props.history);

       // LoginAction.UserLogin(this.state);
    }

    render() {
        const isLoading = this.props.isLoading;
        return (
            <div>
               
                <div className={!isLoading  ? 'Login' : 'hidden'} >
                    <form>

                        <FormGroup controlId="email" bsSize="small">
                            <div className="row">
                                <div className="col-md-4"> <ControlLabel>Email:</ControlLabel> </div>

                                <div className="col-md-8">  <FormControl type="email" autoFocus value={this.state.email} onChange={this.handleChange} />
                                </div>
                            </div>
                        </FormGroup>

                        <FormGroup controlId="password" bsSize="small">
                            <div className="row">
                                <div className="col-md-4">
                                    <ControlLabel>Password:</ControlLabel>
                                </div>
                                <div className="col-md-8">
                                    <FormControl type="password" autoFocus value={this.state.password} onChange={this.handleChange} />
                                </div>
                            </div>
                        </FormGroup>

                        <FormGroup controlId="submit" bsSize="small">
                            <div className="row">
                                <div className="col-md-12">
                                    <Button type="submit" disabled={!this.validateForm()} block bsSize="small" onClick={this.handleSubmit} >Login</Button>
                                </div>
                            </div>
                        </FormGroup>

                    </form>
                </div>
                <div className={isLoading ? 'show' : 'hidden'}>
                    {isLoading ? <Loading /> : <div />}
                </div>
            </div>
        );
    }
}

//const mapStateToProps = state => {
//   // return state;
//    return { loggedIn: state.loginReducer.loggedIn, userData: state.loginReducer.userData, isLoading: state.loadingReducer.isLoading };
//};

const LoginForm = dispatch.ConnectLoginComponentToStore(Login);

module.exports = LoginForm;
