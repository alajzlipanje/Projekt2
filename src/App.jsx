import { useEffect } from "react";
import { useState } from "react";
import Quote from "./Quote.jsx";
import { Badge } from "@/components/ui/badge";

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [tags, setTags] = useState(["tag1", "tag2", "tag3", "tag4"]);
  const [selectedTag, setselectedTag] = useState(null);

  async function getQuotes() {
    const request = await fetch("quotes.json");
    const podatki = await request.json();

    setQuotes(podatki);
  }

  useEffect(() => {
    getQuotes();
  }, []);

  useEffect(() => {
    // preverimo ce quotes obstaja in ima element
    if (!(quotes && quotes.length > 0)) {
      return;
    }

    let tags = [];

    quotes.forEach((e) => {
      e["tags"].forEach((i) => {
        if (tags.includes(i)) {
        } else {
          tags.push(i);
        }
      });
    });
    setTags(tags);
  }, [quotes]);

  return (
    <>
      <div>
        <div>
          {tags.map((tag) => (
            <Badge className="grid grid-cols-8" key={tag}>
              {tag}
            </Badge>
          ))}
        </div>
        <ul className="grid grid-cols-4 ">
          {quotes.map((quote) => (
            <Quote data={quote} key={quote["_id"]}></Quote>
          ))}
        </ul>
      </div>
    </>
  );

  return <>{quotes.length && <Quote quote={quotes[33]}></Quote>}</>;
}
