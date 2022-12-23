import React, { useState, useEffect } from "react";
import { useDisclosure } from "@mantine/hooks";

import { createStyles, Popover, Text } from "@mantine/core";
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
  const initialState = () => Number(window.localStorage.getItem("time")) || 0;
  const [time, setTime] = useState(initialState);
  const [timerOn, setTimerOn] = useState(false);
  const [opened, { close, open }] = useDisclosure(false);

  const [error, setError] = useState(null);

  const startStreak = async () => {
    const date = new Date().toLocaleDateString();

    const streak = { date };

    // Posing a new data
    const res = await fetch("http://localhost:4000/api/streak", {
      method: "POST",
      body: JSON.stringify(streak),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await res.json();

    if (!res.ok) {
      setError(json.error);
    }
    if (res.ok) {
      setError(null);
      console.log("date added successfully");
    }
  };

  useEffect(() => {
    localStorage.setItem("time", time);
  }, [time]);

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
          <Popover
            width={200}
            position="bottom"
            withArrow
            shadow="md"
            opened={opened}
          >
            <Popover.Target>
              <div
                onMouseEnter={open}
                onMouseLeave={close}
                className={classes.rItem}
              >
                <IconPlayerPlay
                  // type="submit"
                  // setTimerOn(true),
                  onClick={() => startStreak()}
                />
              </div>
            </Popover.Target>
            <Popover.Dropdown sx={{ pointerEvents: "none" }}>
              <Text size="sm">
                Click to start your Nofap Journey. The Goal is to hit 90 days of
                Nofap as a Soldier
              </Text>
            </Popover.Dropdown>
          </Popover>
        )}

        {/* Reset */}
        {timerOn && (
          <Popover
            width={200}
            position="bottom"
            withArrow
            shadow="md"
            opened={opened}
          >
            <Popover.Target>
              <div
                onMouseEnter={open}
                onMouseLeave={close}
                className={classes.rItem}
              >
                {<IconBomb onClick={() => setTime(0)} />}
              </div>
            </Popover.Target>
            <Popover.Dropdown sx={{ pointerEvents: "none" }}>
              <Text size="sm">
                If you click on this, you reset your counter. Which means you
                Relapsed.
              </Text>
            </Popover.Dropdown>
          </Popover>
        )}

        <div className={classes.rItem}>
          <h4>ATT</h4> <p>00</p>
        </div>
      </div>
    </div>
  );
}
