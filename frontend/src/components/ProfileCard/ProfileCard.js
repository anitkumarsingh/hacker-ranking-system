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
          <ul>
            <li>
              <a href="#">
                {' '}
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#">
                {' '}
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                {' '}
                <i className="fab fa-instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                {' '}
                <i className="fab fa-github" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
