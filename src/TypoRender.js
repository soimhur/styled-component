import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './Styled/Button';


const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  @media (min-width: 992px) {
    max-width: 960px;
  }
`;
const Form = styled.div``;
const Input = styled.input`
  background-color: #eaeaea;
  display: block;
  width: 100%;
  max-width: 100%;
  color: #777;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  height: 3rem;
  margin-bottom: 1em;
`;
const Label = styled.label`
  color: #777;
  font-size: 1rem;
`;


class TypoRender extends Component {
  render() {
    return (
      <div>
        <Container>
          <article>
            <h5>회원가입</h5>
            <h1>반갑습니다.</h1>
            <p>앞으로 luke@tumblbug.com계정과 함께할 비밀번호를 설정해주세요</p>
          </article>
          <Form>
            <Label>비밀번호</Label>
            <Input type="password" placeholder="비밀번호 6자리를 입력해주세요" />
            <Button primary fluid>가입 및 로그인</Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default TypoRender;
