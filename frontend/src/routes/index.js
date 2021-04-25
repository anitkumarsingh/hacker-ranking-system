import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from '../pages/Home';
import HackerDetails from '../pages/HackerDetails';
import Login from '../pages/Users/Login';
import Registration from '../pages/Users/Registration';
import Top3Hackers from '../pages/TopHackers';
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
          <Route path="/login" component={Login} />
          <Route path="/register" component={Registration} />
          <Route path="/top-3-hackers" component={Top3Hackers} />
        </Switch>
      </Container>
      <Footer />
    </>
  );
};

export default Main;
