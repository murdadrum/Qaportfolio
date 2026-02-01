export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-300">
              © {currentYear} Josh Barteaux, Get Up amd Do Something LLC. All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="#hero" 
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              Back to Top
            </a>
            <a 
              href="https://www.w3.org/WAI/WCAG2AA-Conformance" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="WCAG 2.1 AA Conformance information"
            >
              WCAG 2.1 AA
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            Built with React, TypeScript, and Tailwind CSS • Fully Accessible • Responsive Design
          </p>
        </div>
      </div>
    </footer>
  );
}
