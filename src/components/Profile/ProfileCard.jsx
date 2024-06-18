import React from "react";
import "./profile.css";
import Profile from "../../assets/images/user-profile.jpg";

function ProfileCard({ name, age, bio }) {
  return (
    <div className="profile-container">
      <div className="top-user-profile">
        <div className="wrap-info">
          <div className="image-div">
            <img src={Profile} alt="user-profile" />
          </div>
          <h3>Full Name:{name}</h3>
          <p>Age{age}</p>
        </div>
      </div>

      <div className="user-bio">
        <p> {bio}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
