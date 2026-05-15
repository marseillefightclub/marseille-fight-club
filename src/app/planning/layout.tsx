import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planning | Marseille Fight Club",
  description: "Découvrez notre planning complet des cours au Marseille Fight Club : MMA, Boxe, Grappling, Lutte.",
};

export default function PlanningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
