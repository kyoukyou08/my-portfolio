import Image from "next/image";
import styles from "./page.module.css";
import Skills from "./components/Skills";
import Story from "./components/Story";
import Works from "./components/Works";
import MotionWrapper from "./components/motionWrapper/motionWrapper";

export default function Home() {
  return (
    <>
      <MotionWrapper>
        <div className={styles.hero}>
          <div className={styles.illust_wrapper}>
            <Image
              alt=""
              src="/Lifesavers Bust.svg"
              className={styles.main_illust}
              width={200}
              height={500}
            />
          </div>
          <div className={styles.title_wrapper}>
            <Image
              alt=""
              src="/portfolio.svg"
              className={styles.main_title}
              width={380}
              height={360}
            />
            <div>
              <h3>KYOSUKE TAZAWA</h3>
              <h3>FRONTEND ENGENEER</h3>
            </div>
          </div>
        </div>
        <div className={styles.story}>
          <Story />
        </div>
        <div className={styles.skills}>
          <Skills />
        </div>
        <div className={styles.works}>
          <Works />
        </div>
      </MotionWrapper>
    </>
  );
}
