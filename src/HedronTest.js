import React from 'react';
import { Page, Row, Column } from 'hedron';
import styled from 'styled-components';

const Card = styled.div`
    background-color: white;
    height: 100px;
`;

const Collection = styled.div`
    background-color: blue;
    height: 150px;
`

export default () => {
  return (
    <Page>
      <Row debug>
        <Column sm={6} lg={3}>
          <Card />
        </Column>
        <Column sm={6} lg={3}>
          <Card />
        </Column>
        <Column sm={6} lg={3}>
          <Card />
        </Column>
        <Column sm={6} lg={3}>
          <Card />
        </Column>
      </Row>
      <Row>
        <Column sm={12} lg={6}>
          <Collection />
        </Column>
        <Column sm={12} lg={6}>
          <Collection />
        </Column>
      </Row>
    </Page>
  );
};
