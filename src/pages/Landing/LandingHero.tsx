import { motion, useScroll, useTransform } from "framer-motion";
import { useLayoutEffect, useRef } from "react";
import styles from "./LandingHero.module.scss";

const LandingHero = () => {
  const ref = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -48]);
  const titleScale = useTransform(scrollYProgress, [0, 1], [1, 0.985]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const subY = useTransform(scrollYProgress, [0, 1], [0, -24]);
  const subOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  useLayoutEffect(() => {
    const setWidth = () => {
      const el = titleRef.current;
      if (!el) return;
      const span = el.querySelector("span");
      const w = (span || el).scrollWidth;
      el.style.setProperty("--px", `${w}px`);
    };
    setWidth();
    window.addEventListener("resize", setWidth);
    return () => window.removeEventListener("resize", setWidth);
  }, []);

  const toIntro = () =>
    document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section ref={ref} className={styles.hero}>
      <div className={styles.bg} aria-hidden />

      <motion.h1
        ref={titleRef}
        className={styles.title}
        style={{ y: titleY, scale: titleScale, opacity: titleOpacity }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <span className={styles.typewriter}>{"hi! i’m alice :) "}</span>
      </motion.h1>

      <motion.p
        className={styles.tagline}
        style={{ y: subY, opacity: subOpacity }}
        initial={{ opacity: 0, y: 2 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.06, duration: 0.4 }}
      >
        i’m a senior studying computer science @{" "}
        <span className={styles.princeton}>princeton</span> 🐯
      </motion.p>

      <button
        className={styles.scrollCue}
        onClick={toIntro}
        aria-label="Scroll to content"
      >
        <svg viewBox="0 0 24 24" className={styles.arrow} aria-hidden>
          <path
            d="M12 5v14m0 0l-6-6m6 6l6-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </section>
  );
};

export default LandingHero;
