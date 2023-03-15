import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import logo from "../../../src/Assets/Images/zentlogo.png";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { RiShoppingBagLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMobilescreen, setIsMobilescreen] = useState(false);
  const [isIcons, setIsIcons] = useState(false);

  const checksize = () => {
    console.log("opop");
    if (window.innerWidth <= 1200) {
      setIsMobilescreen(true);
    } else {
      setIsMobilescreen(false);
    }
  };

  // console.log("00", checksize, isMobilescreen);

  useEffect(() => {
    window.addEventListener("resize", checksize);
    return () => {
      window.removeEventListener("resize", checksize);
    };
  }, []);

  return (
    <>
      {isMobilescreen ? (
        <FaBars />
      ) : (
        <div className={styles.navsection}>
          <div>
            <button className={styles.navbtn}>Home</button>
            <button className={styles.navbtn}>
              <div className={styles.dropdown}>
                <button className={styles.dropbtn}>Shop</button>
                <div className={styles.dropdowncontent}>
                  <a href="#">Link 1</a>
                  <a href="#">Shop for your favourate persons</a>
                  <a href="#">Shop for your favourate persons</a>
                  <a href="#">Shop for your favourate persons</a>
                  <a href="#">Shop for your favourate persons</a>
                  <a href="#">Shop for your favourate persons</a>
                  <a href="#">Shop for your favourate persons</a>
                  <a href="#">Shop for your favourate persons</a>
                  <a href="#">Shop for your favourate persons</a>
                </div>
              </div>
            </button>
            <button className={styles.navbtn}>
              <div className={styles.dropdown}>
                <button className={styles.dropbtn}>Pages</button>
                <div className={styles.dropdowncontent}>
                  <Link to="/">Home</Link>
                  <Link to="/products">Products</Link>
                  <Link to="/product">Product Details</Link>
                  <Link to="/product">Cart</Link>
                </div>
              </div>
            </button>
            <button className={styles.navbtn}>
              <div className={styles.dropdown}>
                <button className={styles.dropbtn}>Blog</button>
                <div className={styles.dropdowncontent}>
                  <a href="#">Link 1</a>
                  <a href="#">Shop 1</a>
                  <a href="#">Shop 1</a>
                </div>
              </div>
            </button>
          </div>
          <div>
            <img src={logo} alt="" style={{ width: "125px" }} />
          </div>
          <div className={styles.navsearch}>
            <button className={styles.navbtn}>
              <BiSearchAlt2 size={25} />
            </button>
            <button className={styles.navbtn}>
              <AiOutlineHeart size={25} />
            </button>
            <button className={styles.navcart}>
              <RiShoppingBagLine size={25} />
              <button className={styles.cartcount}>1</button>
              <button className={styles.navbtn}>Login</button>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
