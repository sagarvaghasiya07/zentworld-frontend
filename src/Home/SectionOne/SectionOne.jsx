import React from "react";
import styles from "./styles.module.css";
// import fashion from "../../Assets/Images/download.mp4";
import fashions from "../../Assets/Images/download.mp4";

const SectionOne = () => {
  return (
    <>
      <div className={styles.mainsection}>
        <video style={{ width: "100%" }} autoPlay muted loop playsInline>
          <source src={fashions} type="video/mp4" />
        </video>
        <div className={styles.center}>
          <h6 className={styles.bgimage}>NEW IN THIS WEEK</h6>
          <h1 className={styles.bgimagetext}>Women's Clothing</h1>
          <h6 className={styles.bgimage}>The latest trends in fashion</h6>
          <button className={styles.shopbtn}>SHOP THIS COLLECTION</button>
        </div>
      </div>
    </>
  );
};

export default SectionOne;
