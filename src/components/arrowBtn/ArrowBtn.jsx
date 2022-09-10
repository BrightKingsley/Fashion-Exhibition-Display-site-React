import React from "react";
import styles from "./arrowBtn.module.css";

const ArrowBtn = ({ direction, click }) => {
  return (
    <div className={styles.arrow} direction={direction} onClick={click}>
      {" "}
      <svg className={direction}>


        <use xlinkHref={`./svg/icons.svg#icon-arrow-${direction}`}></use>
      </svg>
    </div>
  );
};

export default ArrowBtn;
