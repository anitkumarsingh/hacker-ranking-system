import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHackersList } from '../../redux/actions/hackers';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import Loader from '../../components/Common/Loader';
import Message from '../../components/Common/Message';

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, error, hackersList } = useSelector(
    (state) => state.hackers
  );

  useEffect(() => {
    dispatch(fetchHackersList());
  }, [dispatch]);

  return (
    <div className="py-5">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          <h2>{error}</h2>
        </Message>
      ) : (
        <Row>
          {hackersList &&
            hackersList.map((hacker) => (
              <Col sm={12} md={6} lg={4} xl={3} key={hacker._id}>
                <ProfileCard data={hacker} />
              </Col>
            ))}
        </Row>
      )}
    </div>
  );
};

export default Home;
