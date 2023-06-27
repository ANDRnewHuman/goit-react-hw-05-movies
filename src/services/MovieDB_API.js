import axios from 'axios';

export default class MovieDB_API {
  async getData(path, query) {
    const URL = `https://api.themoviedb.org/3/${path}`;
    const config = {
      params: {
        api_key: `2f1ed426eec63f4ff67bdd1fc7f22e9d`,
        language: 'en-US',
      },
    };

    if (query) {
      config.params.query = query;
    }

    const response = await axios.get(URL, config);
    return response.data;
  }

  getMovies(query) {
    if (query) {
      return this.getData('search/movie', query);
    }
    return this.getData('trending/movie/day');
  }
  getMovieDetailInfo(id) {
    return this.getData(`movie/${id}`);
  }
  getMovieCast(id) {
    return this.getData(`movie/${id}/credits`);
  }
  getMovieReviews(id) {
    return this.getData(`movie/${id}/reviews`);
  }
}
