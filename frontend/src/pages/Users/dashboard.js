import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHackersList } from '../../redux/actions/hackers';
import CplusPlusChart from '../../components/Charts/Bar/CompetitivePercentile';

const Dashboard = () => {
  const dispatch = useDispatch();
  let hackers = [];
  let hackersCPlusPlus = [];
  let deviceType = ['Laptop', 'Tablet', 'Phone'];
  let deviceTypeUsersCount = [];
  let laptopCount;

  const { isLoading, error, hackersList } = useSelector(
    (state) => state.hackers
  );

  console.log('store', hackersList);

  useEffect(() => {
    dispatch(fetchHackersList());
  }, [dispatch]);

  if (hackersList && hackersList.length > 0) {
    hackersCPlusPlus = hackersList
      .map((e) => e.competitivePercentitle['c++'])
      .sort(function (a, b) {
        return b - a;
      });

    hackers = hackersList.map((hack) => hack.name);
    laptopCount = hackersList.map((lp) => lp.deviceType === 'laptop');
  }
  console.log('asda', laptopCount);
  return (
    <div>
      <CplusPlusChart
        labelData={hackers}
        value={hackersCPlusPlus}
        heading="Percentile in C++"
      />
    </div>
  );
};

export default Dashboard;
