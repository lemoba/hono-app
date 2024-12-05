import { format } from "@std/datetime";

export const formatDate = (date: Date | string): string => {
  return format(new Date(date), "yyyy-MM-dd HH:mm:ss");
};
