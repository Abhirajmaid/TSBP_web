import { montserrat } from "@app/fonts";
import { Footer, Navbar } from "@src/components/common";

export default function Layout({ children }) {
  return (
    <>
      <div className={montserrat.className}>
        {/* <Navbar /> */}
        {children}
        <Footer bg="primary" />
      </div>
    </>
  );
}
