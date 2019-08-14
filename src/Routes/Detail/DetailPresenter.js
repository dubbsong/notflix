import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'Components/Loader';
import Helmet from 'react-helmet';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 70px 4% 50px;
  position: relative;
`;

const Backdrop = styled.div`
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0%;
  filter: blur(3px);
  opacity: 0.8;
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
`;

const LeftContent = styled.div`
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center center;
  width: 35%;
  height: 100%;
  border-radius: 5px;
  box-shadow: 5px 5px 20px #141414;

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightContent = styled.div`
  width: 50%;
  padding-top: 50vh;
  margin-left: 40px;

  @media (max-width: 768px) {
    width: 100%;
    position: absolute;
    bottom: 0;
    margin-left: 8px;
  }
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 700;
  text-shadow: 5px 5px 20px #141414;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const ItemContainer = styled.div`
  font-size: 16px;
  margin-bottom: 20px;
`;

const Item = styled.span`
  text-shadow: 5px 5px 20px #141414;
`;

const Divider = styled.span`
  margin: 0 8px;
`;

const Overview = styled.p`
  font-size: 20px;
  line-height: 1.4;
  color: #e6e6e6;
  text-shadow: 5px 5px 20px #141414;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const DetailPresenter = ({ loading, result, error }) =>
  loading ? (
    <React.Fragment>
      <Helmet>
        <title>Loading | Notflix</title>
      </Helmet>
      <Loader />
    </React.Fragment>
  ) : (
    <Container>
      <Helmet>
        <title>{result.title ? result.title : result.name} | Notflix</title>
      </Helmet>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <LeftContent
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require('../../assets/no_v_poster.png')
          }
        />
        <RightContent>
          <Title>{result.title ? result.title : result.name}</Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.runtime ? result.runtime : result.episode_run_time}
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>
          </ItemContainer>
          <Overview>
            {result.overview.length > 450
              ? `${result.overview.substring(0, 450)}...`
              : result.overview}
          </Overview>
        </RightContent>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  result: PropTypes.object,
  error: PropTypes.string
};

export default DetailPresenter;
