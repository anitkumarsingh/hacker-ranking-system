import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHackerById } from '../../redux/actions/hackers';

const HackerDetails = ({ match }) => {
  const dispatch = useDispatch();
  const { isLoading, error, hackerDetails } = useSelector(
    (state) => state.hacker
  );

  console.log('store details', hackerDetails);
  useEffect(() => {
    dispatch(fetchHackerById(match.params.id));
  }, [dispatch, match]);

  return <div>This is hacker details page...</div>;
};

export default HackerDetails;
