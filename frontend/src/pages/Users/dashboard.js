import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHackersList } from '../../redux/actions/hackers';
import CplusPlusChart from '../../components/Charts/Bar/CompetitivePercentile';
import DeviceTypeChart from '../../components/Charts/Doughnut/Doughnut';
import { Col, Row } from 'react-bootstrap';
import UserTypes from '../../components/Charts/Polar/Polar';

const Dashboard = () => {
  const dispatch = useDispatch();
  let hackers = [];
  let hackersCPlusPlus = [];
  let deviceType = ['Laptop', 'Tablet', 'Phone'];
  let deviceTypeUsersCount = [];
  let laptopCount = 0;
  let tabletCount = 0;
  let phoneCount = 0;

  const { isLoading, error, hackersList } = useSelector(
    (state) => state.hackers
  );

  console.log(
    'store hackers',
    useSelector((state) => state)
  );

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
    for (var i = 0; i < hackersList.length; i++) {
      if (hackersList[i].deviceType === 'Laptop') laptopCount++;
      else if (hackersList[i].deviceType === 'Phone') phoneCount++;
      else if (hackersList[i].deviceType === 'Tablet') tabletCount++;
    }
    deviceTypeUsersCount = [laptopCount, phoneCount, tabletCount];
  }
  console.log('asda', laptopCount, phoneCount, tabletCount);
  return (
    <div>
      <Row>
        <Col md={8}>
          <h4>Percentile in C++ </h4>
          <CplusPlusChart
            labelData={hackers}
            value={hackersCPlusPlus}
            heading="Percentile in C++"
          />
        </Col>
        <Col md={4}>
          <h4>Device Type </h4>
          <DeviceTypeChart
            labelData={deviceType}
            value={deviceTypeUsersCount}
            heading="Device Type"
          />
        </Col>
        <Col md={12}>
          <br />
          <h4>Device Type </h4>
          <UserTypes />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
