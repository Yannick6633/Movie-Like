let title = document.querySelector('.list #titleMovie');
let poster_path = document.querySelector('.list');

function movieResults () {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=c174da4ce913549d5180cc8cc9456b00')
    .then(dataMovie => dataMovie.json())
    .then(dataMovie => {
        //console.log(dataMovie);
        displayResults(dataMovie.results);
    });
}

function displayResults (dataMovie) {

        let affichage = ``;
        dataMovie.forEach(movie => {
            affichage += movie.title + '<br>';
        });
        title.innerHTML = affichage;

        let aff = ``;
        dataMovie.forEach(movie => {
            aff += `<img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">`;
        });
        poster_path.innerHTML = aff;

}
movieResults();

         