import styles from "./Experience.module.scss";

type Item = {
  title: string;
  company: string;
  date: string;
  description: string;
};

const professional: Item[] = [
  {
    title: "Software Engineering Intern",
    company: "Coinbase",
    date: "May 2025 – Aug 2025",
    description:
      "Built a test framework covering all Simple Trade fee scenarios, preventing incorrect charges. Shipped secure TEE-backed smart-wallet APIs that removed a confusing passkey step and increased trade completion by 54%. Investigated fee discrepancies by reconciling Finhub logs with backend logic and delivered reports for fast resolution.",
  },
  {
    title: "Software Engineering Intern",
    company: "Erie Insurance Group",
    date: "May 2024 – Aug 2024",
    description:
      "Implemented features and resolved defects in the iOS/Android app with React Native. Proposed and shipped an in-app review POC that was approved for release. Integrated and tested REST APIs with soapUI while working in Agile sprints.",
  },
  {
    title: "Software Developer Intern",
    company: "Johnson & Johnson",
    date: "May 2023 – Aug 2023",
    description:
      "Revamped UI/UX for the customer-facing platform used by 90 brands. Built features in React and tested in Contentful/Stackbit. Collaborated across analysts and engineers to define launch scope and sprint plans.",
  },
];

const extracurricular: Item[] = [
  {
    title: "Executive Director & Partnerships Lead",
    company: "HackPrinceton",
    date: "Sep 2022 – Apr 2024",
    description:
      "Raised and managed a $50k+ budget. Led logistics for 4 hackathons with 800+ applicants each, partnerships, and day-of operations.",
  },
  {
    title: "Director of Outreach",
    company: "FemaleFounded",
    date: "Mar 2023 – Sep 2023",
    description:
      "Founding team for Princeton’s first female entrepreneurship conference. Sourced 40+ speakers across founders, VCs, and industry leaders.",
  },
];

const Timeline = ({ items }: { items: Item[] }) => (
  <ol className={styles.timeline}>
    {items.map((exp, i) => (
      <li key={i} className={styles.item}>
        <div className={styles.node} />
        <div className={styles.content}>
          <div className={styles.row}>
            <h3 className={styles.title}>{exp.title}</h3>
            <span className={styles.date}>{exp.date}</span>
          </div>
          <div className={styles.meta}>
            <span className={styles.company}>{exp.company}</span>
          </div>
          <p className={styles.description}>{exp.description}</p>
        </div>
      </li>
    ))}
  </ol>
);

const Experience = () => (
  <section id="experience" className={styles.experienceSection}>
    <div className={styles.headerRow}>
      <h2 className={styles.sectionTitle}>Experience</h2>
      <p className={styles.connect}>
        <a
          href="https://www.linkedin.com/in/alice-hou-/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkedinLink}
        >
          <img src="/linkedin.webp" alt="" className={styles.linkedinIcon} />
          LinkedIn
        </a>
      </p>
    </div>

    <h3 className={styles.groupTitle}>professional</h3>
    <Timeline items={professional} />

    <h3 className={styles.groupTitle}>extracurricular</h3>
    <Timeline items={extracurricular} />
  </section>
);

export default Experience;
