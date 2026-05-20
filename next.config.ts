import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/solutions/general-contractors",
        destination: "/",
        permanent: true,
      },
      {
        source: "/solutions/subcontractors",
        destination: "/",
        permanent: true,
      },
      {
        source: "/solutions/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/product/wip-report",
        destination: "/product/reporting",
        permanent: true,
      },
      {
        source: "/integrations/viewpoint-spectrum",
        destination: "/integrations",
        permanent: true,
      },
      {
        source: "/integrations/viewpoint-vista",
        destination: "/integrations",
        permanent: true,
      },
      {
        source: "/integrations/foundation-software",
        destination: "/integrations",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
