import { motion } from "framer-motion";
import styles from "./Intro.module.scss";
import commonStyles from "../../styles/Common.module.scss";

const sentence = {
  hidden: { opacity: 0, y: 8, filter: "blur(2px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: [0.2, 0.8, 0.2, 1] },
  },
};

const IntroSection = () => (
  <motion.section
    id="intro"
    className={`${commonStyles.section} ${styles.introSection}`}
    initial={{ opacity: 0, y: 10, scale: 0.995 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: 0.5 }}
  >
    <div className={styles.paragraphContainer}>
      <motion.p
        className={styles.paragraph}
        variants={sentence}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
      >
        My first time coding was as a freshman in college, and I&apos;ve since
        organized 4 hackathons and learned 7 programming languages! My interests
        lie in machine learning, distributed systems, and software engineering.
        I love building and I&apos;m always looking for opportunities to learn
        and grow, so please feel free to reach out! I&apos;d love to chat.
      </motion.p>
      <motion.p
        className={styles.paragraph}
        variants={sentence}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
      >
        <span className={styles.typewriter}>
          <b>ah5087 [at] princeton [dot] edu</b>
        </span>
      </motion.p>
    </div>
    <motion.div
      className={styles.photoContainer}
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
    >
      <img src="/IMG_7310.jpg" className={styles.photo} alt="Alice Hou" />
    </motion.div>
  </motion.section>
);

export default IntroSection;
