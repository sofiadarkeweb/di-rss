import React from "react";

function Article(key, title, description, link, published) {
  return (
    <div className="article" key={key}>
      <h2>{title}</h2>
      <p>{description}</p>
      <a className="link" href={link} target="_blank" rel="noopener noreferrer">
        Läs mer
      </a>
      <p>{published}</p>
    </div>
  );
}

export default Article;
