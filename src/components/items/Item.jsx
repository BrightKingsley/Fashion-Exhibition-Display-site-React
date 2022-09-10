import React from "react";
import styles from "./item.module.css";

const Item = (props) => {
  return <img className={styles.item} src={props.img} alt="" />;
};

export default Item;
