import React, { Component } from 'react';
import styled from 'styled-components';
import TumblbugLogo from './Styled/TumblbugLogo';
import Container from './Styled/Container';
import Header from './Styled/Header';


/* Style */
const SiteHeaderMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LeftMenu = styled.div`
  flex: 1 0 0;
  text-align: center;
  display: flex;
`;
const CenterMenu = styled.div`
  flex: 0 0 0;
  padding: 0 1rem;
  cursor: pointer;

  &:hover > div {
    fill: #757575;
  }
`;
const RightMenu = styled.div`
  flex: 1 0 0;
  text-align: right;
`;

// LinkItem
const LinkItem = styled.div`
  color: black;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  line-height: 58px;
  padding: 0 1rem;

  > i {
    font-size: 1.25em;
  }

  @media (min-width: 1080px) {
    line-height: 65px;

    > i {
      font-size: 1em;
      margin-right: .5em;
    }
  }

  &:hover {
    color: #757575;
  }
`;

const LinkItemImage = styled(LinkItem)`
  display: inline-flex;
  align-items: center;
`;

const ItemLabel = styled.span`
  @media (max-width: 1079px) {
    display: none;
  }
`;
// UserProfile
const UserProfileImage = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  display: inline-block;
  background-image: ${props => `url(${props.url})`};
  background-size: cover;
  background-position: 50% 38%;
  position: relative;
  margin: .5rem 0 .5rem .75rem;

  @media (min-width: 1080px) {
    height: 28px;
    width: 28px;
  }
`;
const SiteHeaderAlert = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid #ffffff;
  background-color: #fa6462;
  position: absolute;
  right: 0;
  bottom: 0;

  @media (min-width: 1080px) {
  width: 12px;
  height: 12px;
  }
`;

export default class SiteHeader extends React.Component {
  render(): React.Element<any> {
    return (
      <Header>
        <Container>
          <SiteHeaderMenu>
            <LeftMenu>
              <LinkItem>
                = &ensp;
                <ItemLabel>프로젝트 둘러보기</ItemLabel>
              </LinkItem>
              <LinkItem>
                <ItemLabel>프로젝트 올리기</ItemLabel>
              </LinkItem>
            </LeftMenu>
            <CenterMenu>
              <TumblbugLogo />
            </CenterMenu>
            <RightMenu>
              <LinkItemImage>
                <ItemLabel>사용자 이름</ItemLabel>
                <UserProfileImage url="https://tumblbug-assets.imgix.net/assets/user-account.png?s=08b1f9ecf24209994ac9b81900936c0e">
                  <SiteHeaderAlert />
                </UserProfileImage>
              </LinkItemImage>
            </RightMenu>
          </SiteHeaderMenu>
        </Container>
      </Header>
    );
  }
}