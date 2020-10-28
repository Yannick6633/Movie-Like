let original_title = document.querySelector('#movies');
let poster_path = document.querySelector('#movies');
let release_date = document.querySelector('#movies');

function movieResults () {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=c174da4ce913549d5180cc8cc9456b00')
    .then(dataMovie => dataMovie.json())
    .then(dataMovie => {
       
        displayResults(dataMovie.results);
    });
    
}



function displayResults (dataMovie) {
    //console.log(dataMovie);
    
    list = ``;
    dataMovie.forEach(movie => {
        list += ` 
        <div class="row">
            <div class="col">
                <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" class="poster">
                <h5>${movie.original_title}</h5>
                <ul>
                    <li>${movie.release_date}</li>
                </ul>
            </div>
        </div>           
            `
    });
    poster_path.innerHTML = list;

    /*aff = ``;
    dataMovie.forEach(movie => {
        aff += `<img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">`;
    });
    poster_path.innerHTML = aff;

    let affichage = ``;
    dataMovie.forEach(movie => {
        //affichage += movie.title + '<br>';
        affichage += `<p>${movie.original_title}</p>`;
    });
    original_title.innerHTML = affichage;

    let dateAffichage = ``;
    dataMovie.forEach(movie => {
        dateAffichage += `<p>${movie.release_date}</p>`;
    });
    release_date.innerHTML = dateAffichage;*/
 
}
movieResults();

        