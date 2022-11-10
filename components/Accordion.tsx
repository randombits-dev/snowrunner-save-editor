import React, {ReactNode, useState} from 'react';
import styled from "styled-components";

interface Params {
  title: string;
  children: ReactNode;
}

const AccordionTitle = styled.h2`
  cursor: pointer;
`;

const Accordion = ({title, children}: Params) => {
  const [expanded, setExpanded] = useState<boolean>(true);

  const arrowStyle = expanded ? {display: 'inline-block', transform: 'rotate(90deg)'} : {};

  const changeExpansionState = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <AccordionTitle onClick={changeExpansionState}><span style={arrowStyle}>&gt;</span>{title}</AccordionTitle>
      {expanded ? children : <></>}
    </div>
  );
}

export default Accordion
