import React, { useState, useEffect } from "react";
import { Carousel } from "@mantine/carousel";
import {
  IconBarbell,
  IconChevronUp,
  IconChevronDown,
  IconBook,
  IconBath,
  IconBrain,
} from "@tabler/icons";
import { createStyles } from "@mantine/core";

const useStyle = createStyles((theme) => ({
  carousel: {},

  box: {
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F9FA",
    padding: "50px 25px 25px 30px",
    borderRadius: "10px",
    h2: {
      fontSize: "12px",
      marginTop: "-20px",
    },
    p: {
      paddingTop: "20px",
    },

    "&:hover": {
      backgroundColor: "#EBFBEE",
    },
  },

  habitIcon: {
    margin: "20px 20px 0px",
    height: "35px",
    width: "35px",
  },

  arrow: {
    display: "inline-flex",
    flexDirection: "row",
    marginTop: "10px ",
  },
}));

export function HabitBoxes() {
  const { classes } = useStyle();
  const initialCount = localStorage.getItem("count") || 0;
  const day = localStorage.getItem("day" || 0);
  const [count, setCount] = useState(initialCount);

  const CountUp = () => {
    setCount(parseInt(count) + 1);
    localStorage.setItem("count", count + 1);
  };
  const CountDown = () => {
    setCount(parseInt(count) - 1);
    localStorage.setItem("count", count - 1);
  };

  return (
    <>
      <Carousel
        height={200}
        slideSize="20%"
        slideGap="sm"
        align="start"
        slidesToScroll={1}
        className={classes.carousel}
      >
        <Carousel.Slide>
          <div className={classes.box}>
            <h2>WORKOUT</h2>
            <IconBarbell className={classes.habitIcon} />
            <p>
              {count} / {day}
            </p>
            <div className={classes.arrow}>
              <IconChevronUp onClick={CountUp} />
              <IconChevronDown onClick={CountDown} />
            </div>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className={classes.box}>
            <h2>READING</h2>
            <IconBook className={classes.habitIcon} />
            <p>1/7</p>
            <div className={classes.arrow}>
              <IconChevronUp />
              <IconChevronDown />
            </div>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className={classes.box}>
            <h2>MEDITATION</h2>
            <IconBrain className={classes.habitIcon} />
            <p>1/7</p>
            <div className={classes.arrow}>
              <IconChevronUp />
              <IconChevronDown />
            </div>
          </div>
        </Carousel.Slide>
        <Carousel.Slide>
          <div className={classes.box}>
            <h2>COLDSHOWER</h2>
            <IconBath className={classes.habitIcon} />
            <p>1/7</p>
            <div className={classes.arrow}>
              <IconChevronUp />
              <IconChevronDown />
            </div>
          </div>
        </Carousel.Slide>
      </Carousel>
    </>
  );
}
