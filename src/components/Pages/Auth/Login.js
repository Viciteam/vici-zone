import './../../styles/login.css';
import React from 'react';

import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import AuthService from '../../../services/AuthService';


class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            active: this.props.active,
            email: '',
            password: '',
        }

        this.responseFacebook = this.responseFacebook.bind(this);
        this.responseGoogle = this.responseGoogle.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }


    async handleLogin() {
        const postData = {
            email: this.state.email,
            password: this.state.password
        }

        console.log(postData)
        const response = await AuthService.doUserLogin(postData)
        console.log('response-', response)
    }

    responseFacebook(response){
        console.log(response);
    }

    responseGoogle(response){
        console.log(response);
    }

    render () {

        const { email, password } = this.state

        return (
            <div className="dloginpage">
                <div className="dlogin-inner">
                    <div className="dlogin-float">
                        <h2>Login to Vici</h2>
                        <div className="dformpart">
                            <div className="dusername">
                                <input type="email" placeholder="Email" value={email} onChange={event => this.setState({email: event.target.value})}/>
                            </div>
                            <div className="dpass">
                                <input type="password"  placeholder="Password" value={password} onChange={event => this.setState({password: event.target.value})} />
                            </div>
                        </div>
                        <div className="orseparator">
                            <hr />
                            <div className="sepbase">OR</div>
                        </div>
                        <div className="sociallogins">
                            <div className="dgoogle">
                                <GoogleLogin
                                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                                    buttonText="Continue with Google"
                                    onSuccess={this.responseGoogle}
                                    onFailure={this.responseGoogle}
                                    className="dglnewbutton"
                                    cookiePolicy={'single_host_origin'}
                                />
                            </div>
                            <div className="dfb">
                                <FacebookLogin
                                    appId="1088597931155576"
                                    autoLoad={false}
                                    fields="name,email,picture"
                                    callback={this.responseFacebook}
                                    cssClass="dfbnewbutton"
                                    textButton="Continue with Facebook"
                                    icon="fa-facebook"
                                />
                            </div>
                        </div>
                        <div className="dloginnow">
                            <div className="dloginbutton">
                                <button onClick={this.handleLogin}>Log in</button>
                            </div>
                            <div className="forgotpass">
                                <a href="#">Forgot Password?</a>
                            </div>
                            <div className="dreg">
                                Don't have an account? <a href="#">Sign up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login