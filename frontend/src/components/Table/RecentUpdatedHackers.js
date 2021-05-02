import React from 'react';
import { Table } from 'react-bootstrap';
import moment from 'moment';

const RecentUpdatedHackers = ({ data }) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>
                  {moment(user.updatedAt).format('MMMM Do YYYY, h:mm:ss a')}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default RecentUpdatedHackers;
