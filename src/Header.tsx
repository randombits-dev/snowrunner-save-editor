import React from 'react';
import styled from "styled-components";
import Instructions1 from './instructions1.mdx';
import Instructions2 from './instructions2.mdx';

interface Params {
  hasData: boolean;
}

const Instructions = ({hasData}: Params) => {
  if (hasData) {
    return <Instructions2/>
  } else {
    return <Instructions1/>
  }
};

const Container = styled.div`
  overflow: hidden;
  //height: 150px;
`;

const HeaderText = styled.h1`
  padding-left: 25px;
  flex: 1 1 auto;
  display: inline-block;
`;

const Image = styled.img`
  //height: 100%;
  max-width: 300px;
  object-fit: cover;
  border-left: var(--border-width) solid var(--border-color);
  border-bottom: var(--border-width) solid var(--border-color);
  float: right;
  margin-left: 20px;
  margin-bottom: 20px;
`;

const Header = ({hasData}: Params) => {
  return <Container>
    <HeaderText>Snowrunner Save Editor</HeaderText>
    <Image src="/images/snowrunner.jpg"/>
    <div className="card-contents">
      <Instructions hasData={hasData}/>
    </div>
  </Container>
}

export default Header
