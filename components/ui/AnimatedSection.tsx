"use client";

import { ReactNode } from "react";
import useScrollReveal from "@/lib/useScrollReveal";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export default function AnimatedSection({ children, className = "", id }: Props) {
  const ref = useScrollReveal();

  return (
    <section id={id} ref={ref} className={`section-pad ${className}`}>
      {children}
    </section>
  );
}
