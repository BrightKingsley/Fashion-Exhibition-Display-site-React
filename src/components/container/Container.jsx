import React from "react";
import Header from "../header/Header";
import Main from "../main/Main";

import styles from "./container.module.css";

const Container = (props) => {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
    </div>
  );
};

export default Container;
