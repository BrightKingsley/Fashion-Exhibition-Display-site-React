import React from "react";
import styles from "./itemWrapper.module.css";
import Item from "./Item";

const ItemWrapper = (props) => {
  return (
    <div
      // className={styles[props.current === props.id ? "active" : "itemWrapper"]}
      className={styles[props.active ? "active" : "itemWrapper"]}
    >
      <Item img={props.img} />
    </div>
  );
};

export default ItemWrapper;
