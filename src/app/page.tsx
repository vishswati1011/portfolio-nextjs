import styles from "./page.module.css";
import Profile from "./components/profile/profile";
import IntroSection from "./components/Intro/intro";
import Service from "./components/service/service";
import Price from "./components/price/price";
import Education from "./components/education/education";
import Work from "./components/work/work";
export default function Home() {
  return (
    <div className={styles.main_div}>
      <div className={styles.left_div}>
        <Profile />
      </div>
      <div className={styles.right_div}>
        <IntroSection />
        <Service />
        <Price />
        <Education />
        <Work />
      </div>
    </div>
  );
}
