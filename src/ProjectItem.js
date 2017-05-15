import React, { Component } from 'react';
import styled from 'styled-components';

/* style */
const DesktopBreakPoint = `
  @media (min-width: 1080px)
`;
const SmallMobileBreakPoint = `
  @media (max-width: 320px)
`;

// ProjectItem
const ProjectItemWrapper = styled.a`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 105px;
  height:auto !important;
  height: 105px;
  cursor: pointer;
  padding-bottom: .75rem;
  border-bottom: 1px solid rgba(0,0,0,.05);

  ${SmallMobileBreakPoint} {
    min-height: 90px;
    height:auto !important;
    height: 90px;
  }
  ${DesktopBreakPoint} {
  min-height: 300px;
  height:auto !important;
  height: 300px;
  max-width: 256px;
  flex-direction: column;
  padding-bottom: 0;
  border-bottom: none;

    &:hover > div {
      opacity: .7;
    }
  }
`;
const ProjectCoverimage = styled.img`
  min-width: 120px;
  max-height: 90px;
  margin-right: 1rem;

  ${SmallMobileBreakPoint} {
    min-width: 100px;
    max-height: 75px;
  }
  ${DesktopBreakPoint} {
    margin-right: 0;
    min-width: 256px;
    max-height: 192px;
  }
`;
const ProjectTextWrapper = styled.div`
  order: 2;
  color: black;
  font-size: .9rem;
  line-height: 1.6;

  ${DesktopBreakPoint} {
    margin-top: 1rem;
  }
`;
const ProjectTitle = styled.h1`
  font-size: 1.1rem;
  font-weight: normal;
  margin-bottom: .75rem;
  line-height: 1.5;
  word-break: keep-all;

  ${DesktopBreakPoint} {
    word-spacing: -1px;
    padding-right: .5rem;
  }
  ${SmallMobileBreakPoint} {
    font-size: 1rem;
    line-height: 1.4;
    word-break: break-all;
    margin-bottom: .5rem;
  }
`;
const FundingRate = styled.span`
  margin-left: 0.5rem;
  color: #fa6462;
`;

class ProjectItem extends Component {
  render() {
    return(
      <ProjectItemWrapper>
        <ProjectCoverimage src={"https://tumblbug-pci.imgix.net/790777632d3639a0070be90b67f40ff957ef78dd/5d170ad3a92235a27fd24118745af7affd07f6bd/01563475e7b7913be2d8384a056d1f15addaa671/468b4432c0fb6cd4dd56cd0f8221d885d3a61570.jpg?ixlib=rb-1.1.0&w=620&h=465&auto=format%2Ccompress&lossless=true&fit=crop&s=7a91bcef85b124b1b49fa6f928125302"} />
        <ProjectTextWrapper>
          <ProjectTitle>
            '읻다 시인선', 세상의 낯선 아름다움
          </ProjectTitle>
          <div>
            10명이 밀어주는 중
            <FundingRate>
              1002%
            </FundingRate>
          </div>
          <div>
            1일 남은 프로젝트
          </div>
        </ProjectTextWrapper>
      </ProjectItemWrapper>
    );
  }
}

export default ProjectItem;