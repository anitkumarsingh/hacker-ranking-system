import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from '../pages/Home';
import HackerDetails from '../pages/HackerDetails';
import Header from '../components/Blocks/Header';
import Footer from '../components/Blocks/Footer';

const Main = () => {
  return (
    <>
      <Header />
      <Container>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/profile/:id" component={HackerDetails} />
        </Switch>
      </Container>
      <Footer />
    </>
  );
};

export default Main;
