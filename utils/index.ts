import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getItem = (key: string) => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key);
  }
  return "";
};

export const removeItem = (key: string) => {
  if (typeof window !== "undefined") {
    return localStorage.removeItem(key);
  }
  return "";
};

export const setItem = (key: string, value: any) => {
  if (typeof window !== "undefined") {
    return localStorage.setItem(key, value);
  }
  return "";
};

export const getHash = () => {
  if (typeof window !== "undefined") {
    return location.hash?.substring(1);
  }
  return "";
};

export const getPathname = () => {
  if (typeof window !== "undefined") {
    return location.pathname;
  }
  return "/";
};

export const reload = () => {
  if (typeof window !== "undefined") {
    location.reload();
  }
};

