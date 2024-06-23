import React from "react";
import styles from "./education.module.css";
export default function Education() {
  return (
    <div className={styles.education_div}>
      <div className={styles.first_div}>
        <h1> My education</h1>
        {/* <p>I am a student of computer science and engineering</p> */}
      </div>
      <div className={styles.second_div}>
        <div className={styles.projects}>
          <div className={styles.left_div}>
            <h3>Master of computer application</h3>
              <h4> DAVV Indore M.P Bharat</h4> <h4>2018-2021</h4>
          </div>
          <div className={styles.left_div}>
            <h3>Bachelor of computer science</h3>
              <h4> DAVV Indore M.P Bharat</h4> <h4>2015-2018</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
