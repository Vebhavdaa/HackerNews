import { useState, useEffect } from "react";
import MenuHeader from "./components/MenuHeader";
import SiteNameHeader from "./components/SiteNameHeader";
import NewsCard from "./components/NewsCard";
import Footer from "./components/Footer";
import LoadMoreButton from "./components/LoadMoreButton";
import './App.css'
import { Box } from "@mui/material";

function App() {
  const [ids, setIds] = useState<number[]>([]);
  const [api, setApi] = useState("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty");
  const [data, setData] = useState<any[] | null>(null); 
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setIds(data))
      .catch((error) => console.error("Error fetching IDs:", error));
  }, [api]);

  useEffect(() => {
    if (!ids.length) return; // Exit early if ids is empty

    // Fetch data for each id
    Promise.all(ids.slice(start, end).map(id =>
      fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
        .then((response) => response.json())
    ))
    .then((data) => setData(data))
    .catch((error) => console.error("Error fetching data:", error));
  }, [ids, start, end]);

  return (
    <>
      <SiteNameHeader />
      <MenuHeader setApi={setApi} setStart={setStart} setEnd={setEnd} />
      <Box p={2}>
        {data && data.map((news: any) => (
          <NewsCard key={news.id} news={news} />
        ))}
           {(ids.length > end || end < ids.length) && (
          <LoadMoreButton setStart={setStart} setEnd={setEnd} />
        )}
      </Box>
      <Footer />
    </>
  );
}

export default App;
