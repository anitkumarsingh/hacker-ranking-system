import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../../components/Forms/FormsContainer';

const Profile = () => {
  const [name, setName] = useState('');
  const [education, setEducation] = useState('');
  const [location, setLocation] = useState('');
  const [profileLink, setProfileLink] = useState('');
  const [message, setMessage] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h3 style={{ textAlign: 'center', marginTop: '20px' }}>
        This page is under development
      </h3>
      <FormContainer>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="education">
            <Form.Label>Education Qualification</Form.Label>
            <Form.Control
              type="education"
              placeholder="Enter Your Qualification"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="location">
            <Form.Label>Your Current Location</Form.Label>
            <Form.Control
              type="location"
              placeholder="Enter Your Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="profileLink">
            <Form.Label>Profle Link URL</Form.Label>
            <Form.Control
              type="profileLink"
              placeholder="Enter profile link url"
              value={profileLink}
              onChange={(e) => setProfileLink(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type="submit" variant="primary">
            Update Profile
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default Profile;
