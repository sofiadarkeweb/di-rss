import React, { useEffect, useState } from "react";

const Header = () => {
  return (
    <header className="header">
      <h1>Dagens Industri - senaste</h1>
    </header>
  );
};
const Footer = () => {
  return (
    <footer className="header">
      <a href="https://www.di.se/">
        Besök Dagens Industri för ännu mer nyheter
      </a>
    </footer>
  );
};

const Article = (index, title, description, link, published) => {
  var publishedDate = new Date(published);

  return (
    <div className="article" key={index}>
      <p className="published">{publishedDate.toLocaleString()}</p>
      <h2>{title}</h2>
      <p className="description">{description}</p>
      <a className="link" href={link} target="_blank" rel="noopener noreferrer">
        Läs mer
      </a>
    </div>
  );
};

const Feed = () => {
  const [items, setItems] = useState([]);
  const itemsExist = items.length > 0;

  const RSS_URL = `https://www.di.se/rss`;
  const PARSED_RSS_URL = `https://rss-to-json-serverless-api.vercel.app/api?feedURL=${RSS_URL}`;
  //   const toJson =
  //     "https://api.rss2json.com/v1/api.json?rss_url=https://www.di.se/rss";

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(PARSED_RSS_URL);
      const resultToJson = await result.json();
      const TenLatestItems = resultToJson.items.slice(0, 10);

      //   const res = await fetch(toJson);
      //   console.log("res", res);
      //   const data = await res.json();
      //   console.log("data", data);

      await setItems(TenLatestItems);
    };

    try {
      fetchData();
    } catch (error) {
      console.log("error", error);
    }
  });

  return (
    <>
      <Header />
      <div className="articles">
        {itemsExist ? (
          items.map((item, index) => {
            return Article(
              index,
              item.title,
              item.description,
              item.link,
              item.published
            );
          })
        ) : (
          <h2 className="error message">
            😢 Åh nej, vi kunde inte hitta några nyheter
          </h2>
        )}

        {/* {items.length > 0
          ? items.slice(0, 9).map((item, index) => {
              return Article(
                index,
                item.thumbnail,
                item.title,
                item.description,
                item.link,
                item.pubDate
              );
            })
          : null} */}
      </div>
      <Footer />
    </>
  );
};

export default Feed;
