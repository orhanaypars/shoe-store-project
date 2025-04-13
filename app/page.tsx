import DiscountProduct from "./_components/DiscountProduct";
import Hero from "./_components/Hero";
import MostSallers from "./_components/MostSallers";

export default function Home() {
  return (
    <div>
      <Hero />
      <MostSallers />
      <DiscountProduct />
    </div>
  );
}
