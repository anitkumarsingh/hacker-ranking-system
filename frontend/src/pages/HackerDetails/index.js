import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHackerById } from '../../redux/actions/hackers';
import {
  Row,
  Col,
  Image,
  Card,
  Button,
  Accordion,
  Badge
} from 'react-bootstrap';
import Loader from '../../components/Common/Loader';
import Message from '../../components/Common/Message';
import { ImLocation } from 'react-icons/im';
import { FaGraduationCap } from 'react-icons/fa';
import { GiRank3 } from 'react-icons/gi';
import { MdDevices } from 'react-icons/md';
import CompetitivePercentile from '../../components/Charts/Bar/CompetitivePercentile';

const HackerDetails = ({ match }) => {
  const dispatch = useDispatch();
  let languages = [];
  let languagesPercentitle = [];
  const { isLoading, error, hackerDetails } = useSelector(
    (state) => state.hacker
  );

  console.log('store details', hackerDetails);
  useEffect(() => {
    dispatch(fetchHackerById(match.params.id));
  }, [dispatch, match]);

  if (hackerDetails === undefined) return null;

  const {
    profileLink,
    name,
    location,
    challengeSolved,
    solutionsSubmitted,
    solutionsAccepted,
    overallRank,
    followers,
    following,
    competitivePercentitle,
    noOfVotes,
    deviceType,
    education
  } = hackerDetails;

  if (hackerDetails && competitivePercentitle) {
    const objectArray = Object.entries(competitivePercentitle);
    objectArray.forEach(([key, value]) => {
      languages.push(key);
      languagesPercentitle.push(value);
    });
  }

  console.log('aasadaad', languagesPercentitle, languages);
  return (
    <div className="py-5">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message />
      ) : (
        <Row>
          <Col md={2}>
            <Image src={profileLink} alt={name} thumbnail />
          </Col>
          <Col md={10}>
            <Row>
              <Col md={10}>
                <h2>
                  <strong>{name}</strong>
                </h2>
              </Col>
              <Col md={2} className="text-center">
                <Button variant="primary" disabled>
                  Edit Profile
                </Button>
              </Col>
            </Row>
            <ImLocation />
            Location: {location}
            <div>
              <FaGraduationCap /> Education: {education}
            </div>
            <div>
              <GiRank3 /> Over All Rank : {overallRank}
            </div>
            <div>
              <MdDevices /> Device Type: {deviceType}
            </div>
            <hr className="dashed" />
          </Col>
          <Col md={3}>
            <Card className="social-container">
              <Card.Header as="h6">Social Media Status </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={8}>Followers</Col>
                  <Col md={4}>{followers}</Col>
                  <hr className="dashed" />
                </Row>
                <Row>
                  <Col md={8}>Following</Col>
                  <Col md={4}>{following}</Col>
                </Row>
                <Row>
                  <Col md={12}>
                    <hr className="dashed" />
                    <p>Profile Link</p>
                  </Col>
                  <Col md={12}>
                    <hr className="dashed" />
                    <p>{profileLink}</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={9} className="social-container py-3">
            <Accordion defaultActiveKey="0">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  Competitive Coding
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <Row>
                      <Col md={6}>
                        <strong>Challenge Solved</strong> {challengeSolved}
                      </Col>
                      <Col md={6}>
                        <strong>Solutions Submitted</strong>{' '}
                        {solutionsSubmitted}
                      </Col>
                      <Col md={12}>
                        <hr className="dashed" />
                      </Col>
                      <Col md={6}>
                        <strong>Solutions Accepted</strong> {solutionsAccepted}
                      </Col>
                      <Col md={6}>
                        <strong>Overall Rank</strong> {overallRank}
                      </Col>
                    </Row>
                    <Col md={12}>
                      <hr className="dashed" />
                      <CompetitivePercentile
                        labelData={languages}
                        value={languagesPercentitle}
                      />
                    </Col>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  Competitive Percentitle
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <Row>
                      <Col md={6}>
                        <p>
                          Data Structures{' '}
                          <Badge variant="secondary">
                            {competitivePercentitle.dataStructures}
                          </Badge>
                        </p>
                      </Col>
                      <Col md={6}>
                        <p>
                          Algorithms{' '}
                          <Badge variant="secondary">
                            {competitivePercentitle.algorithms}
                          </Badge>
                        </p>
                      </Col>
                      <Col md={6}>
                        <p>
                          C++{' '}
                          <Badge variant="secondary">
                            {competitivePercentitle['c++']}
                          </Badge>
                        </p>
                      </Col>
                      <Col md={6}>
                        <p>
                          Java{' '}
                          <Badge variant="secondary">
                            {competitivePercentitle.java}
                          </Badge>
                        </p>
                      </Col>
                      <Col md={6}>
                        <p>
                          Python{' '}
                          <Badge variant="secondary">
                            {competitivePercentitle.python}
                          </Badge>
                        </p>
                      </Col>
                      <Col md={6}>
                        <p>
                          Html{' '}
                          <Badge variant="secondary">
                            {competitivePercentitle.html}
                          </Badge>
                        </p>
                      </Col>
                      <Col md={6}>
                        <p>
                          Javascript{' '}
                          <Badge variant="secondary">
                            {competitivePercentitle.javascript}
                          </Badge>
                        </p>
                      </Col>
                    </Row>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  Votes
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <Row>
                      <Col md={6}>No Of Votes</Col>
                      <Col md={6}>{noOfVotes}</Col>
                      <hr className="dashed" />
                    </Row>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default HackerDetails;
