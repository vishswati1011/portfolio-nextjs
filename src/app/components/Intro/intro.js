import React from 'react'
import styles from './intro.module.css';
import Image from 'next/image';

export default function Intro() {
  return (
    <div className={styles.intro_div}>

        <div className={styles.left_div}>
                <h1>I&apos;m Swati Vishwakarma</h1>
                <h2>Full Stack Developer</h2>
                <p>I&apos;m a Full Stack Developer with three years&apos; experience. Skilled in React, Node.js, MongoDB, and MySQL, I specialize in responsive frontend design and scalable RESTful API development. My focus is on seamless user experiences and robust backend architectures, ensuring high-quality solutions for project success.
                </p>

                <button className={styles.resume_button}>Hire me</button>
        </div>
        <div className={styles.right_div}>
                <Image src="/images/profile.avif" alt="developer" width={400} height={400} />
        </div>
      
    </div>
  )
}
