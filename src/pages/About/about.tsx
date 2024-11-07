import styles from "./About.module.scss";
import commonStyles from "../../styles/Common.module.scss";

const coursework = [
  {
    code: "cos217",
    title: "Introduction to Programming Systems",
    color: "#636363",
  },
  {
    code: "cos226",
    title: "Algorithms and Data Structures",
    color: "#636363",
  },
  {
    code: "cos240",
    title: "Reasoning About Computation",
    color: "#636363",
  },
  {
    code: "cos324",
    title: "Introduction to Machine Learning",
    color: "#636363",
  },
  {
    code: "cos418",
    title: "Distributed Systems",
    color: "#636363",
  },
  {
    code: "cos429",
    title: "Computer Vision",
    color: "#636363",
  },
  {
    code: "cos445",
    title: "Economics and Computing",
    color: "#636363",
  },
  {
    code: "cos435",
    title: "Introduction to Reinforcement Learning",
    color: "#636363",
  },
  {
    code: "cos470",
    title: "Principles of Blockchains",
    color: "#636363",
  },
];

const About = () => (
  <section
    id="about_me"
    className={`${commonStyles.section} ${styles.aboutSection}`}
  >
    <h2>About Me</h2>
    <p className={commonStyles.paragraph}>
      <b>Languages:</b> Python, Java, Go, C, JavaScript, TypeScript, HTML/CSS,
      ARMv8 Assembly
    </p>
    <p className={commonStyles.paragraph}>
      <b>Technologies:</b> React, React Native, Node, Flask
    </p>
    <p className={commonStyles.paragraph}>
      <b>Relevant Coursework:</b>
    </p>
    <div className={styles.coursework}>
      {coursework.map((course, index) => (
        <div key={index} className={styles.courseItem}>
          <span className={styles.courseCode} style={{ color: course.color }}>
            {course.code}
          </span>
          <span className={styles.courseTitle}>
            {course.title} <span className={styles.instructor}></span>
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default About;
