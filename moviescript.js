function searchMovie() {
    moviename = movieName.value
    //   alert(moviename)
    fetch(`http://www.omdbapi.com/?t=${moviename}&apikey=2ac25e2a`)
        .then(data => data.json())
        .then(movieData => displayDetails(movieData))
}

function displayDetails(movieData) {
    title = movieData.Title
    moviePoster = movieData.Poster
    year = movieData.Year
    releasedOn = movieData.Released
    type = movieData.Genre
    dirName = movieData.Director
    persons = movieData.Actors
    lang = movieData.Language

    showTitle.innerHTML = `<div class="row container w-100">
                    <h2 class="text-center text-dark">${title}</h2>
                </div>`

    picture.innerHTML = `<img src="${moviePoster}">`

    details.innerHTML = `<div class="card text-bg-dark border-0">
        <div class="card-img-overlay ">
            <p class="card-title size1 text-dark">Year : ${year}</p>
            <p class="card-text size1 text-dark">Released On : ${releasedOn}</p>
            <p class="card-text size1 text-dark">Genre : ${type}</p>
            <p class="card-text size1 text-dark">Director : ${dirName}</p>
            <p class="card-text size1 text-dark">Actors : ${persons}</p>
            <p class="card-text size1 text-dark">Language : ${lang}</p>
        </div>
    </div>`
}


