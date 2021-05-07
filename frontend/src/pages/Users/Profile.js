import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../../components/Forms/FormsContainer';
import { fetchHackerById, updateHacker } from '../../redux/actions/hackers';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Common/Loader';
import Message from '../../components/Common/Message';
import { actionTypes } from '../../redux/actions';

const Profile = ({ match, history }) => {
  const dispatch = useDispatch();
  const hackerId = match.params.id;

  const [name, setName] = useState('');
  const [education, setEducation] = useState('');
  const [location, setLocation] = useState('');
  const [profileLink, setProfileLink] = useState('');

  const { error, hackerDetails } = useSelector((state) => state.hacker);

  const {
    isLoading: isLoadingUpdate,
    error: errorUpdate,
    success: successUpdate
  } = useSelector((state) => state.hackerUpdate);

  useEffect(() => {
    if (hackerDetails === undefined || hackerDetails._id !== hackerId) {
      dispatch(fetchHackerById(hackerId));
    } else {
      console.log('inner');
      const {
        location: hackerLocation,
        education: hackerEducation,
        name: hackerName,
        profileLink: hackerProfileLink
      } = hackerDetails;
      console.log('useEffect-profile', hackerDetails);
      setName(hackerName);
      setLocation(hackerLocation);
      setEducation(hackerEducation);
      setProfileLink(hackerProfileLink);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, match]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateHacker({ _id: hackerId, name, education, location, profileLink })
    );

    if (successUpdate) {
      history.push('/');
      dispatch({ type: actionTypes.HACKER_UPDATE_RESET });
    }
  };

  return (
    <>
      <FormContainer>
        {isLoadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}

        {error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <>
            <h2>Edit Profile</h2>
            <br />

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
          </>
        )}
      </FormContainer>
    </>
  );
};

export default Profile;
