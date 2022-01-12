import { Camera, Cancel } from '@material-ui/icons';
import React, { useContext, useState } from 'react';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { AuthContext } from "../../context/AuthContext";

const EditProfile = ({handleClose, handleEdit}) => {
    const {user, dispatch} = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    // change cover img
    const [coverImg, setCoverImg]= useState()
    const changeCoverImg = (e) => {
        let fileChange = document.getElementById("coverPicture").files;

        if(fileChange.length>0){
            let fileReader = new FileReader();
            fileReader.onload = (e) => {
                setCoverImg(e.target.result)
            };
            fileReader.readAsDataURL(fileChange[0]);
        }
    }
    // change profile img
    const [profileImg, setProfileImg]= useState();
    const changeProfileImg = (e) => {
        let fileChange = document.getElementById("profilePicture").files;

        if(fileChange.length>0){
            let fileReader = new FileReader();
            fileReader.onload = (e) => {
                setProfileImg(e.target.result)
            };
            fileReader.readAsDataURL(fileChange[0]);
        }
    }
    return (
        <div className='editProfile'>
            <div className="">
                <form onSubmit={handleEdit}>
                    <div className='editProfile-top'>
                        <Cancel onClick={handleClose} />
                        <b>EDIT PROFILE</b>
                        <button type="submit"> Save</button>
                    </div>
                    <div className="editProfile-main">
                        <div className="editProfile-mainTop">
                            {!coverImg
                                ? (user.coverPicture ? (<img src={PF + user.coverPicture}></img>) : (<></>))
                                :  (<img src={coverImg}></img>)  
                            }

                            <div className="editProfile-mainTop__img">
                                <Camera />
                                <input type="file" 
                                accept="image/jpeg,image/jpg,image/png,image/webp,image/gif" 
                                id="coverPicture"
                                onChange={(e) => changeCoverImg(e)}
                                ></input>
                            </div>
                        </div>
                        <div className="editProfile-mainBot">
                            <div className="editProfile-mainBot__avatar">
                                {profileImg 
                                    ? (<img src={profileImg}></img>)
                                    : (<img src={user.profilePicture ? PF + user.profilePicture : "../lisa.jpg"}></img>)
                                }
                                <div>
                                    <span>
                                        <Camera/>
                                        <input type="file" 
                                        accept="image/jpeg,image/jpg,image/png,image/webp,image/gif"
                                        id="profilePicture"
                                        onChange={(e) => changeProfileImg(e)}
                                        ></input>
                                    </span>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className='editProfile-bottom'>
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
                            <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                label="Desc"
                                type="text"
                                name="desc"
                                id="desc"
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                label="City"
                                type="text"
                                name="city"
                                id="city"
                            />
                            </Grid>
                        </Grid>
                    </div>
                </form>
                
            </div>
        </div>
    );
};

export default EditProfile;