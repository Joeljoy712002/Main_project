import React from 'react';
import { SubscriptionModalProvider } from '@/lib/providers/subscription-modal-provider';
import { getActiveProductsWithPrice } from '@/lib/supabase/queries';

interface LayoutProps {
  children: React.ReactNode;
  params: any;
}

const Layout: React.FC<LayoutProps> = async ({ children, params }) => {
  const { data: products, error } = await getActiveProductsWithPrice();
  try {
    if (error) throw new Error();
  }
  catch (error) {
    console.log(error);
  }
  return (
    <main className="flex over-hidden h-screen">
      <SubscriptionModalProvider products={products}>
        {children}
      </SubscriptionModalProvider>
    </main>
  );
};

export default Layout;