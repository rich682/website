export default function IntegrationIcon({ icon, className = "w-10 h-10" }: { icon: string; className?: string }) {
  const iconColor = "currentColor";

  switch (icon) {
    case "quickbooks":
      return (
        <svg className={className} viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="18" stroke={iconColor} strokeWidth="1.5" />
          <path d="M14 14v12h3v-4h3c2.2 0 4-1.8 4-4s-1.8-4-4-4h-6zm3 2.5h3c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-3v-3z" fill={iconColor} />
          <path d="M24 26V14h-2v4h-2c-2.2 0-4 1.8-4 4s1.8 4 4 4h4zm-2-2.5h-2c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h2v3z" fill={iconColor} opacity="0.5" />
        </svg>
      );

    case "xero":
      return (
        <svg className={className} viewBox="0 0 40 40" fill="none">
          <text x="8" y="26" fontSize="16" fontWeight="700" fontFamily="system-ui" fill={iconColor} opacity="0.7">xero</text>
        </svg>
      );

    case "netsuite":
      return (
        <svg className={className} viewBox="0 0 40 40" fill="none">
          <rect x="6" y="10" width="12" height="20" rx="2" stroke={iconColor} strokeWidth="1.5" />
          <rect x="22" y="10" width="12" height="20" rx="2" fill={iconColor} opacity="0.15" stroke={iconColor} strokeWidth="1.5" />
          <path d="M10 26l4-12" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M26 26l4-12" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case "sage-intacct":
    case "sage-bca":
      return (
        <svg className={className} viewBox="0 0 40 40" fill="none">
          <text x="4" y="18" fontSize="10" fontWeight="700" fontFamily="system-ui" fill={iconColor} opacity="0.7">Sage</text>
          <text x="4" y="30" fontSize="8" fontWeight="400" fontFamily="system-ui" fill={iconColor} opacity="0.4">
            {icon === "sage-intacct" ? "Intacct" : "BCA"}
          </text>
        </svg>
      );

    case "freshbooks":
      return (
        <svg className={className} viewBox="0 0 40 40" fill="none">
          <rect x="10" y="6" width="20" height="28" rx="3" stroke={iconColor} strokeWidth="1.5" />
          <path d="M15 14h10M15 19h7M15 24h10" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case "wave":
      return (
        <svg className={className} viewBox="0 0 40 40" fill="none">
          <path d="M6 24c3-6 6-12 9-6s6 12 9 6 6-12 9-6" stroke={iconColor} strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>
      );

    case "zoho":
      return (
        <svg className={className} viewBox="0 0 40 40" fill="none">
          <rect x="6" y="10" width="28" height="20" rx="4" stroke={iconColor} strokeWidth="1.5" />
          <text x="10" y="25" fontSize="10" fontWeight="700" fontFamily="system-ui" fill={iconColor} opacity="0.7">Zo</text>
        </svg>
      );

    case "clearbooks":
      return (
        <svg className={className} viewBox="0 0 40 40" fill="none">
          <rect x="8" y="8" width="10" height="12" rx="1.5" stroke={iconColor} strokeWidth="1.5" />
          <rect x="12" y="12" width="10" height="12" rx="1.5" stroke={iconColor} strokeWidth="1.5" fill="var(--background)" />
          <path d="M15 16h4M15 19h3" stroke={iconColor} strokeWidth="1" strokeLinecap="round" />
        </svg>
      );

    case "freeagent":
      return (
        <svg className={className} viewBox="0 0 40 40" fill="none">
          <path d="M12 10h16l-3 20H15L12 10z" stroke={iconColor} strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M16 17h8" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M15 22h10" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case "moneybird":
      return (
        <svg className={className} viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="18" r="8" stroke={iconColor} strokeWidth="1.5" />
          <path d="M17 17c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M20 14v-1M20 22v1" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M14 28c2-3 4-4 6-4s4 1 6 4" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );

    case "dynamics":
      return (
        <svg className={className} viewBox="0 0 40 40" fill="none">
          <path d="M10 10h8v8h-8zM22 10h8v8h-8zM10 22h8v8h-8zM22 22h8v8h-8z" stroke={iconColor} strokeWidth="1.5" />
          <path d="M14 14h0M26 14h0M14 26h0M26 26h0" stroke={iconColor} strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case "excel":
      return (
        <svg className={className} viewBox="0 0 40 40" fill="none">
          <rect x="8" y="6" width="24" height="28" rx="3" stroke={iconColor} strokeWidth="1.5" />
          <path d="M14 16l5 8M19 16l-5 8" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M24 14v12M22 16h4M22 20h4M22 24h4" stroke={iconColor} strokeWidth="1" strokeLinecap="round" opacity="0.4" />
        </svg>
      );

    default:
      return (
        <svg className={className} viewBox="0 0 40 40" fill="none">
          <rect x="6" y="6" width="28" height="28" rx="6" stroke={iconColor} strokeWidth="1.5" />
          <path d="M14 20h12M20 14v12" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
  }
}
