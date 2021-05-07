import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from '../pages/Home';
import HackerDetails from '../pages/HackerDetails';
import Login from '../pages/Users/Login';
import Registration from '../pages/Users/Registration';
import Top3Hackers from '../pages/TopHackers';
import UserProfile from '../pages/Users/Profile';
import AdminDashboard from '../pages/Users/dashboard';
import DeploymentDoc from '../pages/Documents/DeploymentDoc';
import Header from '../components/Blocks/Header';
import Footer from '../components/Blocks/Footer2';

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
          {/* <Route path="/user/profile" component={UserProfile} /> */}
          <Route path="/user/profile/edit/:id" component={UserProfile} />
          <Route path="/admin/dashboard" component={AdminDashboard} />
          <Route path="/doc" component={DeploymentDoc} />
        </Switch>
      </Container>
      <Footer />
    </>
  );
};

export default Main;
