import React, { useEffect, useState } from "react"

const Article = (index, title, description, link, published) => {
  var publishedDate = new Date(published)

  return (
    <div className="article" key={index}>
      <p className="published">{publishedDate.toLocaleString("sv-SE")}</p>
      <h2>{title}</h2>
      <p className="description">{description}</p>
      <a className="link" href={link} target="_blank" rel="noopener noreferrer">
        Läs mer
      </a>
    </div>
  )
}

const Feed = () => {
  const [items, setItems] = useState([])
  const itemsExist = items.length > 0


    const RSS_URL = `https://www.di.se/rss`
    const PARSED_TO_JSON_RSS_URL = `https://rss-to-json-serverless-api.vercel.app/api?feedURL=${RSS_URL}`
    const fetchDataFromRSSFeed = async () => {
      const result = await fetch(PARSED_TO_JSON_RSS_URL)
      const resultToJson = await result.json()
      const TenLatestItems = resultToJson.items.slice(0, 10)
      setItems(TenLatestItems)
    }

  
    useEffect(() => {
      fetchDataFromRSSFeed()
    }, [])
    



  return (
   <div className="articles">

        {itemsExist ? (
          items.map((item, index) => {
            return Article(
              index,
              item.title,
              item.description,
              item.link,
              item.published
            )
          })
        ) : (
          <h2 className="error message">
            😢 Åh nej, vi kunde inte hitta några nyheter
          </h2>
        )}
  </div>
  )
}

export default Feed
