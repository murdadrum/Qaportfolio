import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { About } from '@/app/components/About';
import { Skills } from '@/app/components/Skills';
import { Expertise } from '@/app/components/Expertise';
import { Projects } from '@/app/components/Projects';
import { Contact } from '@/app/components/Contact';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-500 focus:text-white focus:rounded"
      >
        Skip to main content
      </a>
      
      <Header />
      
      <main id="main-content" role="main">
        <Hero />
        <About />
        <Skills />
        <Expertise />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}