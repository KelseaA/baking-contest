import { useState } from "react";

import { ReactComponent as ArrowDown } from "../../images/arrow-down.svg";

import "./Accordion.scss";

const Accordion = ({ title = "", content = "" }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`Accordion ${isActive ? "Accordion--open" : ""}`}>
      <div className="Accordion__title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div className="Accordion__icon">
          <ArrowDown />
        </div>
      </div>
      <div className="Accordion__content">{content}</div>
    </div>
  );
};

export default Accordion;
