"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IoMdCheckmark } from "react-icons/io";
import { cn } from "@/lib/utils";

const ColorsSection = () => {
  const [selected, setSelected] = useState<string>("bg-green-600");

  return (
    <Accordion type="single" collapsible defaultValue="filter-colors">
      <AccordionItem value="filter-colors" className="border-none">
        <AccordionTrigger className="text-black font-bold text-xl hover:no-underline p-0 py-0.5">
          Colors
        </AccordionTrigger>
        <AccordionContent className="pt-4 pb-0">
          <div className="flex space-2.5 flex-wrap md:grid grid-cols-5 gap-2.5">
            {[
              "bg-green-600",
              "bg-red-600",
              "bg-yellow-300",
              "bg-orange-600",
              "bg-cyan-400",
              "bg-blue-600",
              "bg-purple-600",
              "bg-pink-600",
              "bg-white",
              "bg-black",
            ].map((color, index) => (
              <button
                key={index}
                type="button"
                className={cn([
                  color,
                  "rounded-full w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center border border-black/20",
                ])}
                onClick={() => setSelected(color)}
              >
                {selected === color && (
                  <IoMdCheckmark className="text-base text-white" />
                )}
              </button>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ColorsSection;
