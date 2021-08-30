import React, { useState } from "react";
import { authService, firebaseInstance } from "../firebase";
import { Link } from "react-router-dom";
import './Auth.css';
import { TextField } from "@material-ui/core"
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa"

function Auth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(false);
    const [error, setError] = useState("");
    const [disable, setDisable] = useState(true);
  
    const onChange = (event) => {
        const {target: {name, value}} = event;
        if (name === "email") {
            setEmail(value)
        } else if (name==="password") {
            setPassword(value)
        }

        if (email && password) {
            setDisable(false);
        } else {
            setDisable(true);
        }

    }
    const onSubmit = async(event) => {
        event.preventDefault();
        try {
            let data;
            if(newAccount){
                data = await authService.createUserWithEmailAndPassword(email, password)
            } else {
                data = await authService.signInWithEmailAndPassword(email, password)
            }
            console.log(data)
        } catch (error) {
            setError(error.message)
        }
        
    }
    const toggleAccount = () => {
        setNewAccount(prev => !prev);
    }
    const onSocialClick = async (event) => {
        const {target:{name}} = event;
        let provider;
        if(name === "google") {
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        } else if (name === "facebook") {
            provider = new firebaseInstance.auth.FacebookAuthProvider();
        } 
        else if(name === "github") {
            provider = new firebaseInstance.auth.GithubAuthProvider();
        }
        await authService.signInWithPopup(provider);
    }

    return (
        <div className="auth__container">
            <div className="login__logo__container">
                        <Link to="/" className="nav__logo nav__logo__auth">QTrade</Link>
                        <span>Log into QTrade</span>
            </div>
            <div className="login__container">
                <form onSubmit={onSubmit} className="form__container">
                    <TextField InputLabelProps={{style: {fontSize: 12}}} className="form__input"label="Email Address" name="email" type="text" placeholder="Email" value={email} onChange={onChange} required/>
                    <TextField InputLabelProps={{style: {fontSize: 12}}} className="form__input"label="Password" name="password" type="password" placeholder="Password" value={password} onChange={onChange} required />
                    <input onChange={onChange} disabled={disable} className="submit__input" type="submit" value={newAccount ? "CREATE ACCOUNT" : "LOG IN"} />
                </form>
                
                <div className="divider">
                    <hr className="divider__show"/>
                    <span>OR</span>
                    <hr className="divider__show"/>
                </div>

                <div className="social__auth__container">
                    <button className="social__button" onClick={onSocialClick} name="google"><FcGoogle size={18} className="button__logo"/><span>Continue with Google</span></button>
                    <button className="social__button" onClick={onSocialClick} name="facebook"><FaFacebook style={{ color: "#3b5998" }} size={18} className="button__logo"/><span>Continue with Facebook</span></button>
                    <button className="social__button" onClick={onSocialClick} name="github"><FaGithub style={{ color: "#171515" }} size={18} className="button__logo"/><span>Continue with Github</span></button>
                </div>
            
                <div className="toggle__sign">
                    <p>Don't have an account?</p>
                    <p className="toggle__sign__p" onClick={toggleAccount}>{!newAccount ? "Sign Up" : "Sign In"}</p>
                </div>
            </div>

            <span className="security">
                Secure Login with reCAPTCHA subject to Google <a href="https://policies.google.com/terms?hl=en">Terms</a> & <a href="https://policies.google.com/privacy?hl=en">Privacy</a>
            </span>

            {error}
        </div>
    )
}

export default Auth;