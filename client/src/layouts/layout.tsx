import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import Hero from '@/components/shared/Hero';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <Hero />
      <div className='container mx-auto flex-1 py-10'>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
