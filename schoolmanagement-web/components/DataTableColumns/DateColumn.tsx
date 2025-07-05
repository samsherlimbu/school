'use client';

import { getNormalDate } from "@/lib/getNormalDate";
import React from "react";

const getPastDays = (isoString: string): number => {
  const createdDate = new Date(isoString);
  const currentDate = new Date();

  createdDate.setHours(0, 0, 0, 0);
  currentDate.setHours(0, 0, 0, 0);

  const diffTime = currentDate.getTime() - createdDate.getTime();
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
};

function timeAgo(createdAt: string): string {
  const createdDate = new Date(createdAt);
  const now = new Date();

  const seconds = Math.floor((now.getTime() - createdDate.getTime()) / 1000);

  if (seconds < 60) return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hour${hours !== 1 ? "s" : ""} ago`;

  return "More than a day ago";
}

type DateColumnProps = {
  row: any;
  accessorKey: string;
};

export default function DateColumn({ row, accessorKey }: DateColumnProps) {
  const createdAt = row.getValue(accessorKey);

  if (!createdAt) return <div>Invalid date</div>;

  const date = getNormalDate(createdAt);
  const time = timeAgo(createdAt);
  const pastDays = getPastDays(createdAt);

  return <div suppressHydrationWarning>{pastDays > 10 ? date : time}</div>;
}
