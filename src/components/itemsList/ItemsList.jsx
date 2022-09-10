import React from "react";
import { useState } from "react";
import styles from "./itemsList.module.css";
import ItemWrapper from "../items/ItemWrapper";
import ArrowBtn from "../arrowBtn/ArrowBtn";

const ItemsList = (props) => {
  const scrollRange = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const shirtData = props.dataPoints.male.shirts;
  const [currentItem, setCurrentItem] = useState(0);
  const [isActive, setIsActive] = useState(shirtData);
  const [scrollTo, setScrollTo] = useState(scrollRange[currentItem]);

  const showCurrentItem = (currentItem) => {
    setIsActive((prevIsActive) => {
      return prevIsActive.map((item) => {
        return item.id === currentItem
          ? { ...item, active: true }
          : { ...item, active: false };
      });
    });
  };

  const slideIntoViewLeft = () => {
    setScrollTo(scrollRange[currentItem]);

    setCurrentItem((prevCurrentItem) => {
      if (prevCurrentItem > 0) {
        console.log("prevcurr", prevCurrentItem);
        console.log("currentItem:", currentItem, Math.abs(currentItem));

        return (prevCurrentItem -= 1);
      } else {
        return (prevCurrentItem = isActive.length - 1);
      }
    });
  };
  const slideIntoViewRight = () => {
    setScrollTo(scrollRange[currentItem]);

    setCurrentItem((prevCurrentItem) => {
      if (prevCurrentItem < isActive.length - 1) {
        console.log("prevcurr", prevCurrentItem);
        console.log("currentItem:", currentItem, Math.abs(currentItem));

        return (prevCurrentItem += 1);
      } else {
        return (prevCurrentItem = 0);
      }
    });
  };

  return (
    <>
      <ArrowBtn
        direction="left"
        click={() => {
          showCurrentItem(currentItem);
          slideIntoViewLeft(currentItem);
        }}
      />{" "}
      <div className={styles.itemsListWrapper}>
        <div
          className={styles.itemsList}
          style={{
            transform: `translateX(-${Math.abs(scrollTo)}${Math.abs(
              scrollTo
            )}0px)`,
          }}
        >
          {isActive.map((shirt, i) => {
            return (
              <ItemWrapper
                key={shirt.id}
                img={shirt.img}
                current={currentItem}
                id={shirt.id}
                active={shirt.active}
                try={slideIntoViewLeft}
              />
            );
          })}
        </div>{" "}
      </div>{" "}
      <ArrowBtn
        direction="right"
        click={() => {
          showCurrentItem(currentItem);
          slideIntoViewRight(currentItem);
        }}
      />
    </>
  );
};

export default ItemsList;
