import React from "react";
import styles from "./styles.module.css";

const SectionFour = () => {
  return (
    <>
      <div className="mt-5">
        <hr />
        <div className={styles.box}>
          <h6 className={`mt-5 ${styles.font}`}>OUR NEWSLETTER</h6>
          <h1 className={`mt-4 ${styles.mailfont}`}>
            Enjoy 10% off your first order when you join our mailing list.
          </h1>
          <form className={`mb-5 ${styles.emailform}`}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              className={styles.field}
            />
            <button type="submit" className={styles.subscribebtn}>
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SectionFour;
