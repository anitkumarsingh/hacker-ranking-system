import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTop3Hackers } from '../../redux/actions/hackers';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import { Col, Row } from 'react-bootstrap';

const TopHackers = () => {
  const dispatch = useDispatch();

  const { isLoading, error, top3Hackers } = useSelector(
    (state) => state.top3Hackers
  );

  console.log('store', top3Hackers);
  useEffect(() => {
    dispatch(fetchTop3Hackers());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        // <ProfileCard data={hackersList} />
        <Row>
          {top3Hackers &&
            top3Hackers.map((hacker) => (
              <Col sm={12} md={6} lg={4} xl={3} key={hacker._id}>
                <ProfileCard data={hacker} />
              </Col>
            ))}
        </Row>
      )}
    </>
  );
};

export default TopHackers;
