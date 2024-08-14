import React from 'react'
import styles from './service.module.css'
import { CgWebsite } from "react-icons/cg";
import { TbApi } from "react-icons/tb";
import { FaDisease } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { MdRealEstateAgent } from "react-icons/md";
export default function Service() {
return (
    <div className={styles.service_div}>
        <div className={styles.first_div}>
            <h1>My service</h1>
            <p>I am a service provider for web development, backend developer and full stack developer</p>
        </div>
        <div className={styles.second_div}>

            <div className={styles.grid_box}>
                <CgWebsite className={styles.icon}/>
                <h3>Web Development</h3>
                <p>Experienced full-stack developer offering comprehensive web development services, specializing in creating dynamic and responsive websites from front-end design to back-end implementation.</p>
            </div>

            <div className={styles.grid_box}>
                <FaDatabase className={styles.icon}/>
                <h3>Backend Development</h3>
                <p>Expert in API implementation for backend development using Node.js with various databases, ensuring efficient data management and seamless connectivity.</p>
            </div>

            <div className={styles.grid_box}>
                <FaDisease className={styles.icon}/>
                <h3>Static Website </h3>
                <p>Providing expert static website implementation, delivering fast, secure, and visually appealing websites tailored to your specific needs.</p>
            </div>
            <div className={styles.grid_box}>
                <MdRealEstateAgent className={styles.icon}/>
                <h3>State Management in (React Js / Next JS)</h3>
                <p>Expert in state management using Redux for React and Next.js applications, ensuring efficient data flow and seamless user interactions.</p>
            </div>
            <div className={styles.grid_box}>
                <TbApi className={styles.icon}/>
                <h3>API Integration</h3>
                <p>Skilled in API integration for React and Next.js projects, enabling smooth data exchange and robust application functionality.</p>
            </div>
            <div className={styles.grid_box}>
                <FaDribbble className={styles.icon}/>
                <h3>Dynamic Website</h3>
                <p>Specializing in dynamic website implementation, creating interactive and engaging websites with seamless functionality and personalized user experiences.</p>
            </div>
        </div>
    </div>
)
}
