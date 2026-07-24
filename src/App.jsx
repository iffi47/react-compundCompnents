import Accordion from "./components/Accordion/Accordion";
import AccordionItem from "./components/Accordion/AccordionItem";

function App() {
  return (
  <>
    <main>
      <section>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <AccordionItem id="id2" className="accordion-item" title="We got 20 years of experience">
            <article>
              <p>You can&apos;t go wrong with us.</p>
              <p>We are in the business of planning highly individualized vacation training for more than 20 years</p>
            </article>
          </AccordionItem>
          <AccordionItem id="id3" className="accordion-item" title="We are working locally!">
            <article>
              <p>You can be our local guide.</p>
              <p>We are in the business of planning highly individualized vacation training for more than 20 years</p>
            </article>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  </>
  );
}

export default App;
