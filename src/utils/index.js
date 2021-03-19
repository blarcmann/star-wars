export const filterOptions = (movies) => {
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

export const convertCMToFeet = (cm) => {
  var inches = (cm * 0.393700787).toFixed(0);
  var feet = Math.floor(inches / 12);
  inches %= 12;
  return `${feet} ft ${inches} in`;
}

// slide: function(event, ui) {
//   $("#heightslidecm").html(ui.value + 'cm');

//   var inches = (ui.value * 0.393700787).toFixed(0);
//   var feet = Math.floor(inches / 12);
//   inches %= 12;

//   $("#heightslidein").html(feet + "ft " + inches + 'in');
// }