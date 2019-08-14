import React from 'react';
import MoviePresenter from './MoviePresenter';
import { movieApi } from 'api';

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
  componentDidMount = async () => {
    try {
      const {
        data: { results: trending }
      } = await movieApi.trending();

      const {
        data: { results: nowPlaying }
      } = await movieApi.nowPlaying();

      const {
        data: { results: topRated }
      } = await movieApi.topRated();

      const {
        data: { results: upcoming }
      } = await movieApi.upcoming();

      this.setState({
        trending,
        nowPlaying,
        topRated,
        upcoming
      });
    } catch {
      this.setState({ error: "Can't find movie information." });
    } finally {
      this.setState({ loading: false });
    }
  };

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
