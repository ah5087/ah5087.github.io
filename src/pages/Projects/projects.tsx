import { useMemo, useState } from "react";
import styles from "./Projects.module.scss";
import commonStyles from "../../styles/Common.module.scss";

type Category = "ML" | "full-stack";
type Project = {
  title: string;
  languages: string;
  description: React.ReactNode;
  image?: string;
  video?: string; // (kept for other items if you ever want)
  repo?: string;
  pdf?: string;
  demo?: string; // 🔗 live/demo link
  categories: Category[];
};

const projects: Project[] = [
  {
    title: "Personal Website",
    languages: "React, TypeScript",
    description: "Developed this website from scratch!",
    repo: "https://github.com/ah5087/personal-website",
    categories: ["full-stack"],
  },
  {
    title: "tl;dr",
    languages: "React (JavaScript), Flask (Python), Heroku, MongoDB",
    description: (
      <>
        A web application that aggregates and summarizes Princeton listserv
        emails into a scrollable, social-media-like feed. Students can filter
        listservs, search by keyword, and keep track of campus events more
        efficiently.
      </>
    ),
    demo: "https://tldr-app333-b235172be38c.herokuapp.com/", // 🔗 under title
    categories: ["full-stack"],
  },
  {
    title:
      "Predictive Modeling of Optogenetic Cell Migration with Hierarchical Reinforcement Learning",
    languages: "Python (JaxGCRL)",
    description:
      "Built a hierarchical unsupervised RL controller with JaxGCRL to generate illumination patterns that guide collective cell migration with OptoEGFR; >80% success post-training.",
    pdf: "/final_report.pdf",
    categories: ["ML"],
  },
  {
    title: "METRA",
    languages: "Python (tested in DMC and MuJoCo envs)",
    description: (
      <>
        Complete re-implementation (no code references) of{" "}
        <a
          href="https://seohong.me/projects/metra/"
          target="_blank"
          rel="noopener noreferrer"
        >
          METRA
        </a>
        , an unsupervised RL objective scaling to high-dimensional pixel envs.
        Final paper linked.
      </>
    ),
    repo: "https://github.com/eugenechoi2004/metra",
    pdf: "/cos435_metra.pdf",
    categories: ["ML"],
  },
  {
    title: "Slack Bot",
    languages: "Python",
    description:
      "Automated onboarding bot for Slack; manages channels via emoji reactions and posts interactive welcome messages.",
    // was an embedded iframe—now a simple demo link:
    demo: "https://www.youtube.com/watch?v=6ExcNBB_x_0",
    repo: "https://github.com/ah5087/slack-bot",
    categories: ["full-stack"],
  },
  {
    title: "Expense Tracker",
    languages: "Python (tkinter GUI)",
    description:
      "Budgeting app with category breakdowns and totals — lightweight desktop utility.",
    repo: "https://github.com/ah5087/expense-tracker",
    categories: ["full-stack"],
  },
];

const FILTERS = ["all", "ML", "full-stack"] as const;
type Filter = (typeof FILTERS)[number];

export default function Projects() {
  const [active, setActive] = useState<Filter>("all");
  const filtered = useMemo(
    () =>
      active === "all"
        ? projects
        : projects.filter((p) => p.categories.includes(active as Category)),
    [active]
  );

  return (
    <section
      id="projects"
      className={`${commonStyles.section} ${styles.projectsSection}`}
    >
      <div className={styles.inner}>
        <h2 className={styles.heading}>Projects</h2>

        <div
          className={styles.filters}
          role="tablist"
          aria-label="Project filters"
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={active === f}
              className={`${styles.filterBtn} ${
                active === f ? styles.filterBtnActive : ""
              }`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className={styles.projectList}>
          {filtered.map((project, i) => (
            <article key={i} className={styles.projectItem}>
              <div className={styles.projectDetails}>
                <h3 className={styles.projectTitle}>{project.title}</h3>

                <div className={styles.actionsRow}>
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.action}
                    >
                      <img
                        src="/github-icon.png"
                        alt=""
                        className={styles.icon}
                      />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.pdf && (
                    <a
                      href={project.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.action}
                    >
                      <img src="/download.svg" alt="" className={styles.icon} />
                      <span>PDF</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.textLink}
                    >
                      🔗 live
                    </a>
                  )}
                </div>

                <div className={styles.languages}>{project.languages}</div>
                <p className={styles.description}>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
