import './../../styles/login.css';
import React from 'react';

import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            active: this.props.active
        }

        this.responseFacebook = this.responseFacebook.bind(this);
        this.responseGoogle = this.responseGoogle.bind(this);
    }

    responseFacebook(response){
        console.log(response);
    }

    responseGoogle(response){
        console.log(response);
    }

    render () {
        return (
            <div className="dloginpage">
                <div className="dlogin-inner">
                    <div className="dlogin-float">
                        <h2>Login to Vici</h2>
                        <div className="dformpart">
                            <div className="dusername">
                                <input type="text" name="" id="" placeholder="Username"/>
                            </div>
                            <div className="dpass">
                                <input type="password" name="" id="" placeholder="Password"/>
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
                                <button>Log in</button>
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