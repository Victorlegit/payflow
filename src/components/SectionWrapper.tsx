import { ReactNode } from "react";
import { cn } from "../lib/utils";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export function SectionWrapper({ children, className, id, dark }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-24 sm:py-32",
        dark ? "bg-gray-900 text-white" : "bg-white",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
