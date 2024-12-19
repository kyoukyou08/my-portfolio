import styles from "./index.module.css";
import Image from "next/image";

export default function Works() {
  return (
    <>
      <div className={styles.works}>
        <Image
          alt=""
          src="/WORKS.svg"
          className={styles.works_image}
          width={380}
          height={360}
        />
      </div>
    </>
  );
}
