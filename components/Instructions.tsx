import React from 'react';
import Card from "@/components/card/Card";
import CardTitle from "@/components/card/CardTitle";
import CardContent from "@/components/card/CardContent";
import styled from "styled-components";

const InstructionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const OrderedList = styled.ol`
  margin-block-start: 0;
  margin-block-end: 0;
`;

const Instructions = () => {
  return (
    <InstructionContainer>
      <Card>
        <CardTitle>Steam Instructions</CardTitle>
        <CardContent>
          <OrderedList>
            <li>Click on the Choose File button</li>
            <li>Navigate to [steam install]/userdata/[steam_id]/1465360/remote</li>
            <li>Open the CompleteSave.cfg file</li>
            <li>After making changes, click the Save button and override the CompleteSave.cfg file</li>
          </OrderedList>
        </CardContent>
      </Card>
      <Card>
        <CardTitle>Other Platform Instructions (Epic, etc)</CardTitle>
        <CardContent>
          <OrderedList>
            <li>Click on the Choose File button</li>
            <li>Navigate to %USERPROFILE%\Documents\My Games\SnowRunner\base\storage\</li>
            <li>You will see a folder with a generated key like (i.e. 9544ed6c186247e1bfeb0df3f9d013a8). Open this folder.</li>
            <li>Open the CompleteSave.dat file</li>
            <li>After making changes, click the Save button and override the CompleteSave.dat file</li>
          </OrderedList>
        </CardContent>
      </Card>
    </InstructionContainer>
  );
}

export default Instructions
