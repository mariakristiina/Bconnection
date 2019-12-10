import React from "react";
import { Link } from "react-router-dom";
import ("./styling/Home.css");
// import { PromiseProvider } from "mongoose";

const Home = props => {



  //console.log(props.user.siteLanguage);
  if (props.currentLanguage === "English") {
    return (
      <div className="homeContainer">
      <img className="coverImage" src="/Cover.jpeg" alt="" />
      <div className="textContainer">
        <h1>Hello</h1>
          <p>
            We are a non-profit organisation that provides a platform and a
            space for locals in Berlin and recent refugees to help each other on
            non-profit basis, share skills and connect.
          </p>
        <Link  className="getInvolved" to="/signup"
        >Get involved</Link>
      </div>
    </div>      

    );
  } else if (props.currentLanguage === "German") {
    return (
      <div>
        <h1>Hallo</h1>
        <p>Auf Deutch</p>
        <Link to="/signup">Get involved</Link>
    </div> 
    );
  }
};

export default Home;
