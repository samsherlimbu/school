import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";

const DashboardPreview = () => {
  return (
    <div className="bg-white py-20 sm:py-32">
      <div className="max-w-6xl mx-auto">
        <Card className="w-full ">
          <CardContent className=" mt-4">
            <Image
              src="/images/dashboard.avif"
              alt="Dashboard"
              width={2016}
              height={1210}
              className="w-full rounded-lg shadow-lg"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPreview;
