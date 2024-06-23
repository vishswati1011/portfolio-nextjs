import React from "react";
import Image from "next/image";
import styles from "./profile.module.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
export default function Profile() {
  return (
    <div >
      <Image
        src="/images/profile.avif"
        alt="Avatar"
        className={styles.avatar}
        width={100}
        height={100}
      />
      {/* <div> */}
      <p className={styles.title}>Swati Vishwakarma</p>
      <p className={styles.subtitle}>Full Stack Developer</p>
      {/* </div> */}
      <div className={styles.connect}>
        <span>
          {" "}
          <FaGithub />{" "}
        </span>
        <span>
          {" "}
          <FaLinkedin />{" "}
        </span>
        <span>
          {" "}
          <FaGithub />{" "}
        </span>
        <span>
          {" "}
          <FaLinkedin />{" "}
        </span>
        <span>
          {" "}
          <FaGithub />{" "}
        </span>
        <span>
          {" "}
          <FaLinkedin />{" "}
        </span>
      </div>

      {/**  address section */}
      <div className={styles.address}>
        <span className={styles.add_row}>
          <p className={styles.address_left}>Residence:</p>
          <p className={styles.address_right}>IND</p>
        </span>

        <span className={styles.add_row}>
          <p className={styles.address_left}>Address:</p>
          <p className={styles.address_right}>Indore, Madhya Pradesh</p>
        </span>
        <span className={styles.add_row}>
          <p className={styles.address_left}>Freelance:</p>
          <p className={styles.address_right}>Available</p>
        </span>
        <span className={styles.add_row}>
          <p className={styles.address_left}>Email:</p>
          <p className={styles.address_right}>
            <a href="mailto:sati.v1011@gmail.com">sati.v1011@gmail.com</a>
          </p>
        </span>
      </div>
      {/** language section */}

      <h4 className={styles.language}>Language</h4>
      <div className={styles.language_div}>
        <span className={styles.language_row}>
          <p>English:</p>
          <p>95%</p>
        </span>
        <span className={styles.language_bar_nine}></span>

        <span className={styles.language_row}>
          <p>Hindi:</p>
          <p>100%</p>
        </span>
        <span className={styles.language_bar_full}></span>
      </div>

      {/** skills section */}
      <h4 className={styles.language}>Skills</h4>

      <h6 className={styles.language_section}>Language</h6>

      <div className={styles.language_div}>
        <span className={styles.language_row}>
          <p>HTML</p>
          <p>100%</p>
        </span>
        <span className={styles.language_bar_full}></span>

        <span className={styles.language_row}>
          <p>CSS</p>
          <p>100%</p>
        </span>
        <span className={styles.language_bar_full}></span>
      </div>

      <h6 className={styles.language_section}>Frameworks</h6>

      <div className={styles.language_div}>
        <span className={styles.language_row}>
          <p>React JS/Redux</p>
          <p>100%</p>
        </span>
        <span className={styles.language_bar_full}></span>

        <span className={styles.language_row}>
          <p>Next JS</p>
          <p>100%</p>
        </span>
        <span className={styles.language_bar_full}></span>

        <span className={styles.language_row}>
          <p>Node JS</p>
          <p>100%</p>
        </span>
        <span className={styles.language_bar_full}></span>

        <span className={styles.language_row}>
          <p>Express JS</p>
          <p>100%</p>
        </span>
        <span className={styles.language_bar_full}></span>
      </div>
      <h6 className={styles.language_section}>DataBase</h6>

      <div className={styles.language_div}>
        <span className={styles.language_row}>
          <p>MongoDB</p>
          <p>100%</p>
        </span>
        <span className={styles.language_bar_full}></span>

        <span className={styles.language_row}>
          <p>MySql</p>
          <p>100%</p>
        </span>
        <span className={styles.language_bar_full}></span>

        <span className={styles.language_row}>
          <p>PostgressSql</p>
          <p>100%</p>
        </span>
        <span className={styles.language_bar_full}></span>
      </div>
      <h6 className={styles.language_section}>Other Tools</h6>

      <div className={styles.language_div}>
        <span className={styles.language_row}>
          <p>Docker</p>
          <p>100%</p>
        </span>
        <span className={styles.language_bar_full}></span>

        <span className={styles.language_row}>
          <p>Kubernetes</p>
          <p>95%</p>
        </span>
        <span className={styles.language_bar_nine}></span>

        <span className={styles.language_row}>
          <p>GCP</p>
          <p>95%</p>
        </span>
        <span className={styles.language_bar_nine}></span>

        <span className={styles.language_row}>
          <p>Github</p>
          <p>100%</p>
        </span>
        <span className={styles.language_bar_full}></span>
      </div>

      <button className={styles.download_button}>Download CV <FiDownload/></button>
    </div>
  );
}
