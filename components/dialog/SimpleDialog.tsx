import React, {ReactNode} from 'react';
import styled from "styled-components";
import {createPortal} from "react-dom";
import {MyTheme} from "../../providers/MultiThemeProvider";

interface Params {
  children?: ReactNode;
  open?: boolean;
}

const DialogBackground = styled.div<{ theme: MyTheme }>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
`

const DialogContainer = styled.div<{ theme: MyTheme }>`
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  max-width: 300px;
  background-color: ${props => props.theme.background};
  padding: 50px;
`

const SimpleDialog = ({children, open}: Params) => {
  if (open) {
    return createPortal(
      <DialogBackground>
        <DialogContainer>
          {children}
        </DialogContainer>
      </DialogBackground>,
      document.body
    );
  }
}

export default SimpleDialog
