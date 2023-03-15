import React from "react";
import { Col, Row } from "reactstrap";
import styles from "./styles.module.css";
import Star from "../../Components/Star/Star";
import boxone from "../../Assets/Images/girl-3.png";
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";

const SectionThree = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <Row>
          <h1 className={`mt-5 ${styles.heading}`}>Best sellers</h1>
          <h6 className="Montserrat mb-5 text-center clr-gray">
            Shop the essential dresses of the season online at Vendy.
          </h6>
          {[...Array(4)].map((xyz) => {
            return (
              <>
                <Col className="justify-content-center d-flex mt-5">
                  <div className={styles.boxsize}>
                    <div className="position-relative">
                      <button className={`${styles.perse}`}>-14%</button>
                      <button className={styles.new}>New</button>
                      <button className={`${styles.sale}`}>Sale</button>
                      <button className={`${styles.heart}`}>
                        <AiOutlineHeart size={25} />
                      </button>
                    </div>
                    <img
                      src={boxone}
                      alt=""
                      className={`cursor ${styles.cardimg}`}
                      onClick={() => navigate("/product")}
                    />
                    <div>
                      <Star stars={4.5} />
                      <h6 className="fw-bold text-center">
                        Musterd Leather Look Mini Backpack
                      </h6>
                      <h6 className="fw-bold text-danger text-center">
                        $119.00
                      </h6>
                    </div>
                  </div>
                </Col>
                {/* <Col className="text-center position-relative">
                  <button className={`${styles.perse}`}>- 14%</button>
                  <button className={styles.new}>New</button>
                  <button className={`${styles.sale}`}>Sale</button>
                  <button className={`${styles.heart}`}>
                    <AiOutlineHeart />
                  </button>
                  <img
                    src={boxone}
                    alt=""
                    className={`cursor ${styles.cardimg}`}
                    onClick={() => navigate("/product")}
                  />
                  <div className="text-center">
                    <Star stars={4.5} />
                    <h6 className="fw-bold">
                      Musterd Leather Look Mini Backpack
                    </h6>
                    <h6 className="fw-bold text-danger">$119.00</h6>
                  </div>
                </Col> */}
              </>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default SectionThree;
