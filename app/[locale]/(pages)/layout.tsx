import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

interface PagesLayoutProps {
  children: React.ReactNode;
}

export default function PagesLayout({ children }: PagesLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
