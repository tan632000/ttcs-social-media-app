import {KeyboardBackspace,Event} from "@material-ui/icons";
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import HomePost from "../../Components/Post/HomePost";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import EditProfile from "../../Components/EditProfile/EditProfile";
import Popover from '@material-ui/core/Popover';

const Profile = ({username}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    // 
  console.log("name", username);
  const { user, dispatch } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [editReload, setEditReload]= useState(false);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const handleEdit = async (e) => {
    e.preventDefault();
    let fileCover = {};
    let fileProfile = {};
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

    fileProfile = profilePicture;
    fileCover = coverPicture;

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
      await axios
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
    setEditReload(true);
  };

  if(editReload){
    window.location.reload();
  }
  const handleCloseForm = () => {
    setShow(false);
  };

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = username 
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("posts/timeline/" + user._id);
      
      setPosts(res.data.sort((p1, p2) => {
        return new Date(p2.createdAt) - new Date(p1.createdAt);
      }));
    };
    fetchPosts();
  },[username, user._id]);

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
                <img src={user.profilePicture ? PF + user.profilePicture : "../lisa.jpg"} onClick={handleClick}></img>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'center',
                    }}
                    transformOrigin={{
                    vertical: 'center',
                    horizontal: 'center',
                    }}
                >
                    <img src={user.profilePicture ? PF + user.profilePicture : "../lisa.jpg"}></img>
                </Popover>
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
              <div className="pr-desc">
                <span >{user.desc}</span>
              </div>
              <div className="profile-mainBot__event">
                <Event></Event>
                <span>{user.createdAt.slice(0,10)}</span>
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
        { posts.map((p) => (
        <HomePost key={p._id} post={p}></HomePost>
      ))}
      </div>
      { show &&
        <EditProfile handleClose={handleCloseForm} handleEdit={handleEdit} />
      }
    </>
  );
};

export default Profile;
