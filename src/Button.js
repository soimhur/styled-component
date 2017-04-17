import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  height: 2.25em;
  font-size: 1em;
  border-radius: 3px;
  padding: 0.6em 0.4em 0.6em 0.4em;
  color: ${props => props.primary ? 'white' : '#363636'};
  background-color: ${props => props.primary ? props.theme.tumblbugRed : 'rgb(192, 192, 192)'};
  margin: .3em;
  cursor: pointer;
  border-color: transparent;

  &:hover {
    border-color: white;
  }
`;

Button.displayName = 'Button';

export default Button;