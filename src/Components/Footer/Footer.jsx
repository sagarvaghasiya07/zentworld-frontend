import React from "react";
import styles from "./styles.module.css";
import { Col, Row } from "reactstrap";
import { MdLocationPin } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { HiMail } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import zentworld from "../../Assets/Images/zentlogo.png";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <hr />
      <Row className={`m-0 p-0 mt-5 ${styles.footermain}`}>
        <Col sm={12} md={12} lg={6} className={styles.column}>
          <div className={`${styles.colone} `}>
            <img src={zentworld} alt="" className={styles.zentworld} />
          </div>
        </Col>
        <Col sm={12} md={12} lg={6}>
          <Row className="mt-3">
            <Col>
              <ul>
                <h6>COMPANY</h6>
                <li className="pointer" onClick={() => navigate("/about")}>
                  About Us
                </li>
                <li className="pointer">Contact Us</li>
              </ul>
            </Col>
            <Col>
              <ul>
                <h6>HELP</h6>
                <li
                  className="pointer"
                  onClick={() => navigate("/termsandcondition")}
                >
                  Delivery
                </li>
                <li
                  className="pointer"
                  onClick={() => navigate("/privacypolicy")}
                >
                  Refund Policy
                </li>
              </ul>
            </Col>
            <Row>
              <Col>
                <ul>
                  <h6>ADDRESS</h6>
                  <li>
                    <MdLocationPin /> No.6, Second Floor, Zent World Building ,
                    B/H Uttran Hospital, Uttran, Surat, Gujarat 395004
                  </li>
                  <li>
                    <FiPhoneCall />
                    &nbsp;<span>Call Us :</span> +91 9898333389
                  </li>
                  <li>
                    <HiMail />
                    &nbsp;<span>Email Us :</span> zentworld179@gmail.com
                  </li>
                </ul>
              </Col>
            </Row>
          </Row>
        </Col>
        <hr />
        <div className={styles.lsfooter}>
          &copy;2023
          <span className="text-gray">&nbsp; zentworld &nbsp;</span> All rights
          reserved
        </div>
      </Row>
    </>
  );
};
export default Footer;
