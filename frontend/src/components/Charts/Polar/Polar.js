import React, { useEffect } from 'react';
import { PolarArea } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../../../redux/actions/users';

const Polar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const { users } = useSelector((state) => state.users);
  if (!users) return null;
  const { activeUsers, registeredUsers } = users;
  console.log('active', registeredUsers, activeUsers);
  const data = {
    labels: ['Registered Users', 'Active Users'],
    datasets: [
      {
        label: '# of Votes',
        data: [registeredUsers, activeUsers],
        backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)'],
        borderWidth: 1
      }
    ]
  };

  return (
    <div style={{ width: '619px', height: 'auto', textAlign: 'center' }}>
      <PolarArea data={data} height={619} width={619} />
    </div>
  );
};

export default Polar;
