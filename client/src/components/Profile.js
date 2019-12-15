import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import("./styling/Profile.css")

const Profile = props => {

  useEffect(() => {
    props.getDataProfile();
  }, []);


  const deleteProfile = () => {

    const id = props.user._id;

    axios
      .delete(`/profile/${id}`)
      .then(response => {
        // props.clearUser(null);
        props.history.push("/signup");
      })
      .catch(err => {
        console.log(err);
      });
  };

  if (props.currentLanguage === "English") {

    return (
<div>
<div className="profileInfoContainer">
<div>
      <div className="profileDetails">
      <div>
<img className="profilePic" src={props.profile.urlPath} alt="profile" />
</div>

      <h2>Hello {props.profile.username}</h2>
      <div className="profInfoContainer">
      <div className="detailContainer">
      <div className="profLabel2"> 
        My Age:</div>
       
        <div className="profText age">
        {""}
        {Math.floor(
          (new Date() - new Date(props.profile.age).getTime()) / 3.15576e10
        )} </div> 
        </div>
        <div className="detailContainer">
        <div className="profLabel2">My Gender:</div>
        {props.profile.gender === "female" ?
        <img className="genderPic" src="/female.png" alt=""/> 
        :
        props.profile.gender === "male" ?
        <img className="genderPic" src="/male.png" alt=""/>  :
        <img className="genderPic" src="/diverse.png" alt=""/>
        }
        </div>
        <div className="detailContainer">
      <div className="profLabel2">My Languages: </div> 
      <div className="profText">{props.profile.languages}</div>
      </div>
      <div className="detailContainer">
      <div className="profLabel2">About Me: </div>
      <div className="profText aboutText">"{props.profile.about}"</div>
      </div>
      </div>
      </div>
     
<div>
      <button className="button profButton" onClick={props.toggleEditProfile}>Edit Profile Information</button>
      </div>
      </div>

          <div className="profFormContainer">
            {props.editProfileForm && (
              <>
                <form
                  onSubmit={props.handleSubmitProfile}
                  encType="multipart/form-data"
                >
                  <div className="profForm">
                    <label htmlFor="profPic" className="profLabel">Upload Profile Picture</label>
                    <input className="imageInput"
                      type="file"
                      name="urlPath"
                      id="urlPath"
                      onChange={props.imageUpload}
                    />
                  </div>
                  <div className="profForm">
                    <label htmlFor="username" className="profLabel">Username </label>
                    <input className="profFormInput"
                      type="text"
                      name="username"
                      id="username"
                      value={props.profile.username}
                      onChange={props.handleChangeProfile}
                    />
                  </div>

                  <div className="profForm">
                    <label htmlFor="age" className="profLabel">birthday </label>
                    <input className="profFormInput"
                      type="date"
                      name="age"
                      id="age"
                      value={props.profile.age}
                      onChange={props.handleChangeProfile}
                    />
                  </div>

                  <div className="profForm">
                    <label htmlFor="gender" className="profLabel">Gender </label>
                    <select
                      onChange={props.handleChangeProfile}
                      name="gender"
                      id="gender"
                    >
                      <option value="">---</option>
                      <option value="diverse">♂︎♀︎</option>
                      <option value="female">♀︎</option>
                      <option value="male">♂︎</option>
                    </select>
                  </div>

                  <div className="profForm">
                    <label htmlFor="languages" className="profLabel">languages </label>
                    <input className="profFormInput"
                      type="text"
                      name="languages"
                      id="languages"
                      value={props.profile.languages}
                      onChange={props.handleChangeProfile}
                    />
                  </div>

                  <div className="profForm">
                    <label htmlFor="about" className="profLabel">about me </label>
                    <input className="profFormInput"
                      type="text"
                      name="about"
                      id="about"
                      value={props.profile.about}
                      onChange={props.handleChangeProfile}
                    />
                  </div>

                  <div>
                    <button className="button profButton" type="submit">Save Profile</button>
                  </div>
                </form>


                <button className="button profButton" onClick={deleteProfile}>
                  Delete Account
            </button>
              </>
            )}
          </div>
        </div>
      </div>)
  }
  // ----------------------------------------LANGUAGE CHANGE---------
  else if (props.currentLanguage === "German") {
    
    return (
      <div>
      <div className="profileInfoContainer">
      <div>
            <div className="profileDetails">
            <div>
      <img className="profilePic" src={props.profile.urlPath} alt="profile" />
      </div>
      
            <h2>Hallo {props.profile.username}</h2>
            <div className="profInfoContainer">
            <div className="detailContainer">
            <div className="profLabel2"> 
              mein alter:</div>
             
              <div className="profText age">
              {""}
              {Math.floor(
                (new Date() - new Date(props.profile.age).getTime()) / 3.15576e10
              )} </div> 
              </div>
              <div className="detailContainer">
              <div className="profLabel2">Mein Geschkecht:</div>
              {props.profile.gender === "female" ?
              <img className="genderPic" src="/female.png" alt=""/> 
              :
              props.profile.gender === "male" ?
              <img className="genderPic" src="/male.png" alt=""/>  :
              <img className="genderPic" src="/diverse.png" alt=""/>
              }
              </div>
              <div className="detailContainer">
            <div className="profLabel2">Meine sprachen: </div> 
            <div className="profText">{props.profile.languages}</div>
            </div>
            <div className="detailContainer">
            <div className="profLabel2">über mich: </div>
            <div className="profText aboutText">"{props.profile.about}"</div>
            </div>
            </div>
            </div>
           
      <div>
            <button className="button profButton" onClick={props.toggleEditProfile}>profilinformationen bearbeiten</button>
            </div>
            </div>
      
                <div className="profFormContainer">
                  {props.editProfileForm && (
                    <>
                      <form
                        onSubmit={props.handleSubmitProfile}
                        encType="multipart/form-data"
                      >
                        <div className="profForm">
                          <label htmlFor="profPic" className="profLabel">profilbild aktualisieren</label>
                          <input className="imageInput"
                            type="file"
                            name="urlPath"
                            id="urlPath"
                            onChange={props.imageUpload}
                          />
                        </div>
                        <div className="profForm">
                          <label htmlFor="username" className="profLabel">Username </label>
                          <input className="profFormInput"
                            type="text"
                            name="username"
                            id="username"
                            value={props.profile.username}
                            onChange={props.handleChangeProfile}
                          />
                        </div>
      
                        <div className="profForm">
                          <label htmlFor="age" className="profLabel">geburtstag </label>
                          <input className="profFormInput"
                            type="date"
                            name="age"
                            id="age"
                            value={props.profile.age}
                            onChange={props.handleChangeProfile}
                          />
                        </div>
      
                        <div className="profForm">
                          <label htmlFor="gender" className="profLabel">Geschkecht </label>
                          <select
                            onChange={props.handleChangeProfile}
                            name="gender"
                            id="gender"
                          >
                            <option value="">---</option>
                            <option value="diverse">♂︎♀︎</option>
                            <option value="female">♀︎</option>
                            <option value="male">♂︎</option>
                          </select>
                        </div>
      
                        <div className="profForm">
                          <label htmlFor="languages" className="profLabel">sprachen </label>
                          <input className="profFormInput"
                            type="text"
                            name="languages"
                            id="languages"
                            value={props.profile.languages}
                            onChange={props.handleChangeProfile}
                          />
                        </div>
      
                        <div className="profForm">
                          <label htmlFor="about" className="profLabel">über mich </label>
                          <input className="profFormInput"
                            type="text"
                            name="about"
                            id="about"
                            value={props.profile.about}
                            onChange={props.handleChangeProfile}
                          />
                        </div>
      
                        <div>
                          <button className="button profButton" type="submit">Spreichern</button>
                        </div>
                      </form>
      
      
                      <button className="button profButton" onClick={deleteProfile}>
                        konto löchen
                  </button>
                    </>
                  )}
                </div>
              </div>
            </div>)
        }
};

export default Profile;