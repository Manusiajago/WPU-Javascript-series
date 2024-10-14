// $.ajax({
//     url: "http://www.omdbapi.com/?apikey=aedf78e8&s=spider man",
//     type: "GET",
//     success: function (result) {
//         const movie = result.Search; // ambil dari data yg pertama

//         movie.forEach(movie => {
//             //isi data card dari film yg pertama
//             $('#movie-img').attr('src', movie.Poster) // mengganti gambar film
//             $('#movie-title').text(movie.Title) // ganti judul film
//             $('#movie-year').text(movie.Year) // ganti tahun film
//         })
//     },
//     error: function (xhr, status, err) {
//         console.log(err)
//     }
// })

// buat fungsi untuk hit API
// function hitApi(url, succesCallback, errorCallback) {
//     fetch(url)
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error(`network response is not ok!`)
//             }

//             return response.json()
//         })
//         .then((data) => {
//             succesCallback(data)
//         })
//         .catch((err) => {
//             errorCallback(err)
//         })
// }

// function onSucces(data) {
//     console.log("Data dari API: ", data);
// }

// function onError(err) {
//     console.error("Error: ", err);
// }

// //pemanggilan API menggunakan URL
// const omdbApi = '';

// hitApi(omdbApi, onSucces, onError); ``

// menggunakan JQUERY
$.ajax({
    url: 'http://www.omdbapi.com/?apikey=aedf78e8&s=Harry potter',
    method: 'GET',
    success: function (response) {
        const movies = response.Search;
        let movieCard = '';
        movies.forEach(movie => {
            movieCard += `
                <div class="col-md-4 my-3">
                    <div class="card">
                        <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title}">
                        <div class="card-body">
                            <h5 class="card-title">${movie.Title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
                            <a href="#" class="btn btn-primary show-details" data-bs-toggle="modal" data-bs-target="#movieDetailsModal" data-title="${movie.Title}" data-year="${movie.Year}" data-poster="${movie.Poster}" data-id="${movie.imdbID}">Show details</a>
                        </div>
                    </div>
                </div>
            `;
        });

        // Memasukkan semua card ke dalam div dengan class 'movie-container'
        $('.movie-container').html(movieCard);

        // Event listener untuk tombol 'Show details'
        $('.show-details').on('click', function () {
            const title = $(this).data('title');
            const year = $(this).data('year');
            const poster = $(this).data('poster');
            const imdbID = $(this).data('id');

            // Set detail ke dalam modal
            $('#movieTitle').text(title);
            $('#movieYear').text(year);
            $('#moviePoster').attr('src', poster);

            // Fetch plot atau detail lainnya dari OMDB API menggunakan imdbID
            $.ajax({
                url: `http://www.omdbapi.com/?apikey=aedf78e8&i=${imdbID}`,
                method: 'GET',
                success: function (movieDetails) {
                    $('#moviePlot').text(movieDetails.Plot);
                },
                error: function (xhr, status, err) {
                    console.log(status, err);
                }
            });
        });
    },
    error: function (xhr, status, err) {
        console.log(status, err);
    }
});
