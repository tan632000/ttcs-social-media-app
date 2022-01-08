import {
  KeyboardBackspace,
  Event,
  SystemUpdateAltTwoTone,
} from "@material-ui/icons";
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import HomePost from "../../Components/Post/HomePost";
import { Cancel, Person } from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
const Profile = () => {
  const { user, dispatch } = useContext(AuthContext);
  const [username, setUsername] = useState();
  const [test, setTest] = useState(null);

  const handleEdit = async (e) => {
    let usernameUpdate = document.getElementById("usernameUpdate").value;
    e.preventDefault();

    const userUpdate = {
      username: usernameUpdate,
    };
    try {
      axios
        .put(`/users/${user._id}`, userUpdate)
        .then((res) => {
          dispatch({ type: "UPDATE_USER_SUCCESS", payload: res.data.data });
        })
        .catch((err) => {
          console.log(err);
          dispatch({ type: "UPDATE_USER_FAIL", payload: err });
        });
    } catch (err) {
      console.log(err);
    }
  };
  const handleCancelEdit = () => {};
  const handleOpenForm = () => {};
  return (
    <>
      <div className="main">
        <div className="profile">
          <div className="profile-top">
            <div className="profile__topL">
              <KeyboardBackspace className="pr-icon"></KeyboardBackspace>
            </div>
            <div>
              <span className="pr-uName">{user.username}</span>
              <span className="pr-count">1 Tweet</span>
            </div>
          </div>
          <div className="profile-main">
            <div className="profile-mainTop">
              <div className="profile-mainTop__div"></div>
              <div className="profile-mainTop__img"></div>
            </div>
            <div className="profile-mainBot">
              <div className="profile-mainBot__avatar">
                <img src="../lisa.jpg"></img>
                <div onClick={handleOpenForm}>
                  <span>Edit profile</span>
                </div>
              </div>
              <div>
                <span className="pr-uName">{user.username}</span>
              </div>
              <div>
                <span className="pr-count">@{user.username}12345</span>
              </div>
              <div className="profile-mainBot__event">
                <Event></Event>
                <span>{user.createdAt}</span>
              </div>
              <div className="profile-mainBot__follow">
                <span>
                  <Link to={""}>
                    {user.followings} <b>Following</b>
                  </Link>
                </span>
                <span>
                  <Link to={""}>
                    {user.followings} <b>Followers</b>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <HomePost></HomePost> */}
      </div>
      {
        <div className="log-up">
          <div className="log-up-form">
            <Cancel className="logUp__cancel" onClick={handleCancelEdit} />
            <div className="logup">
              <form onSubmit={handleEdit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      label="Name"
                      type="text"
                      name="username"
                      id="usernameUpdate"
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
    </>
  );
};

export default Profile;
