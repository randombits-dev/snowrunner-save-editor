import * as React from 'react';
import {ReactNode} from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean
}

const Button = styled.button`

`

const ActionButton = ({children, onClick, disabled}: Props) => (
  <Button className="button" onClick={onClick} disabled={disabled}>{children}</Button>
)

export default ActionButton
