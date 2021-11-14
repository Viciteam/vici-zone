import React from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

function LoginModal ({ closeModal }) {

    return (
        <div className="bg-vici_black bg-opacity-50 absolute inset-0 flex justify-center items-center z-10">
            <div className="bg-white_color w-1/4 rounded-lg p-6">
                <div className="flex justify-end pb-3">
                    <div>
                        <div onClick={() => {closeModal();}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7266 16.5L16.7266 20.5L10.7266 14.4983L4.72656 20.5L0.726562 16.5L6.72656 10.5L0.726562 4.5L4.72656 0.5L10.7266 6.5L16.7266 0.5L20.7266 4.5L14.7249 10.5L20.7266 16.5Z" fill="#EB5757"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="px-20 pb-20 pt-15">
                    <div className="text-center font-bold text-2xl">
                        Please log in to continue
                    </div>
                    <div className="mt-6 w-full">
                        <input className="w-full px-5 py-2 rounded-full border border-bottom_gray" type="email" name="" id="" placeholder="Email"/>
                    </div>
                    <div className="mt-3 w-full">
                        <input className="w-full px-5 py-2 rounded-full border border-bottom_gray" type="password" name="" id="" placeholder="Password"/>
                    </div>
                    <div className="mt-6 relative">
                        <hr />
                        <div className="absolute top-0 px-3 -mt-2 bg-white_color left-28 text-xs">OR</div>
                    </div>
                    <div className="">
                        <div className="mt-6">
                            <GoogleLogin
                                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                                buttonText="Continue with Google"
                                /* onSuccess={this.responseGoogle}
                                onFailure={this.responseGoogle} */
                                cookiePolicy={'single_host_origin'}
                                className="google-style"
                            />
                        </div>
                        <div className="mt-3">
                            <FacebookLogin
                                appId="1088597931155576"
                                autoLoad={false}
                                fields="name,email,picture"
                                /* callback={this.responseFacebook} */
                                cssClass="google-style"
                                textButton="Continue with Facebook"
                                icon="fa-facebook"
                            />
                        </div>
                    </div>
                    <div className="mt-3">
                        <div className="bg-primary_color text-white_color py-3 cursor-pointer rounded-full">Log in</div>
                    </div>
                    <div className="my-5">
                        <div className="text-medium_gray cursor-pointer">Forgot password?</div>
                    </div>
                    <div>
                        <div className="text-medium_gray cursor-pointer">Dont have an account?
                            <span className="text-primary_color cursor-pointer pl-3 font-bold">Sign up</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginModal