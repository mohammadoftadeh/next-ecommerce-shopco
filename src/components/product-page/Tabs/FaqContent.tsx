import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqItem = {
  question: string;
  answer: string;
};

const faqsData: FaqItem[] = [
  {
    question: "What is the material of the t-shirt?",
    answer:
      "Provide details about the fabric type (e.g., cotton, polyester, blend), weight, and any specific features.",
  },
  {
    question: "What are the care instructions for the t-shirt?",
    answer:
      "Outline recommended washing, drying, and ironing methods to maintain quality and longevity.",
  },
  {
    question: "What is the design or print on the t-shirt made of?",
    answer:
      "Explain the material used for the design (e.g., vinyl, screen print, embroidery) and its durability.",
  },
  {
    question: "Is the t-shirt unisex or designed for specific genders?",
    answer:
      "Indicate whether the shirt is suitable for both men and women or targeted towards a particular gender.",
  },
  {
    question: "What are the shipping options and costs?",
    answer:
      "Provide information about shipping methods, estimated delivery times, and associated fees.",
  },
  {
    question: "What is the return policy for the t-shirt?",
    answer:
      "Outline the return window, conditions, and refund or exchange procedures.",
  },
];

const FaqContent = () => {
  return (
    <section>
      <h3 className="text-xl sm:text-2xl font-bold text-black mb-5 sm:mb-6">
        Frequently asked questions
      </h3>
      <Accordion type="single" collapsible>
        {faqsData.map((faq, idx) => (
          <AccordionItem key={idx} value={`item-${idx + 1}`}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FaqContent;
