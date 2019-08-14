import React from 'react';
import TVPresenter from './TVPresenter';
import { tvApi } from 'api';

export default class extends React.Component {
  state = {
    loading: true,
    trending: null,
    onTheAir: null,
    popular: null,
    topRated: null,
    error: null
  };

  // Logic
  componentDidMount = async () => {
    try {
      const {
        data: { results: trending }
      } = await tvApi.trending();

      const {
        data: { results: onTheAir }
      } = await tvApi.onTheAir();

      const {
        data: { results: popular }
      } = await tvApi.popular();

      const {
        data: { results: topRated }
      } = await tvApi.topRated();

      this.setState({
        trending,
        onTheAir,
        popular,
        topRated
      });
    } catch {
      this.setState({ error: "Can't find tv information." });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <TVPresenter
        loading={this.state.loading}
        trending={this.state.trending}
        onTheAir={this.state.onTheAir}
        popular={this.state.popular}
        topRated={this.state.topRated}
        error={this.state.error}
      />
    );
  }
}
