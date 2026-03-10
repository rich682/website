import Image from "next/image";

const logoMap: Record<string, string> = {
  quickbooks: "/images/integrations/QuickBooks-square_Uf26B71-thumbnail-144x144.png",
  xero: "/images/integrations/Xero-square-thumbnail-144x144.png",
  netsuite: "/images/integrations/Netsuite_square-thumbnail-144x144.png",
  "sage-intacct": "/images/integrations/Sage_Intacct_Square_vviNs7a-thumbnail-144x144.png",
  "sage-bca": "/images/integrations/Sage_BCA_Square_KvXv3Sj-thumbnail-144x144.png",
  freshbooks: "/images/integrations/FreshBooks_Square_Logo-thumbnail-144x144-70.jpg",
  wave: "/images/integrations/PlatformWave_Hfdx20t-thumbnail-144x144.png",
  zoho: "/images/integrations/ZohoBooks_Square_Logo-thumbnail-144x144.png",
  clearbooks: "/images/integrations/Clear_Books_Square_Logo-thumbnail-144x144-70.jpg",
  freeagent: "/images/integrations/Platformfreeagent_square_kRtyDG2-thumbnail-144x144.png",
  moneybird: "/images/integrations/PlatformMoneybird-thumbnail-144x144.png",
  dynamics: "/images/integrations/Microsoft_Dynamics_365_Business_Central_Color_9xEF667-thumbnail-144x144.png",
  excel: "/images/integrations/Microsoft_Office_Excel_(2019–2025).svg.png",
};

const nameMap: Record<string, string> = {
  quickbooks: "QuickBooks",
  xero: "Xero",
  netsuite: "NetSuite",
  "sage-intacct": "Sage Intacct",
  "sage-bca": "Sage BCA",
  freshbooks: "FreshBooks",
  wave: "Wave",
  zoho: "Zoho Books",
  clearbooks: "Clear Books",
  freeagent: "FreeAgent",
  moneybird: "Moneybird",
  dynamics: "Microsoft Dynamics 365",
  excel: "Microsoft Excel",
};

export default function IntegrationIcon({ icon, className = "w-10 h-10" }: { icon: string; className?: string }) {
  const logo = logoMap[icon];

  if (logo) {
    return (
      <Image
        src={logo}
        alt={nameMap[icon] || icon}
        width={144}
        height={144}
        className={`${className} rounded-lg object-contain`}
      />
    );
  }

  // Fallback SVG for unknown integrations
  const iconColor = "currentColor";

  return (
    <svg className={className} viewBox="0 0 40 40" fill="none">
      <rect x="6" y="6" width="28" height="28" rx="6" stroke={iconColor} strokeWidth="1.5" />
      <path d="M14 20h12M20 14v12" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
