import React from "react";
import Rating from "../ui/Rating";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { Button } from "../ui/button";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Review } from "@/types/review.types";
import { cn } from "@/lib/utils";

type ReviewCardProps = {
  blurEffect?: boolean;
  isBlurred?: boolean;
  isAction?: boolean;
  isDate?: boolean;
  data: Review;
  className?: string;
};

const ReviewCard = ({
  blurEffect = false,
  isBlurred = false,
  isAction = false,
  isDate = false,
  data,
  className,
}: ReviewCardProps) => {
  return (
    <div
      className={cn([
        "relative bg-white flex flex-col items-start aspect-auto border border-black/10 rounded-[20px] p-6 sm:px-8 sm:py-7 overflow-hidden",
        className,
      ])}
    >
      {/*
        Optimization: We pass boolean flags for blur effects instead of JSX elements
        to maintain referential equality in props, allowing React.memo to prevent unnecessary re-renders.
      */}
      {blurEffect && (
        <div
          className={cn([
            isBlurred && "backdrop-blur-[2px]",
            "absolute bg-white/10 right-0 top-0 h-full w-full z-10",
          ])}
        />
      )}
      <div className="w-full flex items-center justify-between mb-3 sm:mb-4">
        <Rating
          initialValue={data.rating}
          allowFraction
          SVGclassName="inline-block"
          size={23}
          readonly
        />
        {isAction && (
          <Button variant="ghost" size="icon">
            <IoEllipsisHorizontal className="text-black/40 text-2xl" />
          </Button>
        )}
      </div>
      <div className="flex items-center mb-2 sm:mb-3">
        <strong className="text-black sm:text-xl mr-1">{data.user}</strong>
        <IoIosCheckmarkCircle className="text-[#01AB31] text-xl sm:text-2xl" />
      </div>
      <p className="text-sm sm:text-base text-black/60">{data.content}</p>
      {isDate && (
        <p className="text-black/60 text-sm font-medium mt-4 sm:mt-6">
          Posted on {data.date}
        </p>
      )}
    </div>
  );
};

// Memoized to prevent re-renders when parent re-renders (e.g. carousel scroll)
// if the props (data, blur status) haven't changed.
export default React.memo(ReviewCard);
