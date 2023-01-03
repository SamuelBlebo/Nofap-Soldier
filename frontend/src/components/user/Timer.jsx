import React, { useState, useEffect } from "react";
import { useDisclosure } from "@mantine/hooks";
import axios from "axios";
import { createStyles, Popover, Text } from "@mantine/core";
import { IconBomb, IconPlayerPlay } from "@tabler/icons";

import { useAuthContext } from "../../hooks/useAuthContext.js";

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
  const [timerOn, setTimerOn] = useState(false);
  const [opened, { close, open }] = useDisclosure(false);
  const [streaks, setStreaks] = useState([]);
  let [attempts, setAttempts] = useState(0);
  let [timeDiff, setTimeDiff] = useState(0);

  const [error, setError] = useState(null);

  const { user } = useAuthContext();

  //Fetching Streaks
  useEffect(() => {
    const fetchStreaks = async () => {
      const response = await fetch("/api/streak");
      const json = await response.json();

      if (response.ok) {
        setStreaks(json);
      }

      if (response.ok && streaks.length > 0) {
        const streak = streaks[0];
        const date = new Date(`${streak.date}`);
        const dateNow = new Date();

        setAttempts(streak.attempts);
        setTimeDiff(dateNow.getTime() - date.getTime());
        setTimerOn(true);
      }
    };

    fetchStreaks();
  }, [streaks, timeDiff, attempts]);

  // Start Streak
  const startStreak = async () => {
    const userEmail = user.email;
    const date = new Date();
    const streak = { date, userEmail };

    console.log(streak);

    // Posting a new data
    const res = await fetch("/api/streak", {
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
      console.log("added successfully");
      setTimerOn(true);
    }
  };

  const resetStreak = async () => {
    const date = new Date();
    attempts = parseInt(attempts) + 1;
    const userEmail = user.email;

    // Posing a new data
    const response = await fetch("/api/streak", {
      method: "PUT",
      body: JSON.stringify({ date, attempts, userEmail }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.text();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      console.log("updated successfully");
    }
  };

  return (
    <div className={classes.timer}>
      <h1 className={classes.streak}>STREAK</h1>
      <div className={classes.time}>
        {/* Days */}
        <div className={classes.days}>
          <h1> {"0" + Math.floor(timeDiff / 86400000)} </h1> <p> Days</p>
        </div>
        {/* Hour */}
        <div className={classes.days}>
          <h1>{("0" + Math.floor((timeDiff / 3600000) % 24)).slice(-2)}</h1>
          <p>Hours</p>
        </div>
        {/* Min */}
        <div className={classes.days}>
          <h1>
            {("0" + Math.floor((timeDiff / 60000) % 60)).slice(-2)}
            <sup className={classes.sup}>
              {("0" + Math.floor((timeDiff / 1000) % 60)).slice(-2)}
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
                <IconPlayerPlay type="submit" onClick={() => startStreak()} />
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
          <div className={classes.rItem} onClick={resetStreak}>
            <IconBomb />
          </div>
        )}

        <div className={classes.rItem}>
          <h4>ATT</h4> <p>{`${attempts}`}</p>
        </div>
      </div>
    </div>
  );
}
