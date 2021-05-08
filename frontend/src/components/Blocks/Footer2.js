import React from 'react';
import {
  FaHackerrank,
  FaLinkedinIn,
  FaGithub,
  FaFreeCodeCamp
} from 'react-icons/fa';
import { SiHackerearth } from 'react-icons/si';

const Footer2 = () => {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col item social">
              <a href="https://www.freecodecamp.org/anitkumar">
                <FaFreeCodeCamp />
              </a>
              <a
                href="http://www.hackerearth.com/@anitkumar123"
                target="_blank"
                rel="noreferrer"
              >
                <SiHackerearth />
              </a>
              <a href="https://www.linkedin.com/in/anit-kumar">
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/anitkumarsingh"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>
          <p className="copyright">
            Copyright &copy; Mern-Hacker ranking system -by Anit Kumar
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer2;
