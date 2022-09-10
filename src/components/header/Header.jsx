import React from "react";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div>Logo Here</div>
      <nav className={styles.nav}>
        <ul>
          <li>Home</li>
          <li>Catalogue</li>
          <li>About</li>
        </ul>
      </nav>

      <div>Switch Here</div>
    </header>
  );
};

export default Header;
