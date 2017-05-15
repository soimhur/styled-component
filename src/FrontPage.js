import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './Styled/Button';
import Container from './Styled/Container';
import ProjectItem from './ProjectItem';

/* style */
const Div = styled.div`
  width: 100vw;
  height: 100vh;
`;

const CarouselHeader = styled.div`
  margin: 0 -.75rem .5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CarouselTitle = styled.span`
  color: black;
  font-weight: bold;
  font-size: 1.1rem;
  padding-left: .5rem;

  ${props => props.link ?
    `cursor: pointer;
    &:hover {
      color: black;
    }` : ''}
`;
const CarouselButtons = styled.div`
  float: right;
  text-align: right;
`;
const CarouselContents = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 1080px) {
    flex-direction: row;
    width: 100%;
  }
`;
const Column = styled.div`
  width: 100%;
  margin: .5rem;

  @media (min-width: 1080px) {
    flex: 1 0 20%;
  }
`;


class FrontPage extends Component {
  render() {
    return (
      <Div>
        <Container>
          <CarouselHeader>
            <CarouselTitle>
              기획전
            </CarouselTitle>
            <CarouselButtons>
              <Button iconTransparent> ❮ </Button>
              <Button iconTransparent> ❯ </Button>
            </CarouselButtons>
          </CarouselHeader>
          <CarouselContents>
            <Column>
              <ProjectItem longTitle />
            </Column>
            <Column>
              <ProjectItem longTitle />
            </Column>
            <Column>
              <ProjectItem />
            </Column>
            <Column>
              <ProjectItem />
            </Column>
          </CarouselContents>
        </Container>
      </Div>
    );
  }
}

export default FrontPage;