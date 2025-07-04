"use client";

import { useState } from "react";
import { CheckCircle, Info, X } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const bannerVariants = cva(
  "relative w-full p-4 rounded-lg flex items-center justify-between mb-3",
  {
    variants: {
      type: {
        info: "bg-blue-100 text-blue-800 border border-blue-200",
        success: "bg-green-100 text-green-800 border border-green-200",
        warning: "bg-orange-100 text-orange-800 border border-orange-200",
        danger: "bg-red-100 text-red-800 border border-red-200",
      },
    },
    defaultVariants: {
      type: "info",
    },
  }
);



interface DismissibleBannerProps extends VariantProps<typeof bannerVariants> {
  message: string;
  type?: "info" | "success" | "warning" | "danger";
}

export function InfoBanner({ message, type }: DismissibleBannerProps) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className={cn(bannerVariants({ type }))}>
      <div className="flex items-center space-x-3">
        {type === "info" ? (
          <Info className="h-5 w-5 flex-shrink-0" />
        ) : (
          <CheckCircle className="h-5 w-5 flex-shrink-0" />
        )}
        <p className="text-sm font-medium">{message}</p>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="text-current hover:text-opacity-75 transition-colors"
        aria-label="Dismiss"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
}
