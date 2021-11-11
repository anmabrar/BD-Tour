import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="bg sticky-bottom footer-container pt-3 mt-5">
        <Container className="text-light">
          <Row>
            <Col  className="text-start">
              <h6 className="text-decoration-underline fs-3 fw-bold text-warning">
              
                <span>
                  <i className="fas fa-book-reader "></i>
                </span>
                BD Tour
              </h6>
              <p>
                BD Tour is a trusted and reliable tour and travel agency among
                all the leading and updated tour-operating services in
                Bangladesh. We are here to bring the luxury to your traveling.
                BD Tour is a proud member of Association of Travel Agents of
                Bangladesh-ATAB and Tour Operators Association of Bangladesh.
                Safe traveling, your security, and your enjoyment are our focus
              </p>
            </Col>
            <Col>
              <h6 className="text-decoration-underline text-start">About BD Tour</h6>
              <ul className="text-start">
                <li>Contact Us</li>
                <li>Our Staff</li>
                <li>Our Partners</li>
                <li>Careers</li>
              </ul>
            </Col>
            <Col>
              <h6 className="text-decoration-underline text-start">Contact Info</h6>
              <ul className="text-start">
                <li>
                 
                  <a href="/"> anmabrar13@gmail.com</a>
                </li>
                <li>Call us: 01521332***</li>
                <li>Uttara, Dhaka, Bangladesh</li>
              </ul>
            </Col>
          </Row>
          <div>
            <p>© 2021 All Rights Reserved Antor</p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
