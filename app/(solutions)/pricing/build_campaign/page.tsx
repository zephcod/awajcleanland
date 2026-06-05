import { QuickCampaign } from "@/app/components/pricing/quick_campaign";
import { getOrders } from "@/services/orders.services";

export default async function HomePage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Posts
      </h1>
     <QuickCampaign/>
    </main>
  );
}