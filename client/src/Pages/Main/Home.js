import {
  Search
} from "@material-ui/icons";
import React, { useContext, useEffect, useState } from "react";
import HomePost from "../../Components/Post/HomePost";
import SharePost from "../../Components/Share/SharePost";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";


const Home = ({username}) => {
  const [posts, setPosts] = useState([]);
  const {user} = useContext(AuthContext);

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
  console.log(user);
  // console.log('aaaa',posts)
  return (
    <div className="main">
      <div className="main-top">
        <span>Home</span>
        <span className="main-top-icon">
          <Search></Search>
          <span>icon</span>
        </span>
      </div>
      {(!username || username === user.username) &&
        <SharePost />
      }
      
      { posts.map((p) => (
        <HomePost key={p._id} post={p}></HomePost>
      ))}
      <div className="main-bottom"></div>
    </div>
  );
};

export default Home;
