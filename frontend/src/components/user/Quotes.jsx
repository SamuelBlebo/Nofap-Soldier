import React, { useState, useEffect, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import {} from "@tabler/icons";
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
  quote: {
    backgroundColor: "#F8F9FA",
    borderRadius: "10px",
    padding: "25px 50px",

    "&:hover": {
      backgroundColor: "#EBFBEE",
    },
  },

  dailyQuote: { margin: "0px 0px 20px 0px" },
  quotes: {},

  author: {
    alignSelf: "flex-start",
  },
}));

export function Quotes() {
  const { classes } = useStyle();
  const autoplay = useRef(Autoplay({ delay: 20000 }));
  const [quoteData, setQuoteData] = useState(null);
  const [quoteAuthor, setQuoteAuthor] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://quotes.rest/qod")
      .then((response) => response.json())
      .then((data) => {
        setQuoteData(data.contents.quotes[0].quote);
        setQuoteAuthor(data.contents.quotes[0].author);
      })
      .then((error) => setError(error));
  }, []);
  console.log(quoteAuthor);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.dailyQuote}>
          <h4>DAILY QUOTE</h4>
        </div>
        <div className={classes.quote}>
          <div className={classes.quotes}>
            <p>"{quoteData}"</p>
            <br />
          </div>
          <div className={classes.author}>
            <p> -{quoteAuthor}</p>
          </div>
        </div>
      </div>
    </>
  );
}
