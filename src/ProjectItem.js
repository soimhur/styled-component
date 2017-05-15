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
  cursor: pointer;

  display: flex;
  flex-direction: row;
  width: 100%;

  min-height: 105px;
  height: auto;

  padding-bottom: .75rem;
  border-bottom: 1px solid rgba(0,0,0,.05);

  ${SmallMobileBreakPoint} {
    min-height: 90px;
    height: auto;
  }
  ${DesktopBreakPoint} {
    min-height: 300px;
    height: auto;

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
  min-height: 90px;
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
  margin-top: 0;

  ${DesktopBreakPoint} {
    margin-top: .5rem;
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

// const ProjectItemWrapper = styled.a`
//   display: flex;
//   flex-direction: row;
//   width: 100%;
//   min-height: 105px;
//   height: auto;
//   cursor: pointer;
//   padding-bottom: .75rem;
//   border-bottom: 1px solid rgba(0,0,0,.05);

//   ${SmallMobileBreakPoint} {
//     min-height: 90px;
//     height: auto;
//   }
//   ${DesktopBreakPoint} {
//     flex-direction: column;
//     min-height: 300px;
//     height: auto;
//     padding-bottom: 0;
//     border-bottom: none;

//       &:hover > div {
//         opacity: .7;
//       }
//     }
// `;
// const ProjectItemInner = styled.div`
//   width: 100%;
//   display: flex;
//   ${DesktopBreakPoint} {
//     display: block;
//   }
// `;
// const ProjectCoverimageWrapper = styled.div`
//   width: 30%;
//   margin-right: 1rem;
//   align-self: flex-start;

//   ${DesktopBreakPoint} {
//     width: 100%;
//     margin-right: 0;
//   }
// `;
// const ProjectTextWrapper = styled.div`
//   width: 70%;
//   margin-top: -.5rem;
//   font-size: .9rem;
//   line-height: 1.6;

//   ${DesktopBreakPoint} {
//     width: 100%;
//     margin-top: .5rem;
//   }
// `;
// const ProjectCoverimage = styled.img`
//   width: 100%;
//   height: auto;
// `;
// const ProjectTitle = styled.h1`
//   font-size: 1.1rem;
//   font-weight: normal;
//   margin-bottom: .75rem;
//   line-height: 1.5;
//   word-break: keep-all;

//   ${DesktopBreakPoint} {
//     word-spacing: -1px;
//     padding-right: .5rem;
//   }
//   ${SmallMobileBreakPoint} {
//     font-size: 1rem;
//     line-height: 1.4;
//     word-break: break-all;
//     margin-bottom: .5rem;
//   }
// `;
// const FundingRate = styled.span`
//   margin-left: 0.5rem;
//   color: #fa6462;
// `;

class ProjectItem extends Component {
  render() {
    const { longTitle } = this.props;
    return(
      <ProjectItemWrapper longTitle={longTitle}>
        <ProjectCoverimage src={"https://tumblbug-pci.imgix.net/15f011715a817d74815ffc600fc1964fda6732fe/ea8371d4f40176cb559819145a420a69be713854/cf7a7dba43df2ad09f8693416da9222e5b5c0fe3/45eb97d32ba8d1c95839763bf7e525ff9dbe0f84.jpg?ixlib=rb-1.1.0&w=620&h=465&auto=format%2Ccompress&lossless=true&fit=crop&s=5e337fe597816ae98c76c57e93955a26"} />
        <ProjectTextWrapper>
          <ProjectTitle>
          {longTitle ?
            '프랑스 농부의 식탁, 작은 알자스로 초대합니다. 우하하하 하하하하 하하하하'
            :
            '길고양이사진전 <너는나다>'
          }
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