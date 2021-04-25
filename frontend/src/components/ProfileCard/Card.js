import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProfileCard = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded card-shadow">
      <Link to={`product/${product._id}`}>
        <div className="text-center">
          <Image
            src={product.profileLink}
            roundedCircle
            alt="aas"
            width="80px"
            height="auto"
          />
        </div>
      </Link>
      <Card.Body>
        <Link to={`profile/${product._id}`}>
          <div className="text-center">
            <Card.Title as="div">
              <h6>
                <strong>{product.name}</strong>
              </h6>
            </Card.Title>
          </div>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
