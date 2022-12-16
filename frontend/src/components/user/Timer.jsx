import React, { useState, useEffect } from "react";

import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  timer: {
    textAlign: "center",
  },

  time: {
    borderRadius: "20px",
    padding: "20px",
    backgroundColor: "#EBFBEE",
  },
  streak: {
    fontWeight: "900",
  },

  relapse: {
    display: "inline-block",
  },
}));

export function Timer() {
  const { classes } = useStyles();
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1000);
      }, 1000);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div className={classes.timer}>
      <div className={classes.streak}>STREAK</div>
      <div className={classes.time}>
        {/* Days */}
        <div className={classes.days}>
          {"0" + Math.floor(time / 86400000)} Days
        </div>
        <div>
          {/* Hrs */}
          <span>{("0" + Math.floor((time / 3600000) % 24)).slice(-2)}hrs</span>
          {/* minutes */}
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}mins</span>
          {/* seconds */}
        </div>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)} sec</span>{" "}
        <div id="buttons">
          {!timerOn && <button onClick={() => setTimerOn(true)}>Start</button>}
        </div>
      </div>

      <div className={classes.relapse}>
        <hr />
        <span>BEST {/*BEST*/} </span>
        <span> {<button onClick={() => setTime(0)}>Relapse</button>} </span>
        <span>ATTEMPTS {/*BEST*/} </span>

        <hr />
      </div>
    </div>
  );
}
