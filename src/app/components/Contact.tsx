import { Mail, Linkedin, Github, FileText } from "lucide-react";

export function Contact() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          id="contact-heading"
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
        >
          Let's Connect
        </h2>
        <p className="text-lg text-gray-400 mb-12">
          I'm always interested in discussing new opportunities, challenging
          projects, and innovative QA solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <a
            href="mailto:josh@remotelyamused.com"
            className="flex flex-col items-center gap-3 p-6 bg-gray-700 rounded-lg hover:bg-gray-600 hover:shadow-xl transition-all"
            aria-label="Send email"
          >
            <div className="bg-blue-500/20 p-3 rounded-full">
              <Mail className="text-blue-400" size={24} aria-hidden="true" />
            </div>
            <span className="font-semibold text-white">Email</span>
            <span className="text-sm text-gray-400">
              josh@remotelyamused.com
            </span>
          </a>

          <a
            href="https://linkedin.com/in/joshbarteaux"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-6 bg-gray-700 rounded-lg hover:bg-gray-600 hover:shadow-xl transition-all"
            aria-label="Visit LinkedIn profile"
          >
            <div className="bg-blue-500/20 p-3 rounded-full">
              <Linkedin
                className="text-blue-400"
                size={24}
                aria-hidden="true"
              />
            </div>
            <span className="font-semibold text-white">LinkedIn</span>
            <span className="text-sm text-gray-400">Connect</span>
          </a>

          <a
            href="https://github.com/murdadrum"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-6 bg-gray-700 rounded-lg hover:bg-gray-600 hover:shadow-xl transition-all"
            aria-label="Visit GitHub profile"
          >
            <div className="bg-blue-500/20 p-3 rounded-full">
              <Github className="text-blue-400" size={24} aria-hidden="true" />
            </div>
            <span className="font-semibold text-white">GitHub</span>
            <span className="text-sm text-gray-400">View Projects</span>
          </a>

          <a
            href={`${baseUrl}resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-6 bg-gray-700 rounded-lg hover:bg-gray-600 hover:shadow-xl transition-all"
            aria-label="Download resume"
          >
            <div className="bg-blue-500/20 p-3 rounded-full">
              <FileText
                className="text-blue-400"
                size={24}
                aria-hidden="true"
              />
            </div>
            <span className="font-semibold text-white">Resume</span>
            <span className="text-sm text-gray-400">Download PDF</span>
          </a>
        </div>

        <div className="bg-gradient-to-r from-gray-700 to-gray-700 p-8 rounded-lg border border-gray-600">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Elevate Your QA Process?
          </h3>
          <p className="text-gray-300 mb-6">
            Let's discuss how I can help ensure the quality and reliability of
            your software products.
          </p>
          <a
            href="mailto:josh@remotelyamused.com"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-500 transition-colors shadow-lg"
            aria-label="Send me a message"
          >
            Send Me a Message
          </a>
        </div>
      </div>
    </section>
  );
}
