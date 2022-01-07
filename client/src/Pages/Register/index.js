import React, {useRef, useState } from 'react';
import TwitterIcon from "@material-ui/icons/Twitter";
import { Cancel, Person } from '@material-ui/icons';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {Link} from "react-router-dom";

const LogOption = ({Icon, text}) => {
    return(
        <>
            <Icon />
            <span>{text}</span>
        </>
    )
}
const Log = () => {
    // 
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const navigate = useNavigate();
    // 
    const [logUp, setLogUp] = useState(false);
    const logOpacity = useRef();
    // 
    const handleSignUp = () => {
        logOpacity.current.style.backgroundColor= "grey";
        logOpacity.current.style.filter="brightness(0.5)";
        setLogUp(true)
    }
    const handleCancelLogUp = () => {
        logOpacity.current.style.backgroundColor= "unset";
        logOpacity.current.style.filter="brightness(1)";
        setLogUp(false);
    }
    // 
    const handleClick = async (e) => {
      e.preventDefault();
      let pass = document.getElementById("password")
      let passA = document.getElementById("passwordAgain")
      let eml = document.getElementById("email").value;
      let uname = document.getElementById("username").value
      if (passA.value !== pass.value) {
        passA.setCustomValidity("Passwords don't match!");
      } else {
        const user = {
          username: uname,
          email: eml,
          password: pass.value,
        };
        try {
          await axios.post("/auth/register", user);
          navigate("/login");
        } catch (err) {
          console.log(err);
        }
      }
    };
    return (
        <div className="logUp">
            <div className="log" ref={logOpacity}>
                <div className="log-main">
                    <div className="log-form">
                        <TwitterIcon className="log__svg" />
                        <span className="sp-h1">What's Happened?</span>
                        <div className="log-form-change">
                            <span className="sp-h2">Join Twitter Today</span>
                            <div className="log-form__bt">
                                <div onClick={handleSignUp}><LogOption Icon={Person} text="Sign up with account"  /></div>                           
                            </div>
                            <span>Already have an account? 
                                <Link to={"/login"}><strong >Sign in</strong></Link>
                            </span>
                        </div>
                    </div>
                    <div className="log-img">
                        <img src="../ImgLog.png"></img>
                        <TwitterIcon />
                    </div>
                    
                </div>
                <div className="log-footer"></div>
                
            </div>
            { logUp &&
                <div className="log-up">
                    <div className="log-up-form">
                        <Cancel className="logUp__cancel" onClick={handleCancelLogUp} />
                        <div className="logup">
                          <form  onSubmit={handleClick} >
                            <Grid container spacing={2}> 
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="username"
                                        label="User Name"
                                        name="username"
                                        ref={username}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="email"
                                        type="email"
                                        label="Email"
                                        name="Email"
                                        ref={email}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        ref={password}
                                        minLength="6"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="passwordConfirm"
                                        label="Password Confirm"
                                        type="password"
                                        id="passwordAgain"
                                        ref={passwordAgain}
                                    />
                                </Grid> 
                                
                              </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="a"
                            >
                                Sign Up
                            </Button>
                        </form>
                      </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Log;

