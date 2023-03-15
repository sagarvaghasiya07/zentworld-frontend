import React, { useState } from "react";
import styles from "./styles.module.css";
import { Col, Row } from "reactstrap";
import { BsPlus } from "react-icons/bs";
import { BiMinus, BiShoppingBag } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import Slider from "react-slick";
import Star from "../../Components/Star/Star";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import SectionFour from "../../Home/SectionFour";

const ProductDetail = () => {
  const [image, setImages] = useState(
    "https://cdn.shopify.com/s/files/1/0551/8001/products/mustard_leather_look_mini_backpack_1_2614fc22-6997-4a7a-9ef9-a5d9d1ea4377_1000x1200_crop_center.jpg?v=1611842073"
  );
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    // adaptiveHeight: true,
    // centerMode: true,
    // centerPadding: "100px",
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <NavBar />
      <div className="container text-center">
        <Row className="m-0 p-0">
          <Col sm={12} lg={6}>
            <img src={image} alt="product img" className={styles.preview} />
            <div className={styles.flexrow}></div>
            <Slider {...settings}>
              <img
                src="https://cdn.shopify.com/s/files/1/0551/8001/products/mustard_leather_look_mini_backpack_1_2614fc22-6997-4a7a-9ef9-a5d9d1ea4377_1000x1200_crop_center.jpg?v=1611842073"
                alt=""
                onClick={() =>
                  setImages(
                    "https://cdn.shopify.com/s/files/1/0551/8001/products/mustard_leather_look_mini_backpack_1_2614fc22-6997-4a7a-9ef9-a5d9d1ea4377_1000x1200_crop_center.jpg?v=1611842073"
                  )
                }
                className={
                  image ===
                  "https://cdn.shopify.com/s/files/1/0551/8001/products/mustard_leather_look_mini_backpack_1_2614fc22-6997-4a7a-9ef9-a5d9d1ea4377_1000x1200_crop_center.jpg?v=1611842073"
                    ? styles.previewimgborder
                    : styles.previewimg
                }
              />
              <img
                src="https://cdn.shopify.com/s/files/1/0551/8001/products/mustard_leather_look_mini_backpack_3_3f4568fb-b646-4eb9-908a-91d07ce659f6_1000x1200_crop_center.jpg?v=1651750140"
                alt=""
                onClick={() =>
                  setImages(
                    "https://cdn.shopify.com/s/files/1/0551/8001/products/mustard_leather_look_mini_backpack_3_3f4568fb-b646-4eb9-908a-91d07ce659f6_1000x1200_crop_center.jpg?v=1651750140"
                  )
                }
                className={
                  image ===
                  "https://cdn.shopify.com/s/files/1/0551/8001/products/mustard_leather_look_mini_backpack_3_3f4568fb-b646-4eb9-908a-91d07ce659f6_1000x1200_crop_center.jpg?v=1651750140"
                    ? styles.previewimgborder
                    : styles.previewimg
                }
              />
              <img
                src="https://cdn.shopify.com/s/files/1/0551/8001/products/mustard_leather_look_mini_backpack_5_cb3bb797-4b3f-471a-bf02-d01f1b83a94b_1000x1200_crop_center.jpg?v=1651750140"
                alt=""
                onClick={() =>
                  setImages(
                    "https://cdn.shopify.com/s/files/1/0551/8001/products/mustard_leather_look_mini_backpack_5_cb3bb797-4b3f-471a-bf02-d01f1b83a94b_1000x1200_crop_center.jpg?v=1651750140"
                  )
                }
                className={
                  image ===
                  "https://cdn.shopify.com/s/files/1/0551/8001/products/mustard_leather_look_mini_backpack_5_cb3bb797-4b3f-471a-bf02-d01f1b83a94b_1000x1200_crop_center.jpg?v=1651750140"
                    ? styles.previewimgborder
                    : styles.previewimg
                }
              />
              <img
                src="https://cdn.shopify.com/s/files/1/0551/8001/products/mustard_leather_look_mini_backpack_4_e0bfd1be-26d4-46a9-a357-c9e70b55501b_1000x1200_crop_center.jpg?v=1651750140"
                alt=""
                onClick={() =>
                  setImages(
                    "https://cdn.shopify.com/s/files/1/0551/8001/products/mustard_leather_look_mini_backpack_4_e0bfd1be-26d4-46a9-a357-c9e70b55501b_1000x1200_crop_center.jpg?v=1651750140"
                  )
                }
                className={
                  image ===
                  "https://cdn.shopify.com/s/files/1/0551/8001/products/mustard_leather_look_mini_backpack_4_e0bfd1be-26d4-46a9-a357-c9e70b55501b_1000x1200_crop_center.jpg?v=1651750140"
                    ? styles.previewimgborder
                    : styles.previewimg
                }
              />
              <img
                src="https://cdn.shopify.com/s/files/1/0551/8001/products/mustard_leather_look_mini_backpack_2_d5d63825-1401-4057-b521-0230873bd0c3_1000x1200_crop_center.jpg?v=1611842073"
                alt=""
                onClick={() =>
                  setImages(
                    "https://cdn.shopify.com/s/files/1/0551/8001/products/mustard_leather_look_mini_backpack_2_d5d63825-1401-4057-b521-0230873bd0c3_1000x1200_crop_center.jpg?v=1611842073"
                  )
                }
                className={
                  image ===
                  "https://cdn.shopify.com/s/files/1/0551/8001/products/mustard_leather_look_mini_backpack_2_d5d63825-1401-4057-b521-0230873bd0c3_1000x1200_crop_center.jpg?v=1611842073"
                    ? styles.previewimgborder
                    : styles.previewimg
                }
              />
              <img
                src="https://m.media-amazon.com/images/I/51LZ1Y9QKiL._UL1001_.jpg"
                alt=""
                onClick={() =>
                  setImages(
                    "https://m.media-amazon.com/images/I/51LZ1Y9QKiL._UL1001_.jpg"
                  )
                }
                className={
                  image ===
                  "https://m.media-amazon.com/images/I/51LZ1Y9QKiL._UL1001_.jpg"
                    ? styles.previewimgborder
                    : styles.previewimg
                }
              />
            </Slider>
          </Col>
          <Col>
            <div>
              <div className={styles.stockreview}>
                <button className={styles.stockbtn}>In Stock</button>
                {/* <Star stars={2.5} reviews={10} /> */}
              </div>
              <h1 className={`mt-5 ${styles.itemheading}`}>
                Mustard Leather Look Mini Backpack
              </h1>
              <h3 className="text-start">
                <span>&#8377;</span> 119.00
              </h3>
              <p className="text-start m-0 mt-4">Qty:</p>
              <div className={styles.productqty}>
                <button className={styles.qtybtn}>
                  <BiMinus size={24} />
                </button>
                <span>1</span>
                <button className={styles.qtybtn}>
                  <BsPlus size={25} />
                </button>
              </div>
              <button className={`mt-5 ${styles.cartbtn}`}>
                <BiShoppingBag />
                ADD TO CART
              </button>
              <h6 className="mt-3 text-start">
                <AiOutlineHeart size={25} /> ADD TO WISHLIST
              </h6>
              <hr />
              <div className="text-start">
                <p>
                  SKU: <span>--</span>
                  <h6>dcssd</h6>
                </p>
                <p>
                  Vendor :<span>Chanel</span>
                </p>
                <p>
                  Product type: <span>Accessories</span>
                </p>
                <p>
                  Tags:
                  <span>Bag</span>
                </p>
                <p>
                  Collections :
                  <span>Accessories , Handbag , New In , Shoes , Womens</span>
                </p>
              </div>
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      DESCRIPTION
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className={`accordion-body ${styles.accordianbody}`}>
                      <h6>Subtitle</h6>
                      <p>
                        Adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                      </p>
                      <ul>
                        <li>Dolor sit amet, consectetur adipiscing elit</li>
                        <li>Sed do eiusmod tempor</li>
                        <li>ncididunt ut labore et dolore magna aliqua</li>
                        <li>Enim ad minim veniam</li>
                      </ul>
                      <img
                        src="https://cdn.shopify.com/s/files/1/0534/4690/1941/files/Rectangle_570x300.png?v=1611831450"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      PRODUCT DETAILS
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className={`accordion-body ${styles.accordianbody}`}>
                      <table className="table table-striped">
                        <tbody>
                          <tr>
                            <th scope="row">Fit and style</th>
                            <td>Sweatshirts, Straight fit</td>
                          </tr>
                          <tr>
                            <th scope="row">Composition</th>
                            <td>70% cotton, 30% polyester</td>
                          </tr>
                          <tr>
                            <th scope="row">Clarity</th>
                            <td>Vs2</td>
                          </tr>
                          <tr>
                            <th scope="row">Diamond weight</th>
                            <td>1.50 ct</td>
                          </tr>
                          <tr>
                            <th scope="row">Total number</th>
                            <td>1</td>
                          </tr>
                          <tr>
                            <th scope="row">Care</th>
                            <td>Wash at 40°C delicate</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      DELIVERY INFO
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      <div className="text-start">
                        <h5>Delivery Info</h5>
                        <p className="clr-gray">
                          So you’ve done your shopping; just how long will it be
                          till you can rock that swanky new Axolotl-themed
                          laptop skin? The calculator below will give you the
                          average amount of days it takes to ship a product to
                          your door and the best time to contact our support
                          team.
                        </p>
                        <p>
                          Please note that every order at Redbubble is custom
                          printed just for you, and will take 1-3 business days
                          to print prior to shipping.
                        </p>
                        <p className="clr-gray">
                          So you’ve done your shopping; just how long will it be
                          till you can rock that swanky new Axolotl-themed
                          laptop skin? The calculator below will give you the
                          average amount of days it takes to ship a product to
                          your door and the best time to contact our support
                          team.
                        </p>
                      </div>
                    </div>
                    <div className="text-start">
                      <h4>
                        <span>1. </span>So when do you contact Redbubble?
                      </h4>
                      <p className="clr-gray">
                        The calculator above lets you know the best time to
                        message us. When that day rolls around. Even if your
                        order hasn’t arrived by the listed date, it’s probably
                        still on its way (and worth the wait).
                      </p>
                    </div>
                    <div className="text-start">
                      <h4>
                        <span>2. </span>How much is shipping?
                      </h4>
                      <p className="clr-gray">
                        The calculator above lets you know the best time to
                        message us. When that day rolls around. Even if your
                        order hasn’t arrived by the listed date, it’s probably
                        still on its way (and worth the wait).
                      </p>
                    </div>
                    <div className="text-start">
                      <h4>
                        <span>3. </span>Can I track my order?
                      </h4>
                      <p className="clr-gray">
                        The calculator above lets you know the best time to
                        message us. When that day rolls around. Even if your
                        order hasn’t arrived by the listed date, it’s probably
                        still on its way (and worth the wait).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <SectionFour />
      <Footer />
    </>
  );
};

export default ProductDetail;
