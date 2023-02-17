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

const HeaderContainer = styled.div`
  display: flex;
  align-items: start;
  margin-bottom: 20px;
`;

const HeaderText = styled.h1`
  padding-left: 25px;
`;

const Header = ({hasData}: Params) => {
  return <><HeaderContainer>
    <img width="100" src="https://assets1.ignimgs.com/2020/04/23/snowrunner---button-fin-1587603559932.jpg?width=100"/>
    <HeaderText>Snowrunner Save Editor</HeaderText>
  </HeaderContainer>
  <Instructions hasData={hasData}/>
    </>
}

export default Header
