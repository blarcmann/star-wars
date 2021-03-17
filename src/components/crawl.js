import React from 'react'

export default function crawl(props) {
  const { movie } = props;
  return (
    <div className="crawl">
      <h2 className="title">{movie.label}</h2>
      <p className="opening-crawl">{movie.openingCrawl}</p>
    </div>
  )
}
