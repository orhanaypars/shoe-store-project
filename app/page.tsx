import DiscountProduct from "./_components/DiscountProduct";
import Hero from "./_components/Hero";
import MostSallers from "./_components/MostSallers";
import NeonLine from "./_components/NeonLine";

export default function Home() {
  return (
    <div>
      <Hero />
      <NeonLine />
      <MostSallers />
      <NeonLine />
      <DiscountProduct />
    </div>
  );
}
