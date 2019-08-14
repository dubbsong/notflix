import React from 'react';
import DetailPresenter from './DetailPresenter';
import { movieApi, tvApi } from 'api';

export default class extends React.Component {
  constructor(props) {
    super(props);

    const {
      location: { pathname }
    } = props;

    this.state = {
      loading: true,
      result: null,
      error: null,
      isMovie: pathname.includes('/movie/')
    };
  }

  // Logic
  componentDidMount = async () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    const parsedId = parseInt(id);
    let result = null;

    try {
      if (this.state.isMovie) {
        ({ data: result } = await movieApi.movieDetail(parsedId));
      } else {
        ({ data: result } = await tvApi.tvDetail(parsedId));
      }
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result });
    }
  };

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
