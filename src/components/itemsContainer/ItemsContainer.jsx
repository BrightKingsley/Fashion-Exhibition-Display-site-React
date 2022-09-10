// import React from "react";
import styles from "./itemsContainer.module.css";
import ItemsList from "../itemsList/ItemsList";
import DataPoints from "../dataPoints/DataPoints";
import SectionSelect from "./SectionSelect";

const ItemsContainer = (props) => {
  // const [currentItem, setCurrentItem] = useState(0);

  // const handleClick = (event) => {
  //   event.target.className.baseVal === "right"
  //     ? setCurrentItem((prevItemVal) => {
  //         return (prevItemVal -= 1);
  //       })
  //     : setCurrentItem((prevItemVal) => {
  //         return (prevItemVal += 1);
  //       });

  // const slider = function () {
  //   const slides = document.querySelectorAll(".section-3_content");
  //   const btnLeft = document.querySelector(".slide_btn-left");
  //   const btnRight = document.querySelector(".slide_btn-right");

  //   let curslide = 0;
  // const maxSlide = slides.length;

  //   const goToSlide = function (slide) {
  //     slides.forEach((s, i) => {
  //       s.style.transform = `translateX(${100 * -slide}%)`;
  //     });
  //   };

  //   goToSlide(curslide);

  //   const slideRight = function () {
  //     if (curslide === maxSlide - 1) {
  //       curslide = 0;
  //     } else {
  //       curslide++;
  //     }
  //     goToSlide(curslide);
  //   };

  //   const slideLeft = function () {
  //     if (curslide === 0) {
  //       curslide = maxSlide - 1;
  //     } else {
  //       curslide--;
  //       console.log(curslide);
  //     }
  //     goToSlide(curslide);
  //   };

  //   btnLeft.addEventListener("click", () => {
  //     slideLeft();
  //   });
  //   btnRight.addEventListener("click", () => {
  //     slideRight();
  //   });
  // };
  // slider();
  // };

  return (
    <div className={styles.itemsContainer}>
      <ItemsList dataPoints={DataPoints} />
      <SectionSelect />
    </div>
  );
};
export default ItemsContainer;
