import { createContext, useContext } from "react";
import AccordionContent from "./AccordionContent";
import AccordionTitle from "./AccordionTitle";

const AccordItemContext = createContext();

export function useAccordionItemContext() {
  const ctx = useContext(AccordItemContext);
  if (!ctx) {
    throw new Error("AccordionItem-related components must be wrapped by <Accordion.Item></Accordion.Item>")
  }
  return ctx;
}
export default function AccordionItem({ children, className}) {

  return(
    <>
      <AccordionItemContext.Provider className={className}>
        {children}
      </AccordionItemContext.Provider>
    </>
  )
}