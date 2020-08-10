import axios from "axios";

const api_key = `?api_key=${process.env.REACT_APP_api_key}&language=en-US`;

const collections = [
  "https://api.themoviedb.org/3/tv/",
  "https://api.themoviedb.org/3/movie/",
];

export async function getDetails({ id, original_title }) {
  let result = {};

  if (original_title) {
    result = await axios.get(collections[1] + id + api_key);
  } else {
    result = await axios.get(collections[0] + id + api_key);
  }

  return result;
}

export async function getVideo({ id, original_title }) {
  let result = {};
  if (original_title)
    result = await axios.get(collections[1] + id + "/videos" + api_key);
  else {
    result = await axios.get(collections[0] + id + "/videos" + api_key);
  }

  if (result.data.results[0]) {
    let link = "https://www.youtube.com/watch?v=" + result.data.results[0].key;
    return link;
  }
  return [];
}
