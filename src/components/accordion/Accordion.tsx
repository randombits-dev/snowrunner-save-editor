import React, {createContext, ReactNode, useContext, useState} from 'react';

interface Params {
  onlyOneOpen?: boolean;
  initialOpen?: string[];
  children: ReactNode[];
}

interface IAccordionContext {
  toggle: (id: string) => void;
  isOpen: (id: string) => boolean;
}

const AccordionContext = createContext<IAccordionContext>({
  isOpen: null,
  toggle: null
});

export const useAccordion = () => useContext(AccordionContext);

const Accordion = ({onlyOneOpen, children, initialOpen}: Params) => {
  const [expanded, setExpanded] = useState<Set<string>>(new Set(initialOpen || []));

  const isOpen = (id: string) => {
    return expanded.has(id);
  };

  const toggle = (id: string) => {
    if (expanded.has(id)) {
      expanded.delete(id);
      setExpanded(new Set(expanded));
    } else {
      if (onlyOneOpen) {
        setExpanded(new Set([id]));
      } else {
        setExpanded(new Set(expanded.add(id)));
      }
    }
  };

  return (
    <AccordionContext.Provider value={{toggle, isOpen}}>
      {children}
    </AccordionContext.Provider>
  );
}

export default Accordion
