import React from 'react';
import ActionButton from "ActionButton";
import styled from "styled-components";

interface Params {
  text: string;
  action: () => void;
  cancel: () => void;
}

const ButtonBar = styled.div`
  display: flex;
`;

const ConfirmDialog = (params: Params) => {
  return (
    <>
      <div>{params.text}</div>
      <ButtonBar>
        <ActionButton onClick={params.action}>OK</ActionButton>
        <ActionButton onClick={params.cancel}>Cancel</ActionButton>
      </ButtonBar>
    </>
  );
}

export default ConfirmDialog
