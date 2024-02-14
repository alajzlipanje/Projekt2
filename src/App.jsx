import { useEffect } from "react";
import { useState } from "react";
import Quote from "./Quote.jsx";

export default function App() {
  const [quotes, setQuotes] = useState([]);

  async function getQuotes() {
    const request = await fetch("quotes.json");
    const podatki = await request.json();

    setQuotes(podatki);
  }

  useEffect(() => {
    getQuotes();
  }, []);

  useEffect(() => {
    console.log(quotes);
  }, [quotes]);

  return <>{quotes.length && <Quote quote={quotes[33]}></Quote>}</>;
}
