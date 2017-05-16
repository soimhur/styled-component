import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Styled/Header';
import Container from './Styled/Container';
import Button from './Styled/Button';

/* style */
const ModalHeaderInner = styled.div`
  border-bottom: 1px solid #ddd;
`;
const ModalHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonMenu = styled.div`
  flex: 1 0 25%;
`;
const CenterMenu = styled.div`
  flex: 1 0 50%;
`;
const ModalTitle = styled.div`
  font-weight: bolder;
  color: rgba(0,0,0,.8);
  font-size: 1rem;
  text-align: center;
`;
const CloseButton = styled.div`
  margin: ${props => (props.buttonRight ? '0 -1.25em 0 0' : '0 0 0 -1.25em')};
  text-align: ${props => (props.buttonRight ? 'right' : 'left')};
`;


export default class ModalHeader extends React.Component {
  componentDidMount() {
    if(process.env.BROWSER) {
      document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    }
  }
  componentWillUnmount() {
    if(process.env.BROWSER) {
      document.getElementsByTagName('body')[0].style.overflow = 'auto';
    }
  }
  render(): React.Element<any> {
    const { title, buttonRight } = this.props;
    return(
     <ModalHeaderInner>
        <Header>
          <Container padded>
            <ModalHeaderWrapper>
              <ButtonMenu>
              {!buttonRight &&
                <CloseButton>
                  <Button iconTransparent medium>X</Button>
                </CloseButton>}
              </ButtonMenu>
              <CenterMenu>
                <ModalTitle>{title}</ModalTitle>
              </CenterMenu>
              <ButtonMenu>
               {buttonRight &&
                <CloseButton>
                  <Button iconTransparent medium>X</Button>
                </CloseButton>}
              </ButtonMenu>
            </ModalHeaderWrapper>
          </Container>
        </Header>
      </ModalHeaderInner>
    );
  }
}