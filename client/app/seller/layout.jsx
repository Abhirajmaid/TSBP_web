import { montserrat } from "@app/fonts";
import { Navbar, SellerTabs } from "@src/components/seller";

export default function Layout({ children }) {
  return (
    <>
      <div className={`${montserrat.className} mt-[100px]`}>
        <Navbar />
        {children}
        <SellerTabs />
      </div>
    </>
  );
}
