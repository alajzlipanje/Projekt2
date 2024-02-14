/**
 * Some utility functions used for shadcn components.
 * You can ignore this file.
 */

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
