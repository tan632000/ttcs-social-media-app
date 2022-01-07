import React, {useRef, useState, useContext } from 'react';
import TwitterIcon from "@material-ui/icons/Twitter";
import { Cancel, Email, Facebook, Person } from '@material-ui/icons';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
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

    const email = useRef();
    const password = useRef();
    const { isFetching, dispatch } = useContext(AuthContext);
    const [logIn, setLogIn] = useState(false);
    const logOpacity = useRef();

    // 
    const handleSignIn = () => {
        logOpacity.current.style.backgroundColor= "grey";
        logOpacity.current.style.filter="brightness(0.5)";
        setLogIn(true)
    }
    const handleCancelLogIn = () => {
        logOpacity.current.style.backgroundColor= "unset";
        logOpacity.current.style.filter="brightness(1)";
        setLogIn(false);
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      let eml = document.getElementById("email").value;
      let pass = document.getElementById("password").value;
      loginCall(
        { email: eml, password: pass },
        dispatch
      );
    };
    return (
        <div className="logUp">
            <div className="log" ref={logOpacity}>
                <div className="log-main">
                    <div className="log-form">
                        <TwitterIcon className="log__svg" />
                        <span className="sp-h1">What's Happened?</span>
                        <div className="log-form-change">
                            <span className="sp-h2">Sign in to Twitter</span>
                            <div className="log-form__bt">
                                <div onClick={handleSignIn}><LogOption Icon={Person} text="Sign in with account" /></div>
                                <div><LogOption Icon={Email} text="Sign in with email" /></div>
                                <div><LogOption Icon={Facebook} text="Sign in with Facebook" /></div>
                            </div>
                            <span>Don't have an account? 
                                <Link to={"/"} ><strong >Sign up</strong></Link>
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
            
            { logIn &&
                <div className="log-up">
                    <div className="log-up-form">
                        <Cancel className="logUp__cancel" onClick={handleCancelLogIn} />
                        <div className="logup">
                          <form onSubmit={handleSubmit} >
                              <Grid container spacing={2}>
                                  <Grid item xs={12}>
                                      <TextField
                                          variant="outlined"
                                          required
                                          fullWidth
                                          id="email"
                                          label="Email"
                                          name="email"
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
                              </Grid>
{/* 
                              {isFetching ? (
                                <CircularProgress color="white" size="20px" />
                              ) : ( */}
                                <Button
                                  type="submit"
                                  fullWidth
                                  variant="contained"
                                  color="primary"
                                  className="a"
                              >
                                  Sign In
                              </Button>
                              {/* )} */}
                          </form>
                      </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Log;

