import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../../components/Forms/FormsContainer';
import {
  getWebsiteSetting,
  updateWebsiteSetting
} from '../../redux/actions/settings';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Common/Loader';
import Message from '../../components/Common/Message';
import { actionTypes } from '../../redux/actions';

const Settings = (history) => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [primary, setPrimary] = useState('');
  const [bgPrimary, setBgPrimary] = useState('');
  const [bgSecondary, setBgSecondary] = useState('');
  const [textPrimary, setTextPrimary] = useState('');
  const [textSecondary, setTextSecondary] = useState('');
  const [textAlternate, setTextAlternate] = useState('');
  let themeValue;

  const getSettings = useSelector((state) => state.settings.webSettings);
  const { loading } = useSelector((state) => state.settings);
  console.log('asa', loading, getSettings);
  if (loading === false) {
    const { settings } = getSettings;
    themeValue = settings[0].theme;
  }

  useEffect(() => {
    if (themeValue === undefined) {
      dispatch(getWebsiteSetting());
    }

    setName(themeValue?.name);
    setPrimary(themeValue?.primary);
    setBgPrimary(themeValue?.bgPrimary);
    setBgSecondary(themeValue?.bgSecondary);
    setTextPrimary(themeValue?.textPrimary);
    setTextSecondary(themeValue?.textSecondary);
    setTextAlternate(themeValue?.textAlternate);
  }, [dispatch, themeValue]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateWebsiteSetting({
        name,
        primary,
        bgPrimary,
        bgSecondary,
        textAlternate,
        textPrimary,
        textSecondary
      })
    );
  };

  return (
    <>
      <FormContainer>
        <>
          <h2>Edit Website Settings</h2>
          <br />

          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Theme Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter theme name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="primary">
              <Form.Label>Primary Color</Form.Label>
              <Form.Control
                type="primary"
                placeholder="Enter Primary Color"
                value={primary}
                onChange={(e) => setPrimary(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="bgPrimary">
              <Form.Label>Background Primary Color</Form.Label>
              <Form.Control
                type="bgPrimary"
                placeholder="Enter Your Background Primary Color"
                value={bgPrimary}
                onChange={(e) => setBgPrimary(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="bgSecondary">
              <Form.Label>Background Secondary Color</Form.Label>
              <Form.Control
                type="bgSecondary"
                placeholder="Enter Secondary Background Color"
                value={bgSecondary}
                disabled
                onChange={(e) => setBgSecondary(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="textAlternate">
              <Form.Label>Text Alternate Color</Form.Label>
              <Form.Control
                type="textAlternate"
                placeholder="Enter Text Alternate Color"
                value={textAlternate}
                onChange={(e) => setTextAlternate(e.target.value)}
                disabled
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="textPrimary">
              <Form.Label>Text Primary Color</Form.Label>
              <Form.Control
                type="textPrimary"
                placeholder="Enter Text Primary Color"
                value={textPrimary}
                onChange={(e) => setTextPrimary(e.target.value)}
                disabled
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="textSeconday">
              <Form.Label>Text Secondary Color</Form.Label>
              <Form.Control
                type="textSeconday"
                placeholder="Enter Secondary Text Color"
                value={textSecondary}
                onChange={(e) => setTextSecondary(e.target.value)}
                disabled
              ></Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary">
              Update Theme
            </Button>
          </Form>
        </>
      </FormContainer>
    </>
  );
};

export default Settings;
