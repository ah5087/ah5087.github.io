import styles from "./Experience.module.scss";

const experiences = [
  {
    title: "Executive Director & Partnerships Lead",
    company: "HackPrinceton",
    date: "Sep 2022 – Apr 2024",
    description:
      "Led outreach to raise and manage a $30k+ event budget. Oversaw logistics for 4 hackathons, each with 800+ applicants.",
  },
  {
    title: "Director of Outreach",
    company: "FemaleFounded",
    date: "Mar 2023 – Sep 2023",
    description:
      "Founding member of Princeton's first female entrepreneurship conference. Secured 30+ speakers across female-founded companies, VCs (Bain, Intel, Two Small Fish Ventures), and industry executives (JPMorgan, IBM, Halara).",
  },
  {
    title: "Software Developer Intern",
    company: "Johnson & Johnson",
    date: "May 2023 – Aug 2023",
    description:
      "Revamped UI/UX for the customer-facing site in use by 90 brands, working in Agile sprints, developing in React, and testing in Contentful and Stackbit. Spearheaded key feature implementations for the platform launch, collaborating with business analysts and engineers in establishing the release scope.",
  },
  {
    title: "Software Engineering Intern",
    company: "Erie Insurance Group",
    date: "May 2024 – Aug 2024",
    description:
      "Develop in React Native to resolve defects and implement new features for the Erie Insurance IOS/Android mobile app. Presented POC for a new in-app review feature, securing approval for release. Integrate and test REST APIs with soapUI, ensuring seamless data communication, working in Agile sprints.",
  },
];

const Experience = () => (
  <section id="experience" className={styles.experienceSection}>
    <h2>Experience</h2>
    <p className={styles.connect}>
      <a
        href="https://www.linkedin.com/in/alice-hou-/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.linkedinLink}
      >
        <img
          src="/linkedin.webp"
          alt="LinkedIn"
          className={styles.linkedinIcon}
        />
        LinkedIn
      </a>
    </p>
    {experiences.map((exp, index) => (
      <div key={index} className={styles.experienceItem}>
        <h3 className={styles.title}>{exp.title}</h3>
        <div className={styles.details}>
          <span className={styles.company}>{exp.company}</span>
          <span className={styles.date}> | {exp.date}</span>
        </div>
        <p className={styles.description}>{exp.description}</p>
      </div>
    ))}
  </section>
);

export default Experience;
