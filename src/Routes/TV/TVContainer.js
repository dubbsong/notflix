import React from 'react';
import TVPresenter from './TVPresenter';

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
