'use client';
import React, { useEffect } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../ui/accordion';

export function MainPageAccordion() {
  const [accordionData, setAccordionData] = React.useState([]);

  useEffect(() => {
    fetch('/api/accordion')
      .then((res) => res.json())
      .then((data) => {
        setAccordionData(data.docs);
      });
  }, []);

  return (
    <Accordion type="single" collapsible>
      {accordionData.map(({ value, title, content }) => (
        <AccordionItem key={value} value={value}>
          <AccordionTrigger className="text-2xl text-sky-900">
            {title}
          </AccordionTrigger>
          <AccordionContent>{content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
