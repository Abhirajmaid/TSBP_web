import { montserrat } from "@app/fonts";
import { Navbar, SellerTabs } from "@src/components/seller";
import SellerProtectedRoute from "@src/routes/SellerProtectedRoute";

export default function Layout({ children }) {
  return (
    <>
      <SellerProtectedRoute>
        <div className={`${montserrat.className} mt-[100px]`}>
          <Navbar />
          {children}
          <SellerTabs />
        </div>
      </SellerProtectedRoute>
    </>
  );
}
