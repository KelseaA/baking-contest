import { FAQList } from "./FAQList";

import "./FAQ.scss";

const FAQ = () => {
  return (
    <section className="FAQ">
      <h3>FAQ</h3>
      <div className="FAQ__list">
        {FAQList.map((item) => {
          return (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <div>{item.answer}</div>
            </details>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
