"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import AnimateOnScroll from "./animate-on-scroll";

interface FAQItem {
  question: string;
  answer: string | string[];
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const answerArray = Array.isArray(item.answer) ? item.answer : [item.answer];

        return (
          <AnimateOnScroll
            key={index}
            animation="fadeInUp"
            delay={index * 50}
          >
            <div className="rounded-xl border border-[#e8e8e8] bg-white overflow-hidden transition-all duration-300 hover:shadow-md sm:rounded-2xl">
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between gap-4 px-4 py-4 text-left sm:px-6 sm:py-5"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                aria-label={`${item.question} - ${isOpen ? "ซ่อนคำตอบ" : "แสดงคำตอบ"}`}
              >
                <h3 id={`faq-question-${index}`} className="flex-1 text-sm font-bold leading-5 text-[#1a1c1c] sm:text-base sm:leading-6 lg:text-lg">
                  {item.question}
                </h3>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-[#52525b] transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 pb-4 sm:px-6 sm:pb-5">
                  <div className="flex flex-col gap-2 text-sm leading-6 text-[#52525b] sm:text-base sm:leading-7">
                    {answerArray.map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        );
      })}
    </div>
  );
}
