import { SellerAdCard, Testimonial } from "@src/components/common";
import { About, EventSec, Hero } from "@src/components/landing";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        src="/images/landing_gradient.svg"
        height={500}
        width={500}
        className="fixed top-0 left-0"
      />
      <div className="px-[4%] md:gap-[160px] gap-[100px] flex flex-col">
        <Hero />
        <About />
        <EventSec />
        <Testimonial />
        <SellerAdCard />
      </div>
    </>
  );
}
