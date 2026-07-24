import { createContext, useContext } from "react";
import AccordionContent from "./AccordionContent";
import AccordionTitle from "./AccordionTitle";

const AccordionItemContext = createContext();

export function useAccordionItemContext() {
  const ctx = useContext(AccordionItemContext);
  if (ctx === undefined) {
    throw new Error("AccordionItem-related components must be wrapped by <Accordion.Item></Accordion.Item>")
  }
  return ctx;
}

export default function AccordionItem({ children, className, id }) {
  return (
    <AccordionItemContext.Provider value={id}>
      <li className={className}>
        {children}
      </li>
    </AccordionItemContext.Provider>
  )
}