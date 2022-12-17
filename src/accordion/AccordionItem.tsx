import React, {ReactNode} from 'react';
import styled from "styled-components";
import {DownArrow, RightArrow} from "ArrowIcons";
import {useAccordion} from "accordion/Accordion";

interface Params {
  id?: string;
  title: string;
  children: ReactNode;
}

const AccordionContainer = styled.div`
  margin-bottom: 10px;
  border: 1px solid ${props => props.theme.border};
`;

const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: #ddd;
  padding: 5px;
`;

const AccordionIcon = styled.div`
  margin-right: 20px;
`;

const AccordionTitle = styled.div`
  font-size: 18px;
`;

const AccordionContents = styled.div`
  padding: 10px;
  font-size: 14px;
`;

const AccordionItem = ({id, title, children}: Params) => {
  const {isOpen, toggle} = useAccordion();

  // const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const changeExpansionState = () => {
    // setIsExpanded(!isExpanded);
    toggle(id);
  };

  const isExpanded = isOpen(id);

  return (
    <AccordionContainer>
      <AccordionHeader onClick={changeExpansionState}>
        <AccordionIcon>{isExpanded ? <DownArrow/> : <RightArrow/>}</AccordionIcon>
        <AccordionTitle>{title}</AccordionTitle>
      </AccordionHeader>
      {isExpanded ? <AccordionContents>{children}</AccordionContents> : <></>}
    </AccordionContainer>
  );
}

export default AccordionItem
