import styled from 'styled-components';

/* Theme Definition */
const Primary = `
  background-color: #fa6462;
  color: #fff;

  &:hover,
  &:focus,
  &:active {
    background-color: #ff4543;
    color: #fff;
  }
`;
const PrimaryViolet = `
  background: #6241e8;
  color: #fff;

  &:hover,
  &:focus,
  &:active {
    background-color: #411fcd;
    color: #fff;
  }
`;

/* Size Definition */
const Small = `
  padding: .8em 1.2em;
  font-size: .95em;
`;

/* Icon Definition */
const Icon = `
  padding: 1em;

  > i {
    margin: 0;
  }
`;

const IconPadded = `
  padding: 1.2em;

  > i {
    margin: 0;
  }
`;

const IconCircle = `
  padding: 1em;
  border-radius: 50%;

  > i {
    margin: 0;
  }
`;
const IconTransparent = `
  padding: 1em;
  background-color: transparent;
  color: black;

  > i {
    margin: 0;
  }

  &:hover,
  &:focus,
  &:active {
    background-color: transparent;
    color: black;
  }
`;

/* Button */
const Button = styled.button`
  /* Basic Button Structure */
  cursor: pointer;
  display: inline-block;
  min-height: 1em;
  outline: none;
  border: none;
  vertical-align: baseline;
  box-shadow: 0px 0px 0px 1px transparent inset, 0px 0em 0px 0px rgba(0, 0, 0, 0.1) inset;
  user-select: none;
  transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease, box-shadow 0.1s ease, background 0.1s ease;
  -webkit-tap-highlight-color: transparent;
  margin: 0 .25em 0 0;

  /* No radius style */
  border-radius: ${props => props.noRadius ? '0' : '0.28571429rem'};

  /* Font */
  text-transform: none;
  text-shadow: none;
  font-weight: bold;
  line-height: 1em;
  font-style: normal;
  text-align: center;
  text-decoration: none;

  > i {
    margin: 0 .42857143em 0 -.21428571em;
  }

  /* Theme & Color */
  color: rgba(0,0,0,.6);
  background-color: #e7e7e7;

  &:hover,
  &:focus,
  &:active {
    background-color: #d9d9d9;
    color: rgba(0,0,0,8);
  }
  ${props => props.primary ? Primary : ''}
  ${props => props.primaryViolet ? PrimaryViolet : ''}
  
  /* Size */
  padding: ${props => props.padded ? '1.2em 2em' : '1em 1.5em'};
  font-size: ${props => props.medium ? '1.1em' : '1em'};
  width: ${props => props.fluid ? '100%' : ''};
  ${props => props.small ? Small : ''}

  /* Disabled */
  opacity: ${props => props.disabled ? '.3' : '1'};
  pointer-events : ${props => props.disabled ? 'none' : ''};

  /* Icon Button */
  ${props => props.icon ? Icon : ''}
  ${props => props.iconCircle ? IconCircle : ''}
  ${props => props.iconTransparent ? IconTransparent : ''}
  ${props => props.iconPadded ? IconPadded : ''}
`;

export default Button;
