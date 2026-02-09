"use client";

import { Container } from "@/components/ui";
import Image from "next/image";

const investors = [
  {
    name: "Valar Ventures",
    logo: "/images/investors/valar-ventures.png",
    width: 160,
    height: 84,
  },
  {
    name: "CRV",
    logo: "/images/investors/crv.svg",
    width: 44,
    height: 44,
  },
  {
    name: "Nine Four Ventures",
    logo: "/images/investors/nine-four-ventures.png",
    width: 160,
    height: 35,
  },
  {
    name: "Wischoff Ventures",
    logo: "/images/investors/wischoff-ventures.svg",
    width: 150,
    height: 46,
  },
  {
    name: "Forum Ventures",
    logo: "/images/investors/forum-ventures.png",
    width: 140,
    height: 79,
    invert: true,
  },
];

export function InvestorLogosSection() {
  return (
    <section className="py-12 lg:py-16 bg-background-secondary">
      <Container size="wide">
        <p className="text-center text-sm text-foreground-muted mb-8">
          Backed by leading investors in AI, fintech, and software.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-14">
          {investors.map((investor) => (
            <div
              key={investor.name}
              className="flex items-center justify-center h-12"
            >
              <Image
                src={investor.logo}
                alt={investor.name}
                width={investor.width}
                height={investor.height}
                className={`h-8 lg:h-10 w-auto object-contain opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300${investor.invert ? " invert" : ""}`}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
