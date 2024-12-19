import styles from "./index.module.css";
import Image from "next/image";

export default function Skills() {
  return (
    <>
      <div className={styles.skills}>
        <Image
          alt=""
          src="/SKILLS.svg"
          className={styles.skills_image}
          width={380}
          height={360}
        />
      </div>
      <div className={styles.skills_wrapper}>
        <div className={styles.skill_child}>
          <h2>FRONTEND</h2>
          <p>HTML</p>
          <p>CSS</p>
          <p>Javascript</p>
          <p>Typescript</p>
          <p>react</p>
          <p>Next.js</p>
        </div>
        <div className={styles.skill_child}>
          <h2>BACKEND</h2>
          <p>Node.js</p>
          <p>Typescript</p>
        </div>
        <div className={styles.skill_child}>
          <h2>DESIGN TOOL</h2>
          <p>Figma</p>
          <p>Illustrater</p>
          <p>Lotti</p>
        </div>
      </div>
    </>
  );
}
