'use client';
import { cn } from "@/lib/utils";
import useSchoolStore from "@/store/school";
import { GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo({
  variant = "light",
  size = "md",
}: {
  variant?: "dark" | "light"; // Choose between 'light' and 'dark' variant of logo
  size?: "sm" | "md" | "lg"; // Sizes can be 'sm', 'md', or 'lg'
}) {
  const { school } = useSchoolStore();
  if (variant === "light") {
    return (
      <Link href={"/"} className="flex items-center space-x-2">
        <div className="bg-blue-500 rounded-full p-1 md:hidden">
          <span className="font-bold text-xl text-white">
            <GraduationCap
              className={cn("w-6 h-6", size === "lg" && "w-11 h-11")}
            />
          </span>
        </div>
        <Image
          src={school?.logo ?? "/images/logo.png"}
          alt={school?.name ?? "Amarpur School Logo"}
          width={500}
          height={150}
          className="w-44"
        />
      </Link>
    );
  } else {
    <Link href={"/"} className="flex items-center space-x-2">
      <div className="bg-blue-500 rounded-full p-1">
        <span className="font-bold text-xl text-white md:hidden">
          <GraduationCap
            className={cn("w-6 h-6", size === "lg" && "w-11 h-11")}
          />
        </span>
      </div>
      <Image
        src={school?.logo ?? "/images/logo.png"}
        alt={school?.name ?? "Amarpur School Logo"}
        width={500}
        height={150}
        className="w-44"
      />
    </Link>;
  }
}
