const API_KEY = "ca5dddbd1dmsh0797f246009f49bp1b3420jsnc3e86d5c2c94";
const BASE_URL = "https://moviesdatabase.p.rapidapi.com/titles?startYear=2023&endYear=2023";

export const getPopularMovies = async () =>{
  const response = await fetch(`${BASE_URL}/movie/popular? api_keys=${API_KEY}`);
  const data = await response.json()
  return data.results
};

export const searchMovies = async (query) =>{
  const response = await fetch(`${BASE_URL}/search/movie? api_keys=${API_KEY}&query=${encodeURIComponent(query)}`);
  const data = await response.json()
  return data.results
};
