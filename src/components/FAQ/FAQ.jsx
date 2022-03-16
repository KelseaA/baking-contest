import { FAQList } from "./FAQList";
import Accordion from "../Accordion/Accordion";

import "./FAQ.scss";

const FAQ = () => {
  return (
    <section className="FAQ" id="faq">
      <h3>FAQ</h3>
      <div className="FAQ__list">
        {FAQList.map(({ question, answer }, index) => {
          return <Accordion key={index} title={question} content={answer} />;
        })}
      </div>
    </section>
  );
};

export default FAQ;
