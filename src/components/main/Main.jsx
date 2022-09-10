import React from "react";
import styles from "./main.module.css";
import ContentsWrapper from "../contentsWrapper/ContentsWrapper";

const Main = () => {
  return (
    <div className={styles.main}>
      <ContentsWrapper />
    </div>
  );
};

export default Main;
