"use client";
import React, { useState } from "react";
import styles from "./myproject.module.css";
import Image from "next/image";
import ViewModal from "./viewModal";
export default function Myproject() {
  const [modalShow, setModalShow] = React.useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const handleImage = (url) => {
    setImageUrl(url);
    setModalShow(true);
  };

  return (
    <div className={styles.work_div}>
      <div className={styles.first_div}>
        <h1>My Personal Projects</h1>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h3>Aashi homes Next JS Website</h3>
          <div className={styles.imageContainer}>
            <Image
              src="/images/aashihome.png"
              alt="Avatar"
              className={styles.project_img}
              width={250}
              height={250}
            />
            <button
              className={styles.zoom_button}
              onClick={() => handleImage("/images/aashihome.png")}
            >
              Zoom
            </button>
          </div>
          <div className={styles.author_info}>
            <p>
              <a href="https://aashihome.in" target="_blank">
                aashihome.in
              </a>
            </p>
            <button className={styles.view_button}>
              {" "}
              <a
                href="https://github.com/vishswati1011/construct-nextjs-web"
                target="_blank"
              >
                View github
              </a>
            </button>
          </div>
        </div>

        <div className={styles.card}>
          <h3>Chat Application React, MERN Application</h3>
          <div className={styles.imageContainer}>
          <Image
            src="/images/chat1.png"
            alt="Avatar"
            className={styles.project_img}
            width={250}
            height={250}
          />
            <button
              className={styles.zoom_button}
              onClick={() => handleImage("/images/chat1.png")}
            >
              Zoom
            </button>
          </div>

          <div className={styles.author_info}>
            <p></p>
            <button className={styles.view_button}>
              {" "}
              <a
                href="https://github.com/vishswati1011/chatApp"
                target="_blank"
              >
                View github
              </a>
            </button>
          </div>
        </div>

        <div className={styles.card}>
          <h3>Todo App React Native App</h3>
          <div className={styles.imageContainer}>
          <Image
            src="/images/todo.png"
            alt="Avatar"
            className={styles.project_img}
            width={250}
            height={250}
          />
            <button
              className={styles.zoom_button}
              onClick={() => handleImage("/images/todo.png")}
            >
              Zoom
            </button>
          </div>

          <div className={styles.author_info}>
            <p></p>
            <button className={styles.view_button}>
              {" "}
              <a
                href="https://github.com/vishswati1011/react_native_todoapp"
                target="_blank"
              >
                View github
              </a>
            </button>
          </div>
        </div>

        <div className={styles.card}>
          <h3>Blog React Native App</h3>
          <div className={styles.imageContainer}>
          <Image
            src="/images/blogapp.png"
            alt="Avatar"
            className={styles.project_img}
            width={250}
            height={250}
          />
  <button
              className={styles.zoom_button}
              onClick={() => handleImage("/images/blogapp.png")}
            >
              Zoom
            </button>
          </div>
          <div className={styles.author_info}>
            <p></p>
            <button className={styles.view_button}>
              {" "}
              <a
                href="https://github.com/vishswati1011/react-native-blog-app"
                target="_blank"
              >
                View github
              </a>
            </button>
          </div>
        </div>

        <div className={styles.card}>
          <h3>Ecommerce App Next JS Web</h3>
          <div className={styles.imageContainer}>
          <Image
            src="/images/ecom.png"
            alt="Avatar"
            className={styles.project_img}
            width={250}
            height={250}
          />

<button
              className={styles.zoom_button}
              onClick={() => handleImage("/images/ecom.png")}
            >
              Zoom
            </button>
          </div>
          <div className={styles.author_info}>
            <p></p>
          </div>
          <div className={styles.author_info}>
            <p>
              <a href="https://ecom-web-nine.vercel.app/" target="_blank">
                Visit Website
              </a>
            </p>
            <button className={styles.view_button}>
              {" "}
              <a
                href="https://github.com/vishswati1011/ecom-nextjs-app"
                target="_blank"
              >
                View github
              </a>
            </button>
          </div>
        </div>

        <div className={styles.card}>
          <h3>Static Website</h3>
          <div className={styles.imageContainer}>
          <Image
            src="/images/static.png"
            alt="Avatar"
            className={styles.project_img}
            width={250}
            height={250}
          />
            <button
              className={styles.zoom_button}
              onClick={() => handleImage("/images/static.png")}
            >
              Zoom
            </button>
          </div>

          <div className={styles.author_info}>
            <p>
              <a href="https://static-web-woad.vercel.app/" target="_blank">
                Visit Website
              </a>
            </p>
            <button className={styles.view_button}>
              {" "}
              <a
                href="https://github.com/vishswati1011/static_website_nextjs"
                target="_blank"
              >
                View github
              </a>
            </button>
          </div>
        </div>
      </div>
      {modalShow && (
        <ViewModal
          imageUrl={imageUrl}
          modalShow={modalShow}
          setModalShow={setModalShow}
        />
      )}
    </div>
  );
}
