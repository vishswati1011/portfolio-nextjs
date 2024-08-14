import React from "react";
import styles from "./price.module.css";
import { RxCross2 } from "react-icons/rx";
import { FcCheckmark } from "react-icons/fc";
import { priceData } from "../../../util/price";

export default function Price() {
  return (
    <div className={styles.price_div}>
      <div className={styles.first_div}>
        <h1>Price Plans</h1>
        <p>
          I am a service provider for web development, backend developer and
          full stack development.
        </p>
      </div>
      <div className={styles.second_div}>
        {priceData?.map((item, index) => (
          <div className={styles.grid_box} key={index}>
            <h3>{item.name}</h3>
            <h6>{item.price}</h6>
            <p>{item.description}</p>
            <div className={styles.language_div}>
              {item.features.map((feature, index) => (
                <div className={styles.language_row} key={index}>
                  <span className={styles.check_icon}>
                    {feature.icon === "available" ? (
                      <FcCheckmark className={styles.check_icon} />
                    ) : (
                      <RxCross2 className={styles.cross_icon} />
                    )}
                  </span>
                  <span className={styles.text}>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
