import styles from "./Layout.module.scss";

interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <a href="#intro">
            <img src="/dog.jpg" alt="Home" className={styles.homeIcon} />
          </a>
        </div>
        <div className={styles.nav}>
          <a
            className={styles.navContainerItem}
            id="0"
            href="#about_me"
            draggable={false}
          >
            about me
          </a>
          <a
            className={styles.navContainerItem}
            id="1"
            href="#projects"
            draggable={false}
          >
            projects
          </a>
          <a
            className={styles.navContainerItem}
            id="2"
            href="#experience"
            draggable={false}
          >
            experience
          </a>
        </div>
      </div>
      <div className={styles.container}>
        <span className={styles.divider}></span>
        {children}
      </div>
    </>
  );
};

export default Layout;