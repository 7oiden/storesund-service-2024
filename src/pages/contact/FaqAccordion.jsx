import { faqData } from "../../constants/FaqData";
import { useState } from "react";
import Heading from "../../components/common/Heading";
import { MdQuestionAnswer } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
// import Heading from "../../components/common/Heading";

export default function FaqAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  function handleAccordionClick(index) {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  }

  console.log(activeIndex);

  return (
    <div className="faq-accordion">
      <div className="faq-accordion__content">
        <Heading size="3" cssClass="service-list__heading">
          <MdQuestionAnswer className="faq-accordion__heading-icon" /> Ofte stilte
          spørsmål
        </Heading>
        {faqData.map((faq, index) => (
          <div key={index} className="faq-accordion__item">
            <button
              className="faq-accordion__button"
              onClick={() => handleAccordionClick(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq${index}`}
              id={`faq${index}-button`}
            >
              {faq.question}
              {activeIndex === index ? (
                <FaMinus className="faq-accordion__icon" />
              ) : (
                <FaPlus className="faq-accordion__icon" />
              )}
            </button>
            <div
              className="faq-accordion__panel"
              role="region"
              aria-labelledby={`faq${index}-button`}
              id={`faq${index}`}
              hidden={activeIndex !== index}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
