import { cn } from '@/lib/utils';
import { GraduationCap } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function Logo({
  variant = "light",
  size = "md",
}: {
  variant?: "dark" | "light"; // Choose between 'light' and 'dark' variant of logo
  size?: "sm" | "md" | "lg"; // Sizes can be 'sm', 'md', or 'lg'
}) {
  if (variant === "light") {
    return (
      <Link href={"/"} className="flex items-center space-x-2">
        <div className="bg-blue-500 rounded-full p-1">
          <span
          className="font-bold text-xl text-white"
           >
            <GraduationCap className={cn('w-6 h-6',size === "lg" && "w-11 h-11" )}/>
          </span>
        </div>
        <span className={cn(" font-bold text-xl",size === "lg" && "text-4xl")}>
          Amarpur <span className="text-blue-500">School</span>
        </span>
      </Link>
    );
  }
}
