import { Keyboard, KeyboardBackspace } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="main">
      <div className="profile">
        <div className="profile-top">
          <div className="profile__topL">
            <KeyboardBackspace className="pr-icon"></KeyboardBackspace>
          </div>
          <div>
            <span className="pr-uName">Me</span>
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
              <div>
                <Link to="">
                  <span>Edit profile</span>
                </Link>
              </div>
            </div>
            <div>
              <span className="pr-uName">Me</span>
              <span className="pr-count">1 Tweet</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
