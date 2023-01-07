import React, { useState, useEffect, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import {} from "@tabler/icons";
import { createStyles } from "@mantine/core";

const useStyle = createStyles((theme) => ({
  quotes: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    margin: "0 60px",
  },

  author: {
    alignSelf: "flex-end",
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
      <div className={classes.quotes}>
        <p>"{quoteData}"</p>
        <br />
        <p className={classes.author}> -{quoteAuthor}</p>
      </div>
    </>
  );
}
