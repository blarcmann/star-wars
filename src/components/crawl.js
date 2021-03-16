import React from 'react'

export default function crawl(props) {
  const { movie } = props;
  return (
    <div className="crawll">
      <h2 className="title">{movie.label}</h2>
      <p> {movie.openingCrawl}</p>
    </div>
  )
}
