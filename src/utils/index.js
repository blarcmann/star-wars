const filterOptions = (movies) => {
  return movies.map((movie, index) => {
    return {
      id: index,
      value: movie.url,
      label: movie.title,
      openingCrawl: movie.opening_crawl,
      characters: movie.characters
    };
  })
}

const convertCMToFeet = (cm) => {
  var inches = (cm * 0.393700787).toFixed(0);
  var feet = Math.floor(inches / 12);
  inches %= 12;
  return `${feet} ft ${inches} in`;
}

const extractNumbers = (str) => {
  return str.match(/[0-9]+/g);
}

export { filterOptions, convertCMToFeet, extractNumbers}