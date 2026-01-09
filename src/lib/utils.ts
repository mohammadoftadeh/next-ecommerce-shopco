import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const compareArrays = (a: any[], b: any[]) => {
  return a.toString() === b.toString();
};

export const calculateDiscountedPrice = (price: number, discount: { amount: number; percentage: number }) => {
  if (discount.percentage > 0) {
    return Math.round(price - (price * discount.percentage) / 100);
  }
  if (discount.amount > 0) {
    return price - discount.amount;
  }
  return price;
};
