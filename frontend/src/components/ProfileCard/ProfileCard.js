import React from 'react';
import { Link } from 'react-router-dom';

const ProfileCard = ({ data }) => {
  const { name, profileLink, _id } = data;
  return (
    <div className="wrapper">
      <div className="profile-card active">
        <div className="profile-card-header">
          <Link to={`profile/${_id}`}>
            <img src={profileLink} alt={name} />
          </Link>
        </div>
        <div className="profile-card-body">
          <Link to={`profile/${_id}`}>
            <h4>{name}</h4>
          </Link>
        </div>
        <div className="profile-card-footer">
          {/* <FaFacebookSquare fill="white" width="3em" height="3em" />
          <FaTwitter fill="white" width="3em" height="3em" />
          <FaInstagramSquare fill="white" width="3em" height="3em" />
          <FaGithubSquare fill="white" width="3em" height="3em" /> */}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
