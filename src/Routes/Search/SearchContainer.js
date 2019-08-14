import React from 'react';
import SearchPresenter from './SearchPresenter';

export default class extends React.Component {
  state = {
    loading: false,
    searchWord: '',
    movieResults: null,
    tvResults: null,
    error: null
  };

  // Logic

  render() {
    return (
      <SearchPresenter
        loading={this.state.loading}
        searchWord={this.state.searchWord}
        movieResults={this.state.movieResults}
        tvResults={this.state.tvResults}
        error={this.state.error}
      />
    );
  }
}
