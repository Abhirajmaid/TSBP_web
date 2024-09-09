import { montserrat } from "@app/fonts";
import { Footer } from "@src/components/common";
import { Navbar } from "@src/components/seller";

export default function Layout({ children }) {
  return (
    <>
      <div className={montserrat.className}>
        <div className="mt-[100px]">
          <Navbar />
          {children}
          <Footer bg="primary" />
        </div>
      </div>
    </>
  );
}
