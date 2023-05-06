import React, {ReactNode} from 'react';
import styled from "styled-components";
import {DownArrow, RightArrow} from "components/ArrowIcons";
import {useAccordion} from "components/accordion/Accordion";

interface Params {
  id?: string;
  title: string;
  children: ReactNode;
}

const AccordionContainer = styled.div`
  margin-bottom: 10px;
  border: var(--border-width) solid var(--border-color);
  margin-top: 10px !important;
`;

const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  //padding: 5px;
`;

const AccordionIcon = styled.div`
  margin-right: 20px;
`;

const AccordionTitle = styled.div`
`;

const AccordionContents = styled.div`
  margin-top: 20px;
  font-size: var(--font-size-caption);
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
    <AccordionContainer className="card card-contents">
      <AccordionHeader onClick={changeExpansionState}>
        <AccordionIcon>{isExpanded ? <DownArrow/> : <RightArrow/>}</AccordionIcon>
        <AccordionTitle>{title}</AccordionTitle>
      </AccordionHeader>
      {isExpanded ? <AccordionContents>{children}</AccordionContents> : <></>}
    </AccordionContainer>
  );
}

export default AccordionItem
