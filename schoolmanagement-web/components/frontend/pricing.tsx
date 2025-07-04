"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = {
    monthly: {
      starter: 49,
      professional: 99,
      enterprise: 99
    },
    annual: {
      starter: 490,
      professional: 990,
      enterprise: 990
    }
  };

  const features = {
    starter: [
      "Up to 500 students",
      "Basic student management",
      "Attendance tracking",
      "Basic reporting",
      "Email support",
      "Mobile app access",
      "Basic academic management",
      "Parent portal"
    ],
    professional: [
      "Up to 2000 students",
      "Advanced student management",
      "Complete attendance system",
      "Advanced analytics",
      "24/7 priority support",
      "Staff management",
      "Financial management",
      "Examination portal",
      "Library management",
      "Transport management"
    ],
    enterprise: [
      "Unlimited students",
      "Custom modules",
      "White-label option",
      "API access",
      "Dedicated support manager",
      "Custom integrations",
      "On-premise deployment",
      "Data migration assistance",
      "Custom reporting",
      "Advanced security features"
    ]
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Choose the right plan for your school
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Scalable pricing that grows with your institution. All plans include core features with premium add-ons for larger schools.
          </p>
        </div>

        <div className="mx-auto mt-8 flex justify-center space-x-4">
          <Button
            variant={isAnnual ? "outline" : "default"}
            onClick={() => setIsAnnual(false)}
          >
            Monthly
          </Button>
          <Button
            variant={isAnnual ? "default" : "outline"}
            onClick={() => setIsAnnual(true)}
          >
            Annually (Save 20%)
          </Button>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {/* Starter Plan */}
          <div className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 shadow-lg">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Starter</h3>
              <p className="mt-4 text-sm text-gray-500">Perfect for small schools starting their digital journey</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  ${isAnnual ? plans.annual.starter : plans.monthly.starter}
                </span>
                <span className="text-sm font-semibold text-gray-600">/month</span>
              </p>
              <ul role="list" className="mt-8 space-y-3">
                {features.starter.map((feature) => (
                  <li key={feature} className="flex gap-x-3 text-sm text-gray-600">
                    <Check className="h-5 w-5 text-blue-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <Button className="mt-8 w-full">Start Free Trial</Button>
          </div>

          {/* Professional Plan */}
          <div className="flex flex-col justify-between rounded-3xl bg-blue-50 p-8 ring-1 ring-blue-900/10 shadow-lg">
            <div>
              <h3 className="text-xl font-semibold text-blue-900">Professional</h3>
              <p className="mt-4 text-sm text-blue-700">Ideal for growing schools with comprehensive needs</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-blue-900">
                  ${isAnnual ? plans.annual.professional : plans.monthly.professional}
                </span>
                <span className="text-sm font-semibold text-blue-700">/month</span>
              </p>
              <ul role="list" className="mt-8 space-y-3">
                {features.professional.map((feature) => (
                  <li key={feature} className="flex gap-x-3 text-sm text-blue-700">
                    <Check className="h-5 w-5 text-blue-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <Button className="mt-8 w-full bg-blue-600 hover:bg-blue-700">Start Free Trial</Button>
          </div>

          {/* Enterprise Plan */}
          <div className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 shadow-lg">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Enterprise</h3>
              <p className="mt-4 text-sm text-gray-500">Custom solutions for large educational institutions</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  ${isAnnual ? plans.annual.enterprise : plans.monthly.enterprise}
                </span>
                <span className="text-sm font-semibold text-gray-600">/month</span>
              </p>
              <ul role="list" className="mt-8 space-y-3">
                {features.enterprise.map((feature) => (
                  <li key={feature} className="flex gap-x-3 text-sm text-gray-600">
                    <Check className="h-5 w-5 text-blue-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <Button className="mt-8 w-full">Start Free Trial</Button>
          </div>
        </div>
      </div>
    </div>
  );
}