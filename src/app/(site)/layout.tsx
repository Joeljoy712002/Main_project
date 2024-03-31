import Header from '@/components/landing-page/header';
import Footer from '@/components/landing-page/footer';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adaptiflex",
  description: "All-In-One Collaboration and Productivity Platform",
};

const HomePageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default HomePageLayout;