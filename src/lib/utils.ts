import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shortenNumber(n: number): string {
  if (n < 1e3) {
    return n.toString();
  }
  if (n < 1e6) {
    return (n / 1e3).toFixed(1) + 'k';
  }
  return (n / 1e6).toFixed(1) + 'M';
}
