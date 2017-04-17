import React, { Component } from 'react';
import styled from 'styled-components';


const ProjectIntroductionBackground = styled.div`
  background-color: #fff;
  width: 100%;
  padding-bottom: 3rem;
  overflow-x: hidden;
`;
const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  @media (min-width: 1080px) {
    width: 1080px;
    margin: 0 auto;
  }
`;

//introduction
const ProjectIntroduction = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

//projectOutline
const ProjectOutline = styled.div`
  order: 2;
  width: 100%;

  display: flex;
  align-items: center;

  padding-bottom: 1rem;

  @media (min-width:1080px) {
    padding-bottom: 0;
  }


  @media (min-width: 1080px) {
    order: 1;
    height: 300px;
    padding-bottom: 0;
  }
`;
const ProjectOutlineInner = styled.div`
  display: block;
  text-align: left;
  margin: 0;
  padding: 1rem;

  @media (min-width: 1080px) {
    text-align: center;
    margin: 0 auto;
  }
`;
const Category = styled.div`
  color: #757575;
  font-size: 0.9em;
`;
const ProjectTitle = styled.h1`
  font-size: 1.5rem;
  line-height: 1.5;
  padding: 0.5rem 0 1rem;
  margin: 0;

  @media (min-width: 1080px) {
    font-size: 2.5rem;
  }
`;

const Creators = styled.div`
  position: relative;
  display: inline-block;
`;

const CreatorProfileImage = styled.div`
  background-image: url(https://tumblbug-upi.imgix.net/48d20b1046be5e42ce74e1b992fc886f3e342df3.png?ixlib=rb-1.1.0&w=200&h=250&auto=format%2Ccompress&fit=facearea&facepad=2.0&ch=Save-Data&mask=ellipse&s=2bdc40e93e414edcaa88f983015d7772);
  background-position: 50% 38%;
  border-radius: 50%;
  background-size: cover;
  width: 20px;
  height: 20px;
  margin-right: 5px;
  float: left;
  margin-top: -2px;
`;

// ProjectCoverImage
const ProjectCoverImage = styled.div`
  width: 100%;
  height: auto;
  order: 1;
  margin: 0;

  @media (min-width: 1080px) {
    width: 650px;
    height: auto;
    order: 2;
  }
`;
const Img = styled.img`
  max-width: 100%;
  height: auto;
`;



// RightPart
const RightColumn = styled.div`
  width: 100%;
  order: 3;

  @media (min-width: 1080px) {
    width: 380px;
    order: 3;
    margin-left: 2rem;
  }

`;
// FundingStatus
const FundingStatus = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  padding-bottom: 1rem;

  @media (min-width:1080px) {
    padding-bottom: 0;
  }

  @media (min-width: 1080px) {
    display: block;
    height: 260px;
    margin: 0 0 2rem;
  }
`;

const Metric = styled.div`
  margin: 0 1rem;

  @media (min-width: 1080px) {
    margin: 0 0 26px;
  }
`;
const StatusTitle = styled.div`
  font-size: .8rem;
  margin-bottom: .5rem;
  @media (min-width: 1080px) {
    font-size: .9rem;
  }
`;
const StatusValue = styled.div`
  font-size: 1.2rem;
  font-weight: 200;
  @media (min-width: 1080px){
    font-size: 2.3rem;
  }
`;
const FundingRate = styled.span`
  font-size: 0.9rem;
  margin-left: 10px;
`;
const Small = styled.span`
  font-size: .9rem;
`;


const FundingInformation = styled.div`
  padding: 1rem;
  font-size: .9rem;
  color: rgba(0,0,0,.7);
  background-color: #f7f7f7;
  border-bottom: 1px solid #efefef;
  border-top: 1px solid #efefef;
  margin: 0;

  > div {
    font-weight: 700;
    line-height: 2;
  }

  > span {
    line-height: 1.5;
  }

  @media (min-width: 1080px) {
    margin: 0 0 1rem;
  }
`;

const ProjectButtons = styled.div`
  order: 5;
  background-color: #fa6462;
  padding: 1.5rem;
`;


const ProjectContentsNavigation = styled.div`
  background-color: #fff;
  width: 100%;
  height: 54px;
  position: relative;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.1);
`;
const NavigationList = styled.ul`
  float: left;
  line-height: 54px;

  > li {
    list-style: none;
    display: inline-block;
    margin-right: 20px;
    color: rgba(0,0,0,.4);

  }
`;

const Active = styled.li`
  color: black;
  font-weight: 700;
  border-bottom: 2px solid black;
`;

const ProjectContentsBackground = styled.div`
  background-color: #f2f2f2;
  width: 100%;
`;

const ProjectContents = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: .25rem;
`;
const ProjectContentsMainColumn = styled.div`
  order: 1;
  width: 100%;

  @media (min-width: 1080px) {
    width: 650px;
    margin: .5rem;
  }
`;

const ProjectContentsSubColumn = styled.div`
  order: 2;
  width: 100%;

  @media (min-width: 1080px) {
    width: 380px;
    margin: .5rem;
  }
`;

const StoryCard = styled.div`
  width: 100%;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
  background-color: #fff;
  word-break: keep-all;

  > div {
    padding: 2rem;
    line-height: 1.7;
    font-size: 0.9rem;
  }

  @media (min-width: 1080px) {
    > div {
      padding: 3rem;
      font-size: 1rem;
    }
  }
`;

const CreatorCard = styled.div`
  margin-top: .5rem;
  width: 100%;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
  background-color: #fff;

  @media (min-width: 1080px) {
    margin-top: 0;
  }
`;
const CreatorCardInner = styled.div`
  padding: .2rem 2rem 1rem;
  @media (min-width: 1080px) {
    padding: .2rem 2rem 1rem;
  }
`;

const CreatorProfile = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
`;
const ProfileImage = styled.div`
  background-image: url(https://tumblbug-upi.imgix.net/48d20b1046be5e42ce74e1b992fc886f3e342df3.png?ixlib=rb-1.1.0&w=200&h=250&auto=format%2Ccompress&fit=facearea&facepad=2.0&ch=Save-Data&mask=ellipse&s=2bdc40e93e414edcaa88f983015d7772);
  background-position: 50% 38%;
  border-radius: 50%;
  background-size: cover;
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;
const CreatorBiography = styled.div`
  font-size: 0.9rem;
  color: rgba(0,0,0,.8);
  line-height: 1.7;
  padding: 1.2rem 0;
  border-bottom: 1px solid #efefef;
`;
const CreatorContactButton = styled.div`
  color: #757575;
  background-color: #f7f7f7;
  padding: 10px 20px;
  margin: 1rem 0 .5rem;
  border-radius: 4px;
  text-align: center;
  font-weight: 700;
  font-size: .9rem;
`;
const RewardCardWrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
  min-height: 800px;

  > span {
    color: #757575;
    font-size: 1rem;
  }
`;
const RewardCard = styled.div`
  margin-top: .5rem;
  width: 100%;
  height: 200px;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
  background-color: #fff;
`;

const FixedBottomPledgeButton = styled.div`
  display: block;
  width: 100%;
  color: #fff;
  padding: 20px 0;
  background-color: #fa6462;
  text-align: center;


  position: fixed;
  bottom: 0;

  @media (min-width: 1080px) {
    display: none;
  }
`;

class App extends Component {
  render() {
    return (
      <div>
        <ProjectIntroductionBackground>
          <Container>
            <ProjectIntroduction>
              <ProjectOutline>
                <ProjectOutlineInner>
                  <Category>일러스트레이션</Category>
                  <ProjectTitle>인천시에서 좋아할 인천 가이드 .뉴인천. 가이드 북 페스티벌
                  </ProjectTitle>
                  <Creators>
                    <CreatorProfileImage></CreatorProfileImage>
                    <span>MEAL'S PROJECT</span>
                  </Creators>
                </ProjectOutlineInner>
              </ProjectOutline>
              <ProjectCoverImage>
                <Img src="https://tumblbug-pci.imgix.net/15f011715a817d74815ffc600fc1964fda6732fe/ea8371d4f40176cb559819145a420a69be713854/cf7a7dba43df2ad09f8693416da9222e5b5c0fe3/45eb97d32ba8d1c95839763bf7e525ff9dbe0f84.jpg?ixlib=rb-1.1.0&w=620&h=465&auto=format%2Ccompress&lossless=true&fit=crop&s=5e337fe597816ae98c76c57e93955a26" alt=""/>
              </ProjectCoverImage>
              <RightColumn>
                <FundingStatus>
                  <Metric>
                    <StatusTitle>모인금액</StatusTitle>
                    <StatusValue>200,000,000<Small>원</Small><FundingRate>577%
                    </FundingRate></StatusValue>
                  </Metric>
                  <Metric>
                    <StatusTitle>남은시간</StatusTitle>
                    <StatusValue>10<Small>일</Small></StatusValue>
                  </Metric>
                  <Metric>
                    <StatusTitle>후원자</StatusTitle>
                    <StatusValue>9,300<Small>명</Small></StatusValue>
                  </Metric>
                </FundingStatus>
                <FundingInformation>
                  <div>펀딩진행중</div>
                  <span>목표금액인 1000만원 이상 모이면 결제됩니다. <br /> 결제는 4월 2일에 다같이 진행됩니다</span>
                </FundingInformation>
                <ProjectButtons>
                  <span>밀어주기</span><span>공유하기</span>
                </ProjectButtons>
              </RightColumn>
            </ProjectIntroduction>
          </Container>
        </ProjectIntroductionBackground>
        <ProjectContentsNavigation>
          <Container>
            <NavigationList>
              <li><Active>스토리</Active></li>
              <li>커뮤니티</li>
              <li>FAQ</li>
            </NavigationList>
          </Container>
        </ProjectContentsNavigation>
        <ProjectContentsBackground>
          <Container>
            <ProjectContents>
              <ProjectContentsMainColumn>
                <StoryCard>
                  <div>프로젝트 개요 버드힐링모빌은 무게추 원리에 의해서 손잡이를 당기면 날개짓을 하는 반자동 DIY 새모빌입니다. 날개짓의 움직임이 실제 새가 나는 것처럼 너무나 자연스러워 잔잔한 감동을 느끼고 마음을 힐링할 수 있는 기특한 새모빌입니다. 버드힐링모빌은 2016년에 처음 출시된 브랜드이기도 한데요. 오프라인 행사장과 매장에서 날개짓을 직접 보신 분들의 반응이 매우 뜨거웠던 상품이었습니다. 그러나 그 날개짓을 직접 보기 어려운 온라인에서는 홍보 부족과 맞물려 고전을 하기도 했습니다.게다가 초기 제품은 개발일정 때문에 급하게 제작된 관계로 제품의 완성도와 티테일 부분에서 작은 문제점이 드러나기도 했습니다.</div>
                </StoryCard>
              </ProjectContentsMainColumn>
              <ProjectContentsSubColumn>
                <CreatorCard>
                  <CreatorCardInner>
                    <h5>창작자 소개</h5>
                    <CreatorProfile>
                      <ProfileImage />
                      배성태 (GrimB)
                    </CreatorProfile>
                    <CreatorBiography>
                      허술한 길고양이 집사 겸 찍사입니다. 우리의 이웃이지만 오래된 편견과 단단한 오해 속에서 참혹하게 살고 있는 이 땅의 길고양이의 삶을 제대로 알리기 위해 노력 중입니다. 길고양이 집사로써 그들의 삶을 기록하고 전시 하고 강의를 하고 있습니다.
                    </CreatorBiography>
                    <CreatorContactButton>창작자에게 문의하기
                    </CreatorContactButton>
                  </CreatorCardInner>
                </CreatorCard>
                <RewardCardWrapper>
                  <span>선택할 수 있는 12개의 선물이 있습니다</span>
                  <RewardCard />
                  <RewardCard />
                  <RewardCard />
                </RewardCardWrapper>
              </ProjectContentsSubColumn>
            </ProjectContents>
          </Container>
        </ProjectContentsBackground>
        <FixedBottomPledgeButton>프로젝트 밀어주기</FixedBottomPledgeButton>
      </div>
    );
  }
}

export default App;
