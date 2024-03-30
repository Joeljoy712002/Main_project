import Header from '@/components/landing-page/header';
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
    </main>
  );
};

export default HomePageLayout;