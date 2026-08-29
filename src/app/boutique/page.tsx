import Boutique from "@/components/Boutique";

export const metadata = {
  title: 'Boutique | Marseille Fight Club',
  description: 'Découvrez les équipements officiels du Marseille Fight Club. Rashguards, shorts et autres équipements exclusifs disponibles directement au club.',
};

export default function BoutiquePage() {
  return (
    <main className="min-h-screen bg-mfc-dark">
      <Boutique />
    </main>
  );
}
