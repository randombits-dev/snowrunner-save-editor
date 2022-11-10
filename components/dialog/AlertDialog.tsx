import React from 'react';
import ActionButton from "../ActionButton";
import styled from "styled-components";
import {useDialog} from "../../providers/DialogProvider";

const ButtonBar = styled.div`
  display: flex;
`;

const AlertDialog = ({text}) => {
  const {closeDialog} = useDialog();
  const onOK = () => {
    closeDialog();
  };

  return (
    <>
      <div>{text}</div>
      <ButtonBar>
        <ActionButton onClick={onOK}>OK</ActionButton>
      </ButtonBar>
    </>
  );
}

export default AlertDialog;
