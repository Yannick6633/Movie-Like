function movieResults () {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=c174da4ce913549d5180cc8cc9456b00')
    .then(dataMovie => dataMovie.json())
    .then(dataMovie => {
        console.log(dataMovie);
        displayResults(dataMovie.results);
    });
}

function displayResults (dataMovie) {
    let title = document.querySelector('.list');
    let affichage = ``;
    dataMovie.forEach(movie => {
        affichage += `<li>movie.title</li>`
    });
    title.innerHTML = affichage;
}
//movieResults();

        