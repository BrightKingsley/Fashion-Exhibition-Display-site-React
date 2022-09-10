import React from "react";
import styles from "./contentsWrapper.module.css";
import ItemsContainer from "../itemsContainer/ItemsContainer";

const ContentsWrapper = () => {
  return (
    <div className={styles.contentsWrapper}>
      <ItemsContainer />
    </div>
  );
};

export default ContentsWrapper;
