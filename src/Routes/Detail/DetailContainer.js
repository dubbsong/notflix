import React from 'react';
import DetailPresenter from './DetailPresenter';

export default class extends React.Component {
  state = {
    loading: true,
    result: null,
    error: null
  };

  // Logic

  render() {
    return (
      <DetailPresenter
        loading={this.state.loading}
        result={this.state.result}
        error={this.state.error}
      />
    );
  }
}
