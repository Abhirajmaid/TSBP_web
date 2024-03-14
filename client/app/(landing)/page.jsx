import { SellerAdCard, Testimonial } from "@src/components/common";
import { About, EventSec, Hero } from "@src/components/landing";

export default function Home() {
  return (
    <>
      <div className="px-[4%] gap-[160px] flex flex-col ">
        <Hero />
        <About />
        <EventSec />
        <Testimonial />
        <SellerAdCard />
      </div>
    </>
  );
}
