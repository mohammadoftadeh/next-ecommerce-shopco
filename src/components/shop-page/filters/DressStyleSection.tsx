import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

type DressStyle = {
  title: string;
  slug: string;
};

const dressStylesData: DressStyle[] = [
  {
    title: "Casual",
    slug: "/shop?style=casual",
  },
  {
    title: "Formal",
    slug: "/shop?style=formal",
  },
  {
    title: "Party",
    slug: "/shop?style=party",
  },
  {
    title: "Gym",
    slug: "/shop?style=gym",
  },
];

const DressStyleSection = () => {
  return (
    <Accordion type="single" collapsible defaultValue="filter-style">
      <AccordionItem value="filter-style" className="border-none">
        <AccordionTrigger className="text-black font-bold text-xl hover:no-underline p-0 py-0.5">
          Dress Style
        </AccordionTrigger>
        <AccordionContent className="pt-4 pb-0">
          <div className="flex flex-col text-black/60 space-y-0.5">
            {dressStylesData.map((dStyle, idx) => (
              <Link
                key={idx}
                href={dStyle.slug}
                className="flex items-center justify-between py-2"
              >
                {dStyle.title} <MdKeyboardArrowRight />
              </Link>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default DressStyleSection;
