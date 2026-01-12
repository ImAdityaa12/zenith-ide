"use client";

import { Button } from "@/components/ui/button";

const page = () => {
  const handleBackground = async () => {
    await fetch("/api/demo/background", {
      method: "POST",
    });
  };
  return (
    <div className="p-8 space-x-4">
      <Button onClick={handleBackground}>Blocking</Button>
    </div>
  );
};

export default page;
