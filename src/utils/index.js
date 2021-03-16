export const filterOptions = (movies) => {
  return movies.map((movie, index) => {
    return {
      id: index,
      value: movie.url,
      label: movie.title,
      openingCrawl: movie.opening_crawl,
    };
  })
}