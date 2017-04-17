import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from './Button';
import { truncate, media } from './style-utils';
import HedronTest from './HedronTest';

const theme = {
  tumblbugRed: 'red',
  mobileBreakpoint: '1000px',
};

const Container = styled.div`
  width: 800px;
  background-color: goldenrod;
  margin: auto;
  min-height: 100vh;

  ${media.mobile`
    width: 100vw;
  `}
`;

const CoverImage = styled.div`
  width: auto;
  min-height: 400px;
  min-width: 50%;
  background-color: red;
  order: 2;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2em;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    width: 100%;
    order: 1;
    margin: 0;
  }
`;

const ProjectTitle = styled.h1`
  order: 1;
  width: 100%;
  text-align: center;
  margin: .5em;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    order: 2;
    text-align: left;
  }
`;

const ProjectInfo = styled.div`
  margin: .5em;
  /* 프로젝트 인포는 데스크탑에서 제일 마지막으로 나와야 한다 */
  order: 3;
  width: 40%;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    width: 100%;
  }
`;

const ProjectIntroduction = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Metrics = styled.div`
  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
`;

const Metric = styled.div`
  margin: 0 0.5em;
  > h2 {
    font-size: 1.3em;
  }
`;

const BigMetric = styled(Metric)`
  > h2 {
    font-size: 1.8em;
  }
`;

const ProjectDescription = styled.div`
  ${truncate('300px')}
  color: #505050;
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <ProjectIntroduction>
            <ProjectTitle>
              프로젝트 타이틀
            </ProjectTitle>
            <CoverImage> 
              프로젝트 이미지
            </CoverImage>
            <ProjectInfo>
              <ProjectDescription>
                You could create a separate component for truncating, but in this case reusing the CSS might not be a bad idea! Instead of hardcoding those lines of code in every component you want to truncate though, you could write a function that does it for you. You could create a separate component for truncating, but in this case reusing the CSS might not be a bad idea! Instead of hardcoding those lines of code in every component you want to truncate though, you could write a function that does it for you.
              </ProjectDescription>
              <Metrics>
                <Metric><h2>모인 금액</h2> 22,161,500원</Metric>
                <BigMetric><h2>앞으로</h2> 16일</BigMetric>
                <Metric><h2>후원자</h2> 990명</Metric>
              </Metrics>
              <br />
              <Button primary>밀어주기</Button>
              <Button>공유하기</Button>
            </ProjectInfo>
          </ProjectIntroduction>
        <br />
        <HedronTest />
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
