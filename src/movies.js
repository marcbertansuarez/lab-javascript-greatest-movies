// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map((obj) => obj.director)
    return allDirectors;
}

//console.log(getAllDirectors(movies))

const filteredDirectors = getAllDirectors(movies).filter((directors, index) => getAllDirectors(movies).indexOf(directors) === index);

//console.log(filteredDirectors);



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const stevenDramaMovies = moviesArray.filter((obj) => obj.director === 'Steven Spielberg' && obj.genre.includes('Drama')) 
    return stevenDramaMovies.length
}
//console.log (howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const scoresArray = moviesArray.map(elem => elem.score);
    console.log(scoresArray)
    const moviesWithScore = scoresArray.filter(scores => typeof scores === "number")
    const scoresAverageMovies = moviesWithScore.reduce((acc, value) => acc + value, 0);
    return parseFloat((scoresAverageMovies / moviesArray.length).toFixed(2))
}
//console.log(scoresAverage(movies))
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(obj => obj.genre.includes('Drama'))
    if(dramaMovies.length === 0) {
        return 0
    }
    const avgDramaMovies = dramaMovies.reduce((acc, value) => acc + value.score, 0);
    return parseFloat((avgDramaMovies / dramaMovies.length).toFixed(2));    
}
//console.log(dramaMoviesScore(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray));
    const moviesOrderedByYear = moviesArrayCopy.sort(function(a, b) {
        if (a.year > b.year ) {return 1}
        if (a.year < b.year) {return -1}
        if (a.year === b.year && a.title > b.title) {return 1}
        if (a.year === b.year && a.title < b.title) {return -1}
        return 0 });   
    return moviesOrderedByYear
}
//console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesArrayCopy1 = JSON.parse(JSON.stringify(moviesArray));
    const moviesOrderAlphabetically = moviesArrayCopy1.map(elem => elem.title).sort(function(a, b) {
        if (a < b) {return -1}
        if (a > b) {return 1}
        return 0; })
        if (moviesOrderAlphabetically.length <= 20) {
            return moviesOrderAlphabetically
        } else {
            return moviesOrderAlphabetically.slice(0, 20);
        }
}
//console.log(orderAlphabetically(movies))



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
