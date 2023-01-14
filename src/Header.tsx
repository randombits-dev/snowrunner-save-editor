import React from 'react';
import styled from "styled-components";

interface Params {
  hasData: boolean;
}

const InstructionsContainer = styled.div`

`;

const Instructions = ({hasData}: Params) => {
  if (hasData) {
    return <InstructionsContainer>
      <div>When finished, save the file, overwriting the <b>CompleteSave.cfg</b> you loaded.</div>
    </InstructionsContainer>
  } else {
    return (
      <InstructionsContainer>

        <div>Load the <b>CompleteSave.cfg</b> file:</div>
        <div>With <b>steam</b>, the file is located in <i>[steam install]/userdata/[steam_id]/1465360/remote.</i></div>
        <div>With <b>epic or other platforms</b>, navigate to <i>%USERPROFILE%\Documents\My Games\SnowRunner\base\storage</i>. You will see
          a
          folder with a generated key like <i>9544ed6c186247e1bfeb0df3f9d013a8</i>. The file is located in this folder.
        </div>
      </InstructionsContainer>
    );
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
