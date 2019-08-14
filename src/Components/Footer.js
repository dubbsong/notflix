import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import omb from '../assets/omb.png';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 0 4%;
`;

const LeftContent = styled.div``;

const CopyRight = styled.p`
  font-size: 16px;
`;

const RightContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  margin-left: 8px;
`;

const OMB = styled.img`
  width: 22.5px;
  margin-left: 10px;
`;

export default () => (
  <Container>
    <LeftContent>
      <CopyRight>
        ©2019{' '}
        <a
          href="https://dubbsong.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          ㅇㅁㅂ
        </a>
      </CopyRight>
    </LeftContent>
    <RightContent>
      <a
        href="https://github.com/dubbsong"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledIcon icon={faGithub} />
      </a>
      <a
        href="https://www.facebook.com/dubbsong"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledIcon icon={faFacebook} />
      </a>
      <a
        href="https://dubbsong.github.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        <OMB src={omb} alt="" />
      </a>
    </RightContent>
  </Container>
);
