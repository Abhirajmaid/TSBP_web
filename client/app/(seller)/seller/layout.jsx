import { montserrat } from "@app/fonts";
import { Navbar, SellerTabs } from "@src/components/seller";

export default async function Layout({ children }) {
  return (
    <>
      <div className={`${montserrat.className}`}>
        <Navbar />
        {children}
        <div className="fixed bottom-0 w-full ">
          <SellerTabs />
        </div>
      </div>
    </>
  );
}
