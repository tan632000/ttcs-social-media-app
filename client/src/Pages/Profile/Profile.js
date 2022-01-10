import {KeyboardBackspace,Event} from "@material-ui/icons";
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import HomePost from "../../Components/Post/HomePost";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import EditProfile from "../../Components/EditProfile/EditProfile";

const Profile = () => {
  const { user, dispatch } = useContext(AuthContext);
  const [fileCover, setFileCover] = useState(null);
  const [fileProfile, setFileProfile] = useState(null);
  const [show, setShow] = useState(false);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const handleEdit = async (e) => {
    e.preventDefault();
    let usernameUpdate = document.getElementById("usernameUpdate").value;
    let description = document.getElementById("desc").value;
    let city = document.getElementById("city").value;
    let profilePicture = document.getElementById("profilePicture").files[0];
    let coverPicture = document.getElementById("coverPicture").files[0];

    const userUpdate = {
      username: usernameUpdate,
      desc: description,
      city: city,

    };
    setFileCover(coverPicture);
    setFileProfile(profilePicture);

    if( fileProfile){
      const data = new FormData();
      const fileNameProfile = Date.now() + fileProfile.name;
      data.append("name", fileNameProfile);
      data.append("file", fileProfile);
      userUpdate.profilePicture = fileNameProfile;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }

    if( fileCover){
      const datas = new FormData();
      const fileNameCover = Date.now() + fileCover.name;
      datas.append("name", fileNameCover);
      datas.append("file", fileCover);
      userUpdate.coverPicture = fileNameCover;
      try {
        await axios.post("/upload", datas);
      } catch (err) {}
    }

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
  const handleCloseForm = () => {
    setShow(false);
  };
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
              {user.coverPicture ? (<img src={PF + user.coverPicture}></img>) : (<></>)}
            </div>
            <div className="profile-mainBot">
              <div className="profile-mainBot__avatar">
                <img src={user.profilePicture ? PF + user.profilePicture : "../lisa.jpg"}></img>
                <div onClick={() => setShow(true)}>
                  <span >Edit profile</span>
                </div>
              </div>
              <div>
                <span className="pr-uName">{user.username}</span>
              </div>
              <div>
                <span className="pr-count">@{user.username}</span>
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
      { show &&
        <EditProfile handleClose={handleCloseForm} handleEdit={handleEdit} />
      }
    </>
  );
};

export default Profile;
