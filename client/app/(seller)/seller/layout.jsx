import { montserrat } from "@app/fonts";
import { Navbar, SellerTabs } from "@src/components/seller";
import { fetchUser } from "@src/lib/actions/user.action";
import SellerProtectedRoute from "@src/routes/SellerProtectedRoute";

const getData = async () => {
  const { data } = fetchUser(9);
  return data;
};

export default async function Layout({ children }) {
  const user = await getData();
  return (
    <>
      {/* <SellerProtectedRoute user={user}> */}
      <div className={`${montserrat.className}`}>
        <Navbar />
        {children}
        <SellerTabs />
      </div>
      {/* </SellerProtectedRoute> */}
    </>
  );
}
