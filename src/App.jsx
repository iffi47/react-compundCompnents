import Accordion from "./components/Accordion/Accordion";
import Place from "./components/Places/Places";
import SearchableList from "./components/SearchableList/SearchableList";
// import AccordionItem from "./components/Accordion/AccordionItem";
import PLACES from "./Places";

function App() {
  return (
    <>
      <main>
        <section>
          <h2>Why work with us?</h2>
          <Accordion className="accordion">
            <Accordion.Item id="id2" className="accordion-item" >
              <Accordion.Title className="accordion-item-title">
                We got 20 years of experience
              </Accordion.Title>
              <Accordion.Content className="accordion-item-content">
                <article>
                  <p>You can&apos;t go wrong with us.</p>
                  <p>We are in the business of planning highly individualized vacation training for more than 20 years</p>
                </article>
              </Accordion.Content>

            </Accordion.Item>
            <Accordion.Item id="id3" className="accordion-item">
              <Accordion.Title className="accordion-item-title" >
                We are working locally!
              </Accordion.Title>
              <Accordion.Content className="accordion-item-content">
                <article>
                  <p>You can be our local guide.</p>
                  <p>We are in the business of planning highly individualized vacation training for more than 20 years</p>
                </article>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion>
        </section>
        <section>
          <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
            {(item) => <Place item={item} />}
          </SearchableList>
          <SearchableList items={['items1', 'items2']} itemKeyFn={(item) => item}>
            {(item) => <Place item={item} />}
          </SearchableList>
        </section>
      </main>
    </>
  );
}

export default App;
