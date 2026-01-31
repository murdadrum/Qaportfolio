import { Award, BookOpen, Code2, Users } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Technical Expertise',
      description: 'Proficient in multiple testing frameworks, automation tools, and development technologies'
    },
    {
      icon: BookOpen,
      title: 'QA Documentation',
      description: 'Expert in creating comprehensive test plans, policies, and procedures'
    },
    {
      icon: Users,
      title: 'Agile & DevOps',
      description: 'Experienced in Agile/Scrum methodologies and DevOps practices'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Committed to delivering high-quality software through rigorous testing'
    }
  ];

  return (
    <section 
      id="about" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto">
        <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
          About Me
        </h2>
        
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <p className="text-lg text-gray-300 mb-4">
            As a dedicated Software QA Engineer, I bring extensive expertise across the entire software quality lifecycle—from test planning and automation to performance monitoring and security validation.
          </p>
          <p className="text-lg text-gray-300">
            My comprehensive skill set spans modern testing frameworks, cloud infrastructure, CI/CD pipelines, and emerging technologies like AI/LLM integration, ensuring robust quality assurance at every stage of development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <article 
                key={index}
                className="bg-gray-700 p-6 rounded-lg hover:shadow-xl hover:bg-gray-600 transition-all"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-500/20 p-3 rounded-full">
                    <Icon className="text-blue-400" size={32} aria-hidden="true" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 text-center">
                  {highlight.title}
                </h3>
                <p className="text-gray-300 text-center">
                  {highlight.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}