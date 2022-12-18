import React, { useState, useEffect } from "react";

import { createStyles } from "@mantine/core";
import { IconBomb, IconPlayerPlay } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  timer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  streak: {
    fontSize: "15px",
    fontWeight: "700",
  },

  time: {
    display: "flex",
    width: "200px",
    backgroundColor: "#F8F9FA",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    padding: "5px",
    margin: "20px 0",
    p: {
      fontSize: "10px",
    },
    "&:hover": {
      backgroundColor: "#EBFBEE",
    },
  },

  days: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "10px",
  },

  sup: {
    fontSize: "15px",
  },

  relapse: {
    display: "flex",
    justifyContent: "space-evenly",
  },

  rItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: " 0.2px solid #e8e8e8",
    borderRadius: "5px",
    marginLeft: "5px",
    padding: "0px 10px",
    backgroundColor: "#F8F9FA",

    h4: {
      fontSize: "12px",
    },

    "&:hover": {
      backgroundColor: "#EBFBEE",
    },
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
      <h1 className={classes.streak}>STREAK</h1>
      <div className={classes.time}>
        {/* Days */}
        <div className={classes.days}>
          <h1> {"0" + Math.floor(time / 86400000)} </h1> <p> Days</p>
        </div>
        {/* Hour */}
        <div className={classes.days}>
          <h1>{("0" + Math.floor((time / 3600000) % 24)).slice(-2)}</h1>
          <p>Hours</p>
        </div>
        {/* Min */}
        <div className={classes.days}>
          <h1>
            {("0" + Math.floor((time / 60000) % 60)).slice(-2)}
            <sup className={classes.sup}>
              {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
            </sup>
          </h1>
          <p> Mins</p>
        </div>
      </div>

      <div className={classes.relapse}>
        <div className={classes.rItem}>
          <h4>BEST</h4> <p>00</p>
        </div>
        {!timerOn && (
          <div className={classes.rItem}>
            <IconPlayerPlay onClick={() => setTimerOn(true)} />
          </div>
        )}

        {timerOn && (
          <div className={classes.rItem}>
            {<IconBomb onClick={() => setTime(0)} />}
          </div>
        )}

        <div className={classes.rItem}>
          <h4>ATT</h4> <p>00</p>
        </div>
      </div>
    </div>
  );
}
