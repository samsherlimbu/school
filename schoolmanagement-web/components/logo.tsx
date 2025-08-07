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

  const logoSrc =
    school?.logo && school.logo.trim() !== ""
      ? school.logo
      : "/images/logo.png";

  const logoAlt = school?.name ?? "Amarpur School Logo";

  const iconSize = cn("w-6 h-6", size === "lg" && "w-11 h-11");

  if (variant === "light") {
    return (
      <Link href="/" className="flex items-center space-x-2">
        <div className="bg-blue-500 rounded-full p-1 md:hidden">
          <span className="font-bold text-xl text-white">
            <GraduationCap className={iconSize} />
          </span>
        </div>
        <Image
          src={logoSrc}
          alt={logoAlt}
          width={500}
          height={150}
          className="w-44"
        />
      </Link>
    );
  } else {
    return (
      <Link href="/" className="flex items-center space-x-2">
        <div className="bg-blue-500 rounded-full p-1">
          <span className="font-bold text-xl text-white md:hidden">
            <GraduationCap className={iconSize} />
          </span>
        </div>
        <Image
          src={logoSrc}
          alt={logoAlt}
          width={500}
          height={150}
          className="w-44"
        />
      </Link>
    );
  }
}
