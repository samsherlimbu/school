import ContactUs from "@/components/frontend/contact-us";
import SectionHeader from "@/components/frontend/section-header";
import Logo from "@/components/logo";
import React from "react";

export default function page() {
  return (
    <div className=" ">
      <div className="py-6 ">
        <div className="flex items-center justify-center pb-8">
          <Logo size="lg"/>
        </div>
        <SectionHeader
          title=""
          heading="Streamline Your School Operations"
          description="Transform your educational institution with our comprehensive school management system designed to enhance efficiency and improve learning outcomes."
        />
      </div>
      <ContactUs/>
    </div>
  );
}
