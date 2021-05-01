import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHackersList } from '../../redux/actions/hackers';
import CplusPlusChart from '../../components/Charts/Bar/CompetitivePercentile';
import DeviceTypeChart from '../../components/Charts/Doughnut/Doughnut';
import { Col, Row } from 'react-bootstrap';
import UserTypes from '../../components/Charts/Polar/Polar';
import HackerTable from '../../components/Table/RecentUpdatedHackers';

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHackersList());
  }, [dispatch]);

  const { isLoading, error, hackersTypes } = useSelector(
    (state) => state.hackers
  );
  let hackersName = [];
  let hackersCPlusPlus = [];
  let deviceType = ['Laptop', 'Tablet', 'Phone'];
  let deviceTypeUsersCount = [];
  let recentlyUpdatedUsers = [];
  let recentlyUpdatedDates = [];

  if (!hackersTypes) return null;
  const {
    phoneUsers,
    laptopUsers,
    tabletUsers,
    recentlyUpdatedHackers,
    hackers
  } = hackersTypes;
  deviceTypeUsersCount = [laptopUsers, tabletUsers, phoneUsers];
  console.log('store hackers', recentlyUpdatedHackers);

  if (hackers && hackers.length > 0) {
    hackersCPlusPlus = hackers
      .map((e) => e.competitivePercentitle['c++'])
      .sort(function (a, b) {
        return b - a;
      });

    hackersName = hackers.map((hack) => hack.name);
  }
  if (recentlyUpdatedHackers && recentlyUpdatedHackers.length > 0) {
    recentlyUpdatedHackers.map((ele) => recentlyUpdatedUsers.push(ele.name));
    recentlyUpdatedHackers.map((d) => recentlyUpdatedDates.push(d.updatedAt));
  }
  console.log('recer', recentlyUpdatedDates, recentlyUpdatedUsers);
  return (
    <div>
      <Row>
        <Col md={8}>
          <h4>Percentile in C++ </h4>
          <CplusPlusChart
            labelData={hackersName}
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
          <h4>User Type </h4>
          <UserTypes />
        </Col>
        <Col md={12}>
          <h4>Recent Updates</h4>
          <HackerTable data={recentlyUpdatedHackers} />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
