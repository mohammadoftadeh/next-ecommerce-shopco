"use client";

import {
  Color,
  setColorSelection,
} from "@/lib/features/products/productsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import { RootState } from "@/lib/store";
import { cn } from "@/lib/utils";
import React from "react";
import { IoMdCheckmark } from "react-icons/io";

const colorsData: Color[] = [
  {
    name: "Brown",
    code: "bg-[#4F4631]",
  },
  {
    name: "Green",
    code: "bg-[#314F4A]",
  },
  {
    name: "Blue",
    code: "bg-[#31344F]",
  },
];

const ColorSelection = () => {
  const { colorSelection } = useAppSelector(
    (state: RootState) => state.products
  );
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col">
      <span className="text-sm sm:text-base text-black/60 mb-4">
        Select Colors
      </span>
      <div className="flex items-center flex-wrap space-x-3 sm:space-x-4">
        {colorsData.map((color, index) => (
          <button
            key={index}
            type="button"
            className={cn([
              color.code,
              "rounded-full w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center",
            ])}
            onClick={() => dispatch(setColorSelection(color))}
          >
            {colorSelection.name === color.name && (
              <IoMdCheckmark className="text-base text-white" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorSelection;
