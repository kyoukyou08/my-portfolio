"use client";

import styles from "./index.module.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.link_list}>
        <ul>
          <li>
            <Link href="#">BACKGROUND</Link>
          </li>
          <li>
            <Link href="#">SKILLS</Link>
          </li>
          <li>
            <Link href="#">WORKS</Link>
          </li>
        </ul>
      </div>
      <div className={styles.profile_position}>
        <div className={styles.profile}>
          <Image
            alt=""
            src="/Wavy Buddies Avatar.svg"
            className={styles.avatar_image}
            width={380}
            height={360}
          />
          <div className={styles.profile_text}>
            <h2>タザワ キョウスケ</h2>
            <p>
              2003/8/18に大阪で生まれる。大学一回生のころに独学でプログラミングを始める。大学祭のHPや環境団体HPの作成など行いながら、UI・UXへの関心があり、フロントエンドに興味を持ち政策に取り組んでいる。
            </p>
          </div>
        </div>
        <div className={styles.sns}>
          <p>SNS</p>
          <span></span>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 30 }}
            whileTap={{
              scale: 0.8,
              rotate: -90,
              borderRadius: "100%",
            }}
          >
            <Image
              alt=""
              src="/Instagram_Glyph_Gradient 1.svg"
              className={styles.sns_image}
              width={380}
              height={360}
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.2, rotate: 30 }}
            whileTap={{
              scale: 0.8,
              rotate: -90,
              borderRadius: "100%",
            }}
          >
            <Image
              alt=""
              src="/github-mark-white 1.svg"
              className={styles.sns_image}
              width={380}
              height={360}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
