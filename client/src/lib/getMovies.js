import { API_KEY, MOVIE_DB_KEY } from '../config/config.js';
import $ from 'jquery';

// const getMovies = function(callback) {
//   $.ajax({
//     url: `https://api.themoviedb.org/3/movie/550?api_key=${MOVIE_DB_KEY}`,
//     method: 'GET',
//     success: function(data) {
//       console.log('GET request Success!');
//     },
//     error: function() {
//       console.error('GET request FAILED: Line 15');
//     }
//   });
// };

// const addMovies = function(callback) {
//   $.ajax({
//     url: `https://api.themoviedb.org/3/movie/550?api_key=${MOVIE_DB_KEY}`,
//     method: 'POST',
//     data: '',
//     success: function(data) {
//       console.log('POST request Success!');
//       callback(data)
//     },
//     error: function() {
//       console.error('POST request FAILED: Line 28');
//     }
//   });
// };

export default getMovies;