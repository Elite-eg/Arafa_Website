"use client";

import { cn } from "@/lib/utils";

interface ProjectStatusProps {
  status: string;
  statusLabel: string;
  className?: string;
}

export default function ProjectStatus({
  status,
  statusLabel,
  className,
}: ProjectStatusProps) {
  const isActive = status === "Working";

  return (
    <span
      className={cn(
        "px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md border flex items-center gap-1.5",
        isActive
          ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
          : "bg-white/[0.08] text-white/70 border-white/[0.1]",
        className
      )}
    >
      {isActive && (
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-slow shrink-0" />
      )}
      <span>{statusLabel}</span>
    </span>
  );
}
