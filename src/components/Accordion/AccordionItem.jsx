import { useAccordionContext } from "./Accordion"
import AccordionContent from "./AccordionContent"
import AccordionTitle from "./AccordionTitle"

export default function AccordionItem({ children, className}) {

  return(
    <>
      <li className={className}>
        {children}
      </li>
    </>
  )
}