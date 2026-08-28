"use client";

import { useEffect, useState } from "react";
import { PlatformDashboard } from "@/components/platform-dashboard";
import { WorkflowVisualization } from "@/components/workflow-visualization";

export function ClientSections() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-[400px]" aria-hidden />;
  }

  return (
    <>
      <PlatformDashboard />
      <WorkflowVisualization />
    </>
  );
}
