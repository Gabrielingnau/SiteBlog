import { Footer } from "../footer";
import { Header } from "../header";

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col relative">
      <Header />
      <main className="flex-1 flex flex-col mt-16 mb-12">{children}</main>
      <Footer/>
    </div>
  );
}
