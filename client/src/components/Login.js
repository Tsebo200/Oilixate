import React from "react";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const locate = useNavigate;
    locate("/Dashboard");

    return(
        <>
        <div className="main-container">
        <div className='sign-container'>
            <div className='left'>
                <div className='sign-logo'></div>
                <p className='oilixate'>Oilixate</p>
                <p className='login-text'>Log in</p>
                <p className='welcome-login-text'>Welcome back! Please enter your details.</p>
                <p className='email-text'>Email</p>
                <form><input className='email-input' type={'email'} placeholder={"Enter Your Email"} /*onChange={emailVal}*/></input></form>
                <p className='password-text'>Password</p>
                <form><input className='password-input' type={'password'} placeholder={"Enter Your Password"} /*onChange={passwordVal}*/></input></form>
                <form><input className='check-box' type={'checkbox'}></input><label className="remember-me-text">Remember for 30 days</label></form>
                <p className='forgot-password-text'>forgot password?</p>
                <a href="Dashboard"><div className='signIn-btn-container' /*onClick={locate}*/>
                    <p className='signIn-btn-text'>Sign in</p>
                </div></a>
                <div className='SignIn-Google-btn'><p className='Sign-Google-text'>Sign In with Google</p></div>

            </div>
            <div className='right'></div>
        </div>
        </div>   
        </>
    )
}
export default Login