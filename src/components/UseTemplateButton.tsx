"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { downloadableTemplates } from "@/data/downloadableTemplates";

const TemplateLeadModal = dynamic(
  () => import("@/components/TemplateLeadModal"),
  { ssr: false }
);

interface Props {
  slug: string;
  title: string;
}

export default function UseTemplateButton({ slug, title }: Props) {
  const [open, setOpen] = useState(false);
  const hasDownload = downloadableTemplates.has(slug);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center rounded-full bg-[#6366F1] px-7 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#4F46E5] transition-colors duration-300"
      >
        Use this template
      </button>
      {open && (
        <TemplateLeadModal
          templateSlug={slug}
          templateTitle={title}
          hasDownload={hasDownload}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
