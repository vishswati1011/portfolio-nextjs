import React from 'react'
import styles from './service.module.css'
import { CgWebsite } from "react-icons/cg";
export default function Service() {
return (
    <div className={styles.service_div}>
        <div className={styles.first_div}>
            <h4>My service</h4>
            <p>I am a service provider for web development, backend developer and full stack developer</p>
        </div>
        <div className={styles.second_div}>

            <div className={styles.grid_box}>
                <CgWebsite className={styles.icon}/>
                <h4>Web Development</h4>
                <p>Web development is the work involved in developing a Web site for the Internet or an intranet.</p>
            </div>

            <div className={styles.grid_box}>
                <CgWebsite className={styles.icon}/>
                <h4>Backend Development</h4>
                <p>Backend development include RESTful API implementation</p>
            </div>

            <div className={styles.grid_box}>
                <CgWebsite className={styles.icon}/>
                <h4>Static Website </h4>
                <p>Web development is the work involved in developing a Web site for the Internet or an intranet.</p>
            </div>
            <div className={styles.grid_box}>
                <CgWebsite className={styles.icon}/>
                <h4>State Management in (React Js / Next JS)</h4>
                <p>Web development is the work involved in developing a Web site for the Internet or an intranet.</p>
            </div>
            <div className={styles.grid_box}>
                <CgWebsite className={styles.icon}/>
                <h4>API Integration</h4>
                <p>Web development is the work involved in developing a Web site for the Internet or an intranet.</p>
            </div>
            <div className={styles.grid_box}>
                <CgWebsite className={styles.icon}/>
                <h4>Dynamic Website</h4>
                <p>Web development is the work involved in developing a Web site for the Internet or an intranet.</p>
            </div>
        </div>
    </div>
)
}
