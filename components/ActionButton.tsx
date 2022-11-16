import * as React from 'react';
import {ReactNode} from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean
}

const Button = styled.button`
  background-color: ${props => props.theme.action};
  border: 1px solid ${props => props.theme.border};
  color: inherit;
  padding: 10px 20px;
  cursor: pointer;
`

const ActionButton = ({children, onClick, disabled}: Props) => (
  <Button onClick={onClick} disabled={disabled}>{children}</Button>
)

export default ActionButton
