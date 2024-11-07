import styles from "./Intro.module.scss";
import commonStyles from "../../styles/Common.module.scss";

const IntroSection = () => (
  <section
    id="intro"
    className={`${commonStyles.section} ${styles.introSection}`}
  >
    <div className={styles.paragraphContainer}>
      <h3 className={styles.introTitle}>
        <span className={styles.text}>hey there!</span>
      </h3>
      <p className={styles.paragraph}>
        I'm Alice, a junior studying Computer Science at Princeton. My first
        time coding was as a freshman in university, and I've since organized 4
        hackathons and learned 7 programming languages! My interests lie in
        machine learning, distributed systems, and full-stack development. I
        love building and I'm always looking for opportunities to learn and
        grow, so please feel free to reach out! I'd love to chat.
      </p>
      <p className={styles.paragraph}>
        <span className={styles.typewriter}>
          <b>ah5087 [at] princeton [dot] edu</b>
        </span>
      </p>
    </div>
    <div className={styles.photoContainer}>
      <img src="/charterpic.jpg" className={styles.photo} alt="Alice Hou" />
    </div>
  </section>
);

export default IntroSection;
