import AboutSection from '@/components/AboutSection';
import Hero from '@/components/Hero';
import { Navbar } from '@/components/ui/Navbar';
import { FaHome } from 'react-icons/fa';
import dynamic from 'next/dynamic';
import { GlobeDemo } from '@/components/ui/GridGlobe';

// Dynamically import GlobeDemo to prevent SSR issues

export default function Home() {
  return (
    <main className="bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <Navbar
          navItems={[
            {
              name: 'Home',
              link: '/',
              icon: <FaHome />,
            },
          ]}
        />
        <Hero />
        <AboutSection />
        {/* <GlobeDemo /> */}
      </div>
    </main>
  );
}
