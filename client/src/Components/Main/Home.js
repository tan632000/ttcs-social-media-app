import {
  Cancel,
  ChatBubble,
  Gif,
  HomeOutlined,
  Image,
  Search,
  SentimentSatisfied,
  Share,
  ThumbUp,
  VerifiedUserRounded,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import HomePost from "./HomePost";

const test = [];
const Home = () => {
  const [textValue, setTextValue] = useState();
  const [im, setIm] = useState();

  const handleFile = (e) => {
    let file = document.getElementById("file").files;

    if (file.length > 0) {
      let fileReader = new FileReader();
      fileReader.onload = (e) => {
        // document.getElementById("preview").setAttribute("src", e.target.result);
        setIm(e.target.result);
      };
      fileReader.readAsDataURL(file[0]);
    }
  };

  return (
    <div className="main">
      <div className="main-top">
        <span>Home</span>
        <span className="main-top-icon">
          <Search></Search>
          <span>icon</span>
        </span>
      </div>
      <div className="main-form">
        <div className="main__avatar">
          <img src="../lisa.jpg"></img>
        </div>
        <div className="main-form-input">
          <div className="main-form__top">
            <textarea
              type="text"
              placeholder="What's happening?"
              value={textValue}
              onChange={(e) => setTextValue(e.target.value)}
            ></textarea>
            {im && (
              <div>
                <img src={im}></img>
                <Cancel className="im-cancel"></Cancel>
              </div>
            )}
          </div>
          <div className="main-form__button">
            <div className="main-form__buttonL">
              <div className="buttonL-file">
                {/* chose img */}
                <Image></Image>
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/gif,video/mp4,video/quicktime,video/webm"
                  onChange={handleFile}
                  id="file"
                />
              </div>
              <div>
                <Gif></Gif>
              </div>
              <div>
                <SentimentSatisfied></SentimentSatisfied>
              </div>
            </div>
            <div className="main-form__buttonR">
              <Button
                variant="outlined"
                className={textValue ? "show" : "hide"}
              >
                Tweet
              </Button>
            </div>
          </div>
        </div>
      </div>
      <HomePost></HomePost>
      <HomePost></HomePost>
      <div className="main-bottom"></div>
    </div>
  );
};

export default Home;
