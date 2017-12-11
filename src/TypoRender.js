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
        <br /><br /><br />
        <Container>
        <div className="display">
          기꺼이 시작하는 옵티크;
        </div>
        <h1>

        </h1>
        </Container>
        <Article>
            <h2>옵티크의 발전 과정</h2>
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
        <Container>
          <h1>Because on-line search databases typically contain only abstracts, it is vital to write a complete but concise description of your work to entice potential readers into obtaining a copy of the full paper. This article describes how to write a good computer architecture abstract for both conference and journal papers. Writers should follow a checklist consisting of: motivation, problem statement, approach, results, and conclusions. Following this checklist should increase the chance of people taking the time to obtain and read your complete paper.</h1>
        </Container>
        <Article>
          <h1>The quick brown fox jumps over the lazy dog</h1>
          <p>출판사의 현업 마케터로서 고민되는 부분이 있다. 종이책을 팔아서 먹고사는 출판사에서 스테디오라는 플랫폼을 통해 뭘 보여 주고 뭘 얻을지에 관해서다. 가장 직접적으로는 발매 예정된 유유의 신간을 미리 볼 기회를 독자에게 드릴 수 있을 것이다. 최대 1/3의 분량까지 책을 미리 보여 드린다거나. 물론 신간이라 한정했지만, 내가 보지 않은 책은 모두 신간인 까닭에, 그간 주목받지 않았던 책이나 반대로 많은 관심을 받았던 책의 일부를 내용으로써 공유한다면, 웹에서의 적극적인 독서를 권장하는 모양을 갖출 것이다. 고민하기에 따라서, 오프라인 책방에서의 경험을 웹상으로 끌어올 가능성도 있지 않을까. 읽는 책과 보는 책, 넘기는 책의 경험이 다른데, 이것을 특별하게 구현할 방법에 관심이 있다. 저자와의 대화를 웹상으로 진행할 수 있다면 그 또한 신선할 것이다. 책을 읽는 재미를 주는 방법 중 효과적인 것이 낭독인데, 웹상으로 낭독 콘텐츠를 게시하는 것도 재밌을 것 같다. 기본적으로는 책을 팔아서 수익을 얻고 지속적인 출판을 이어 나가는 것이 목적인데, 정보 제공과 홍보가 주가 된다면 기존 출판사가 취했던 전략과 크게 다르지 않을 것 같다. 값진 콘텐츠가 무료로도 많이 제공되는 온라인 환경에서라면, 조금 더 독특한 차별점을 마련해야 한다. 독점적인 콘텐츠로 제공한다거나 멤버십의 가격과 구성을 잘 만든다거나 하는 실천적인 노하우를 오늘 이 자리에서 함께 나누어 보고 싶다. </p>
        </Article>
      </div>
    );
  }
}

export default TypoRender;
