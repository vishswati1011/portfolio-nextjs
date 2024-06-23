import React from "react";
import styles from "./price.module.css";
import { RxCross2 } from "react-icons/rx";
import { FcCheckmark } from "react-icons/fc";
import { priceData } from "../../../util/price";

export default function Price() {
  return (
    <div className={styles.price_div}>
      <div className={styles.first_div}>
        <h4>Price Plans</h4>
        <p>
          I am a service provider for web development, backend developer and
          full stack developer
        </p>
      </div>
      <div className={styles.second_div}>
        {priceData?.map((item, index) => (
          <div className={styles.grid_box} key={index}>
            <h1>{item.name}</h1>
            <h2>{item.price}</h2>
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
