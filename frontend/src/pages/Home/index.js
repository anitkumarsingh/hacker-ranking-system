import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHackersList } from '../../redux/actions/hackers';
import ProfileCard from '../../components/ProfileCard/Card';

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, error, hackersList } = useSelector(
    (state) => state.hackers
  );

  console.log('store', hackersList);
  useEffect(() => {
    dispatch(fetchHackersList());
  }, [dispatch]);

  return (
    <div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <Row>
          {hackersList &&
            hackersList.map((hacker) => (
              <Col sm={12} md={6} lg={4} xl={3} key={hacker._id}>
                <ProfileCard product={hacker} />
              </Col>
            ))}
        </Row>
      )}
    </div>
  );
};

export default Home;
