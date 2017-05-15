import React from 'react';
import styled from 'styled-components';

/* style */
const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
  padding: ${props => props.padded ?  '0 1rem' : '0'};

  @media (min-width: 1080px) {
    width: 1080px;
    margin: 0 auto;
  }
`;


export default Container;