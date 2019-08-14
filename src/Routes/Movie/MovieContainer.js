import React from 'react';
import MoviePresenter from './MoviePresenter';

export default class extends React.Component {
  state = {
    loading: true,
    trending: null,
    nowPlaying: null,
    topRated: null,
    upcoming: null,
    error: null
  };

  // Logic

  render() {
    return (
      <MoviePresenter
        loading={this.state.loading}
        trending={this.state.trending}
        nowPlaying={this.state.nowPlaying}
        topRated={this.state.topRated}
        upcoming={this.state.upcoming}
        error={this.state.error}
      />
    );
  }
}
