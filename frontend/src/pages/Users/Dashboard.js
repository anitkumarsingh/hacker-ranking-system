import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHackersList } from '../../redux/actions/hackers';
import CplusPlusChart from '../../components/Charts/Bar/CompetitivePercentile';
import DeviceTypeChart from '../../components/Charts/Doughnut/Doughnut';
import { Col, Row } from 'react-bootstrap';
import UserTypes from '../../components/Charts/Polar/Polar';
import HackerTable from '../../components/Table/RecentUpdatedHackers';
import Message from '../../components/Common/Message';

const Dashboard = ({ location, history }) => {
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({});

  // eslint-disable-next-line no-unused-vars
  const redirect = userInfo?.isAdmin === true ? '/admin/dashboard' : '/login';

  useEffect(() => {
    dispatch(fetchHackersList());
    const currentLoggedInUser =
      localStorage.getItem('userInfo') &&
      JSON.parse(localStorage.getItem('userInfo'));
    setUserInfo(currentLoggedInUser);
    if (userInfo && userInfo.isAdmin === false) {
      history.push('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const { hackersTypes } = useSelector((state) => state.hackers);

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

  return (
    <div>
      {userInfo && userInfo.isAdmin === true ? (
        <>
          <Row>
            <Col md={8}>
              <div className="mt-3">
                <h4>Percentile in C++ </h4>
                <CplusPlusChart
                  labelData={hackersName}
                  value={hackersCPlusPlus}
                  heading="Percentile in C++"
                />
              </div>
            </Col>
            <Col md={4}>
              <div className="mt-3">
                <h4>Device Type </h4>
                <DeviceTypeChart
                  labelData={deviceType}
                  value={deviceTypeUsersCount}
                  heading="Device Type"
                />
              </div>
            </Col>

            <Col md={12}>
              <div className="mt-3">
                <h4>User Type </h4>
                <UserTypes />
              </div>
            </Col>
            <Col md={12}>
              <div className="mt-3">
                <h4>Recent Updates</h4>
                <HackerTable data={recentlyUpdatedHackers} />
              </div>
            </Col>
          </Row>
        </>
      ) : (
        <div className="py-5">
          <Message>
            <h5>Not Authorized to access this ? Please login as Admin</h5>
          </Message>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
