'use client'
import React from 'react';
import { Plus } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


// AddNewButton Component
type AddNewButtonProps = {
  href: string;
  tooltipText: string;
};

export const AddNewButton = ({ href, tooltipText }: AddNewButtonProps) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={href}
          className="flex items-center gap-2 h-10  border border-gray-200  border-solid text-black px-4 py-2 rounded hover:bg-gray-300"
        >
          <Plus className="w-5 h-5 font-semibold" />
        </a>
      </TooltipTrigger>
      <TooltipContent>
        <span>{tooltipText}</span>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);
