import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Text = styled.p`
  font-size: 20px;
`;

export default () => (
  <Container>
    <Text>Loading...</Text>
  </Container>
);
