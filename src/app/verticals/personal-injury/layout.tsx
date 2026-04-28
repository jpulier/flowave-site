import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personal Injury Lead Generation",
  description:
    "Qualified personal injury leads delivered at fixed CPA via autonomous content distribution. 100M+ monthly view capacity. No-fee-unless-you-win for advertisers.",
  alternates: { canonical: "https://flowave.co/verticals/personal-injury" },
};

export default function PersonalInjuryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
