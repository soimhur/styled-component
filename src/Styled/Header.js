import styled from 'styled-components';

/* Style */
const Header = styled.div`
  width: 100vw;
  height: 58px;
  background-color: #ffffff;
  box-shadow: 0px 1px 2px 0px rgba(10, 10, 10, 0.1);
  display: flex;
  align-items: center;
  z-index: 999;
  position: ${props => props.fixed ? 'fixed' : ''};
  left: ${props => props.fixed ? '0' : ''};
  top: ${props => props.fixed ? '0' : ''};

  @media (min-width: 1080px) {
    height: 65px;
  }
`;

export default Header;
