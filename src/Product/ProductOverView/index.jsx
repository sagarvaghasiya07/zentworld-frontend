import React, { useState } from "react";
import styles from "./styles.module.css";
import Navbar from "../../Components/NavBar/NavBar";
import { Col, Row } from "reactstrap";
import posterone from "../../Assets/Images/slide2.webp";
import product from "../../Assets/Images/girl-9.png";

const ProductOverView = () => {
  const [isOpen, setIsOpen] = useState(0);

  return (
    <>
      <Navbar />
      <Row className="m-0 p-0 mt-5">
        <Col md={12} sm={12} lg={3} className={`${styles.fcol} px-5`}>
          <input
            type="text"
            placeholder="Search here"
            className={`${styles.searchfield} `}
            size="20"
          />
          <h6 className="mt-5">Category</h6>
          <p className={styles.categoryname}>ALL</p>
          <p className={styles.categoryname}>Women</p>
          <p className={styles.categoryname}>Men</p>
          <h6 className="mt-3">Product Category</h6>
          <p className={styles.categoryname}>All</p>
          <p className={styles.categoryname}>Shirt</p>
          <p className={styles.categoryname}>T-Shirt</p>
          <h6 className="mt-3">Colors</h6>
          <div className="d-flex align-items-baseline">
            <p className="cursor">ALL</p>
            <button
              className={styles.dottedbtn}
              style={{ backgroundColor: "pink" }}
            ></button>
            <button
              className={styles.dottedbtn}
              style={{ backgroundColor: "peach" }}
            ></button>
            <button
              className={styles.dottedbtn}
              style={{ backgroundColor: "black" }}
            ></button>
            <button
              className={styles.dottedbtn}
              style={{ backgroundColor: "skyblue" }}
            ></button>
            <button
              className={styles.dottedbtn}
              style={{ backgroundColor: "purple" }}
            ></button>
            <button
              className={styles.dottedbtn}
              style={{ backgroundColor: "blue" }}
            ></button>
            <button
              className={styles.dottedbtn}
              style={{ backgroundColor: "yellow" }}
            ></button>
            <button
              className={styles.dottedbtn}
              style={{ backgroundColor: "gray" }}
            ></button>
          </div>
          <h6 className="mt-2">
            Price
            <span id="demo">500</span>
          </h6>
          <div className="slidecontainer">
            <input
              type="range"
              id="myRange"
              // max={maxprice}
              // min={minprice}
              // value={price}
              className="cursor"
              // onInput={(e) => setSelectedPrice(e.target.value)}
            />
          </div>
          <button className={`mt-3 ${styles.clearbtn} mb-5`}>
            Clear Filters
          </button>
        </Col>
        {/* <div className="position-relative">
          <img src={posterone} alt="" />
          <p className={styles.postertext}>New Arrivals</p>
          <p className={`mt-5 ${styles.posterofftext}`}>Get Up To 20% off</p>
        </div> */}
        <Col md={12} sm={12} lg={9}>
          <Row className="m-0 p-0 justify-content-center">
            {[...Array(20)].map((abc) => {
              return (
                <Col
                  // xs={6}
                  sm={6}
                  md={3}
                  lg={3}
                  className="m-0 p-0 justify-content-center d-flex"
                >
                  <div className={styles.productbox}>
                    <img src={product} alt="" />
                    <p className={styles.productdisc}>
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 20 20"
                        fill="var(--grey1)"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m3.593 17.432 7.232-2.584c1.104-.392 1.424-1.808.592-2.64L7.793 8.584a1.602 1.602 0 0 0-2.64.592l-2.584 7.232a.801.801 0 0 0 1.024 1.024zM12.449 10l4.048-4.048a1 1 0 0 1 1.416 0L17.96 6a.604.604 0 0 0 .848 0 .604.604 0 0 0 0-.848l-.048-.048a2.207 2.207 0 0 0-3.112 0L11.6 9.152a.604.604 0 0 0 0 .848.604.604 0 0 0 .848 0zM8.449 5.904l-.048.048a.604.604 0 0 0 0 .848.604.604 0 0 0 .848 0l.048-.048a2.207 2.207 0 0 0 0-3.112l-.04-.04a.604.604 0 0 0-.856.848l.048.048a1.004 1.004 0 0 1 0 1.408zM14.05 9.905l-.849.848a.604.604 0 0 0 0 .848.604.604 0 0 0 .848 0l.848-.848a1 1 0 0 1 1.416 0l.864.864a.604.604 0 0 0 .848 0 .604.604 0 0 0 0-.848l-.864-.864a2.207 2.207 0 0 0-3.112 0zM12.45 5.104 10 7.552a.604.604 0 0 0 0 .848.604.604 0 0 0 .848 0l2.448-2.448a2.207 2.207 0 0 0 0-3.112l-.848-.848a.604.604 0 0 0-.848 0 .604.604 0 0 0 0 .848l.848.848a1.014 1.014 0 0 1 0 1.416z"
                          fill="var(--grey1)"
                        ></path>
                      </svg>
                      &nbsp; Extra 20% OFF
                    </p>
                    <p className={styles.productname}>
                      Jig Tik Women saaris dwsx ssss....
                    </p>
                    <div className="d-flex">
                      <p className={styles.productprice}>&#8377;2499</p>
                      <p className={styles.productdiscount}>&#8377;9999</p>
                      <p className={styles.productoff}>&#124; 75% OFF</p>
                    </div>
                    {/* <button className={styles.cartbox}>Add To Cart</button> */}
                  </div>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default ProductOverView;
