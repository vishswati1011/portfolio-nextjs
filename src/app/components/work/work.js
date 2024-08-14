import React from "react";
import styles from "./work.module.css";
import { projects } from "../../../util/projects";
export default function Education() {
  return (
    <div className={styles.work_div}>
      <div className={styles.first_div}>
        <h1>Work History</h1>
        {/* <p>
                    My all work history on which i have worked and learn a lot.
                </p> */}
      </div>
      <div className={styles.second_div}>
        {projects &&
          projects.map((project, index) => (
            <div className={styles.projects} key={index}>
              <div className={styles.left_div}>
                <h5 className={styles.title}>{project.name}</h5>
                <span className={styles.date}>
                  <h6>{project?.skills}</h6>{" "}
                </span>
              </div>
              <div className={styles.right_div}>
                <h5 className={styles.title}>Key feature</h5>
                <ul className={styles.feature}>
                  {project.feature.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
