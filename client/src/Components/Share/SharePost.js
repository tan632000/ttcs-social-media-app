import React,{useContext,useState} from 'react';
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
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const SharePost = () => {
    const { user } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [textValue, setTextValue] = useState();
    const [im, setIm] = useState();
    const [file, setFile] = useState(null);
    // 
    const handleFile = (e) => {
    let fileh = document.getElementById("file").files;

    if (fileh.length > 0) {
      let fileReader = new FileReader();
      fileReader.onload = (e) => {
        // document.getElementById("preview").setAttribute("src", e.target.result);
        setIm(e.target.result);
      };
      fileReader.readAsDataURL(fileh[0]);
    }
    setFile(e.target.files[0])
    };
    // 
    const submitHandler = async (e) => {
        let description = document.getElementById("desc").value
        e.preventDefault();
        const newPost = {
          userId: user._id,
          desc: description,
        };
        if (file) {
          const data = new FormData();
          const fileName = Date.now() + file.name;
          data.append("name", fileName);
          data.append("file", file);
          newPost.img = fileName;
          console.log(newPost);
          try {
            await axios.post("/upload", data);
          } catch (err) {}
        }
        try {
          await axios.post("/posts", newPost);
          window.location.reload();
        } catch (err) {}
      };
    return (
        <div className="main-form">
            <div className="main__avatar">
                <img src={user.profilePicture ? PF + user.profilePicture : "../lisa.jpg"} alt=""></img>
            </div>
            <div className="main-form-input">
                <div className="main-form__top">
                    <textarea
                        type="text"
                        placeholder="What's happening?"
                        value={textValue}
                        id="desc"
                        onChange={(e) => setTextValue(e.target.value)}
                    ></textarea>
                    {im && (
                        <div>
                        <img src={im}></img>
                        <Cancel className="im-cancel"></Cancel>
                        </div>
                    )}
                    </div>
                <form className="main-form__button" onSubmit={submitHandler}>
                    <div className="main-form__buttonL">
                        <div className="buttonL-file">
                        {/* chose img */}
                        <Image></Image>
                        <input
                            type="file"
                            id="file"
                            accept="image/jpeg,image/jpg,image/png,image/webp,image/gif,video/mp4,video/quicktime,video/webm"
                            onChange={(e) => handleFile(e)}
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
                        type='submit'
                        className={textValue ? "show" : "hide"}
                        >
                        Tweet
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SharePost;