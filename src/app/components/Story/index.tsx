import styles from "./index.module.css";
import Image from "next/image";

export default function Story() {
  return (
    <>
      <div className={styles.bg_story}>
        <div className={styles.bg_wrapper}>
          <Image
            alt=""
            src="/BACKGROUND.svg"
            className={styles.bg_titleimage}
            width={380}
            height={360}
          />
          <div className={styles.bg_position}>
            <div className={styles.bg_image}>
              <Image
                alt=""
                src="/Cool Kids On Wheels.svg"
                className={styles.bg_image_me}
                width={380}
                height={360}
              />
              <Image
                alt=""
                src="/Ellipse 1.svg"
                className={styles.main_title}
                width={380}
                height={360}
              />
            </div>
            <div className={styles.bg_year}>
              <span></span>
              <p>
                大阪公立大学に通いながらフロントエンド中心にプログラミングの学習を始める
              </p>
              <span></span>
              <p>
                大阪公立大学に通いながらフロントエンド中心にプログラミングの学習を始める
              </p>
              <span></span>
              <p>
                大阪公立大学に通いながらフロントエンド中心にプログラミングの学習を始める
              </p>
              <span></span>
              <p>
                大阪公立大学に通いながらフロントエンド中心にプログラミングの学習を始める
              </p>
              <span></span>
              <p>
                大阪公立大学に通いながらフロントエンド中心にプログラミングの学習を始める
              </p>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
