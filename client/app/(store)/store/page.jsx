import {
  ListingSlider,
  SectionTitle,
  SellerAdCard,
} from "@src/components/common";
import { BikeCat, GearsCat, HomeSwiper } from "@src/components/home";

export const metadata = {
  title: "Store",
  description:
    "Netgarage is India's trusted online marketplace for buying and selling premium pre-owned motorcycles.",
};
const page = () => {
  return (
    <div
      className="px-[4%] bg-bg gap-[30px] flex flex-col overflow-hidden"
      style={{ paddingTop: "90px" }}
    >
      <BikeCat />
      <HomeSwiper />
      <ListingSlider filter="featured" />
      {/* <GearsCat /> */}
      <SectionTitle title="Super Bikes" />
      <ListingSlider filter="super-bikes" />
      <SectionTitle title="Cruiser" />
      <ListingSlider filter="cruiser-bikes" />
      <SellerAdCard />
    </div>
  );
};

export default page;
