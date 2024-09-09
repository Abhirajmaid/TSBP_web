import { montserrat } from "@app/fonts";
import { SideNavbar } from "@src/components/account";
import { Footer, Navbar } from "@src/components/common";
import { userAccLinks } from "@src/data/navLinks";

export default function Layout({ children }) {
  return (
    <>
      <div className="md:mt-[70px] mt-[70px] min-h-screen w-full overflow-hidden flex">
        <SideNavbar links={userAccLinks} />
        <div className="w-full md:p-8 p-4 bg-gray-100">{children}</div>
      </div>
    </>
  );
}
