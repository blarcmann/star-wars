import React from 'react'

export default function Crawl(props) {
  const { movie } = props;
  return (
    <div className="crawl">
      <div className="opening-crawl">
        <h2 className="title">{movie.label}</h2>
        <p>{movie.openingCrawl}</p>
      </div>
    </div>
  )
}
