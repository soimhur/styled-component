import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './Styled/Button';


// const DesktopBp = `
//   @media (min-width: 992px)
// `;

// const Container = styled.div`
//   width: 90%;
//   margin: 0 auto;
//   ${DesktopBp} {
//     max-width: 960px;
//   }
// `;
// const Form = styled.div``;
// const Box = styled.div`
//   width: 100%;
//   ${DesktopBp} {
//     max-width: 375px;
//     margin: 0 auto;
//     box-shadow: 0 3px 20px 5px rgba(0,0,0,0.05);
//   }
// `;
// const Input = styled.input`
//   background-color: #eaeaea;
//   display: block;
//   width: 100%;
//   max-width: 100%;
//   color: #777;
//   border: none;
//   border-radius: 8px;
//   font-size: 1rem;
//   height: 3rem;
//   margin-bottom: 1em;
// `;
// const Label = styled.label`
//   color: #777;
//   font-size: 1rem;
// `;

const Article = styled.article`
  margin: 0 auto;
  width: 95%;
  max-width: 560px;
`;
const Container = styled.div`
  margin: 0 auto;
  width: 95%;
`;

class TypoRender extends Component {
  render() {
    return (
      <div>
        <Container>
        <h1>
        2017년 10월 현재, 라틴은 70%, 
        한글은 예시문장이 진행되었습니다.
        한글 폰트를 완성하려면 최소 2천여 자를 
        개발해야 하므로 제작 기간이 오래 걸립니다.
        위 일정은 한 달에 적게는 300자에서 
        많게는 500자 이상을 그리는 숨 가쁜 일정입니다.
        후원금 목표액은 이 프로젝트를 하는 
        1년이 넘는 제작 기간 동안
        글꼴 개발에 집중하기 위한 최소한의 비용입니다. 
        사실 글꼴을 개발하는 긴 기간 동안 프리랜서 
        글꼴디자이너가 부업이 없이 살아남는 것은 
        어려운 일입니다. 
        텀블벅은 이러한 고민을 해결해줄 수 있는 
        좋은 방법입니다. The quick brown fox jumps over the lazy dog. 
        성공하게 되면 글꼴 디자이너는 
        글꼴 작업에 집중할 수 있게 되고, 
        구매자들은 좋은 질의 글꼴을 얻을 수 있다고 생각합니다.
        오랜 시간이 걸리는 여정이지만 
        커뮤니티를 통해서 최대한 소통하도록 노력하겠습니다.
        </h1>
        </Container>
        <Article>
            <h3>옵티크의 발전 과정</h3>
            <p>
            이 프로젝트는 네덜란드 헤이그 왕립미술학교
            (Koninklijke Academie van Beeldende Kunsten, 
            KABK)의 졸업전시 작품으로서 시작되었습니다. 
            이 학교의 석사 과정 타입 미디어(Type and Media)는 
            세계에서 명성이 높은 글꼴 디자인 코스 중 하나입니다. 
            그곳에서 저는 컴퓨터로 하는 디자인뿐만 아니라 
            브로드 닙(Broad Nib)과 포인티드 닙(Pointed Nib) 
            캘리그라피, 레터 카빙(Letter Carving), 
            그리고 파이썬 코딩(Python Coding) 등 
            다양한 매체를 통해 글꼴에 대해 공부할 수 있었습니다.
            </p>
            <p>
            «옵티크»는 수업 시간에 ‘붓과 펜’이라는 
            두 가지 쓰기 도구를 유지하면서도 
            한글과 라틴이라는 두 문자의 조화로운 인상을 
            만들어 낼 수 있을까라는 궁금증을 가지고 
            그것을 풀어가는 과정에서 나온 글꼴입니다. 
            </p>
            <p>글꼴을 시각적 크기에 따라 디자인하는 것은 
            라틴 문자에서는 이미 오래된 디자인 논점 중 하나입니다. 
            매튜 카터가 디자인한 밀러(Miller)는 
            디스플레이가 텍스트보다 풍부한 디테일을 보입니다. 
            더 거슬러 올라가 활자 시대의 글꼴은 더 좋은 예입니다. 
            우리가 흔히 아는 캐슬론(Caslon)의 오리지널 활자는 
            크기에 따라 전혀 다른 모습을 띠고 있습니다. 이에 따라 «옵티크»는 Regular를 
            본문용(Text)과 제목용(Display)로 나누어 
            대비(contrast)와 속공간을 다르게하여 
            크기 용도에 따라 최적화 된 글꼴을 만드는 것을 
            목표 삼았습니다.</p>
        </Article>
        <Article>
          <h3>The quick brown fox jumps over the lazy dog</h3>
          <p>글꼴을 시각적 크기에 따라 디자인하는 것은 
            라틴 문자에서는 이미 오래된 디자인 논점 중 하나입니다. 
            매튜 카터가 디자인한 밀러(Miller)는 
            디스플레이가 텍스트보다 풍부한 디테일을 보입니다. 
            더 거슬러 올라가 활자 시대의 글꼴은 더 좋은 예입니다.</p>
            
        </Article>
      </div>
    );
  }
}

export default TypoRender;
