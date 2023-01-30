const DOMAIN = "http://www.omdbapi.com/";
const API_KEY = "1023f2e";
const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`;
// const URL = http://www.omdbapi.com/?s=[MOVIE TITLE]&apikey=[YOUR API KEY];

const button = document.querySelector("#search");
const input = document.getElementById("blank");

const movieList = document.querySelector(".movie-list");
const form = document.querySelector("form");

button.addEventListener("click", async (e) => {
  e.preventDefault();
  const movies = await fetchCall(input.value);
  renderList(movies);
});

async function fetchCall(search) {
  const res = await fetch(`${BASE_URL}s=${search}`);
  const json = await res.json();
  return json.Search;
}

function renderList(movies) {
  document.querySelectorAll("p").forEach((p) => p.remove());
  for (const movie of movies) {
    const p = document.createElement("p");
    p.textContent = movie.Title;
    movieList.append(p);
  }
}
