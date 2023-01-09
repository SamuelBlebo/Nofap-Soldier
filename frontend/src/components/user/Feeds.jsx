import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

import { createStyles } from "@mantine/core";

const useStyle = createStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    margin: "0 60px",
  },
}));

export function Feeds() {
  const { classes } = useStyle();

  return (
    <>
      <div className={classes.container}>
        <TwitterTimelineEmbed
          sourceType="hashtag"
          hashtag="reactjs"
          options={{
            height: 400,
            consumerKey: "r6ZwF2DAxqDSunHY76WPwsWYj",
            consumerSecret:
              "k5KWUjp2kImqUpQpmowhrp1SXtFyvfLFGngyf8iEXwblLl4bCu",
          }}
          onLoad={() => console.log("TwitterTimelineEmbed loaded successfully")}
        />
      </div>
    </>
  );
}
