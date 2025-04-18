import React, { useEffect, useState } from "react";
import { CssBaseline, Box, Grid } from "@mui/material";
import QuoteCard from "./components/QuoteCard";
import Header from "./components/Header";
import JellyButton from "./components/Button";
import Footer from "./components/Footer";
import QuoteSlider from "./components/QuoteSlider";

function App() {
  const [quoteDataList, setQuoteDataList] = useState([]);
  const [count, setCount] = useState(1);

  const fetchQuotes = async () => {
    try {
      const fetchedQuotes = [];

      // Fetch 1 quote N times — still makes N API calls, but guaranteed fresh
      const promises = Array.from({ length: count }, () =>
        fetch("https://api.quotable.io/random").then((res) => res.json())
      );

      const results = await Promise.all(promises);

      results.forEach((quote) =>
        fetchedQuotes.push({ content: quote.content, author: quote.author })
      );

      setQuoteDataList(fetchedQuotes);
    } catch (error) {
      console.error("Error fetching quotes:", error);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, [count]);

  return (
    <>
      <CssBaseline />
      <Header />
      <Box
        sx={{
          minHeight: "100vh",
          width: "100vw",
          backgroundImage: `
      radial-gradient(at 47% 33%, hsl(262.36, 77%, 40%) 0px, transparent 60%),
      radial-gradient(at 82% 65%, hsl(218, 39%, 11%) 0px, transparent 60%)
    `,
          backgroundColor: "hsl(240, 40%, 15%)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundAttachment: "fixed",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          padding: 2,
          gap: 4,
          paddingTop: "6rem",
        }}
      >
        <QuoteSlider count={count} setCount={setCount} />

        <Grid container spacing={2} justifyContent="center">
          {quoteDataList.map((quote, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <QuoteCard quote={quote.content} author={quote.author} />
            </Grid>
          ))}
        </Grid>

        <div onClick={fetchQuotes}>
          <JellyButton />
        </div>
      </Box>
      <Footer />
    </>
  );
}

export default App;
