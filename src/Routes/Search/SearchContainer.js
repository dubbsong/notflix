import React from 'react';
import SearchPresenter from './SearchPresenter';
import { movieApi, tvApi } from 'api';

export default class extends React.Component {
  state = {
    loading: false,
    searchWord: '',
    movieResults: null,
    tvResults: null,
    error: null
  };

  // Logic
  handleSubmit = () => {
    if (this.state.searchWord !== '') {
      this.searchByWord();
    }
  };

  searchByWord = async () => {
    try {
      const {
        data: { results: movieResults }
      } = await movieApi.search(this.state.searchWord);

      const {
        data: { results: tvResults }
      } = await tvApi.search(this.state.searchWord);

      this.setState({
        movieResults,
        tvResults
      });
    } catch {
      this.setState({ error: "Can't find results." });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <SearchPresenter
        loading={this.state.loading}
        searchWord={this.state.searchWord}
        movieResults={this.state.movieResults}
        tvResults={this.state.tvResults}
        error={this.state.error}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
