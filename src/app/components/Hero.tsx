import { CheckCircle2, Shield, Zap } from 'lucide-react';

export function Hero() {
  return (
    <section 
      id="hero" 
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      aria-label="Hero section"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Software QA Engineer
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Delivering Quality Through Comprehensive Testing, Automation, and DevOps Excellence
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-gray-300">
              <CheckCircle2 className="text-green-400" size={24} aria-hidden="true" />
              <span>Test Automation Expert</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Shield className="text-blue-400" size={24} aria-hidden="true" />
              <span>Security & Compliance</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Zap className="text-yellow-400" size={24} aria-hidden="true" />
              <span>Performance Testing</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#projects" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-500 transition-colors shadow-lg"
              aria-label="View my projects"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="bg-gray-700 text-white px-8 py-3 rounded-lg hover:bg-gray-600 transition-colors shadow-lg border-2 border-gray-600"
              aria-label="Contact me"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}