import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>
          <a href="https://www.linkedin.com/in/soudabeh-noorollahi/">
            Soudabeh
          </a>{" "}
          | React Crypto App
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Soudabeh with 💓 </p>
      </footer>
    </>
  );
}

export default Layout;
