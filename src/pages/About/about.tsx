import { motion } from "framer-motion";
import styles from "./About.module.scss";
import commonStyles from "../../styles/Common.module.scss";

const coursework = [
  {
    code: "cos217",
    title: "Introduction to Programming Systems",
    color: "#636363",
  },
  { code: "cos226", title: "Algorithms and Data Structures", color: "#636363" },
  { code: "cos240", title: "Reasoning About Computation", color: "#636363" },
  {
    code: "cos324",
    title: "Introduction to Machine Learning",
    color: "#636363",
  },
  { code: "cos418", title: "Distributed Systems", color: "#636363" },
  { code: "cos429", title: "Computer Vision", color: "#636363" },
  { code: "cos445", title: "Economics and Computing", color: "#636363" },
  {
    code: "cos435",
    title: "Introduction to Reinforcement Learning",
    color: "#636363",
  },
  { code: "cos470", title: "Principles of Blockchains", color: "#636363" },
  {
    code: "cos343",
    title: "Algorithms for Computational Biology",
    color: "#636363",
  },
  {
    code: "cos333",
    title: "Advanced Programming Techniques",
    color: "#636363",
  },
  {
    code: "cos323",
    title: "Computing and Optimization for the Physical Sciences",
    color: "#636363",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.22 } },
};

const About = () => (
  <motion.section
    id="about_me"
    className={`${commonStyles.section} ${styles.aboutSection}`}
    initial={{ opacity: 0, y: 8, scale: 0.995 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
  >
    <h2>About Me</h2>

    <p className={styles.paragraph}>
      <b>languages:</b> Python, Java, Golang, C, JavaScript, TypeScript,
      HTML/CSS, ARMv8 Assembly
    </p>
    <p className={styles.paragraph}>
      <b>technologies:</b> React, React Native, Node, Flask, MongoDB, Heroku
    </p>

    <h3 className={styles.subheading}>Relevant Coursework</h3>
    <motion.ul
      className={styles.courseGrid}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      {coursework.map((c) => (
        <motion.li key={c.code} className={styles.coursePill} variants={item}>
          <span className={styles.courseBadge} style={{ color: c.color }}>
            {c.code}
          </span>
          <span className={styles.courseTitle}>{c.title}</span>
        </motion.li>
      ))}
    </motion.ul>
  </motion.section>
);

export default About;
