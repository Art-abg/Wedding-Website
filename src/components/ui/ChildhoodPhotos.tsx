"use client";

import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import styles from "./ChildhoodPhotos.module.css";
import { useInView } from "react-intersection-observer";

interface ChildhoodPhotosProps {
  title: string;
  text: string;
}

const ChildhoodPhotos: React.FC<ChildhoodPhotosProps> = ({ title, text }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  const photoVariants = (isLeft: boolean) => ({
    hidden: {
      x: isLeft ? "-100vw" : "100vw",
      y: 50,
      opacity: 0,
      rotate: isLeft ? -15 : 15
    },
    visible: {
      x:
        typeof window !== "undefined" && window.innerWidth < 480
          ? isLeft
            ? "-37%"
            : "37%"
          : typeof window !== "undefined" && window.innerWidth < 768
          ? isLeft
            ? "-40%"
            : "40%"
          : isLeft
          ? "-50%"
          : "50%",
      y: isLeft ? 0 : 0,
      opacity: 1,
      rotate: isLeft ? -8 : 8,
      transition: { type: "spring", stiffness: 30, damping: 10, duration: 2 }
    }
  });

  return (
    <section className={styles.container} ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 className={styles.title}>{title}</motion.h2>
        <motion.p className={styles.text}>{text}</motion.p>
        <div className={styles.photosContainer}>
          <motion.div
            className={`${styles.polaroid} ${styles.left}`}
            variants={photoVariants(true)}
          >
            <div className={styles.imageContainer}>
              <Image
                src="/child-Artur.jpg"
                alt="Artur as a child"
                layout="fill"
                objectFit="cover"
                objectPosition="75% 20%"
              />
            </div>
          </motion.div>
          <motion.div
            className={`${styles.polaroid} ${styles.right}`}
            variants={photoVariants(false)}
          >
            <div className={styles.imageContainer}>
              <Image
                src="/child-Anna.JPG"
                alt="Anna as a child"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ChildhoodPhotos;
