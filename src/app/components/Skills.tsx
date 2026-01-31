import { 
  Bug, 
  Code, 
  Database, 
  Globe, 
  Lock, 
  Gauge,
  Cloud,
  Smartphone,
  GitBranch,
  Container,
  Bot,
  BarChart3
} from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: Bug,
      title: 'Testing & QA',
      color: 'bg-red-100 text-red-600',
      skills: [
        'QA Documentation & P&P',
        'Bug Tracking & Reporting',
        'UAT',
        'Integration/E2E Testing',
        'Cross-platform Testing',
        'Mobile Testing'
      ]
    },
    {
      icon: Code,
      title: 'Automation',
      color: 'bg-purple-100 text-purple-600',
      skills: [
        'Selenium WebDriver',
        'Playwright',
        'BDD/Cucumber',
        'Test Framework Design',
        'Web Crawler/Scraper',
        'API Validation'
      ]
    },
    {
      icon: GitBranch,
      title: 'DevOps & CI/CD',
      color: 'bg-blue-100 text-blue-600',
      skills: [
        'CI/CD Pipelines',
        'Jenkins/GitLab CI',
        'GitHub Actions',
        'Agile/Scrum',
        'DevOps Practices',
        'Container Orchestration'
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud & Infrastructure',
      color: 'bg-cyan-100 text-cyan-600',
      skills: [
        'GCP/Cloud Platforms',
        'Docker/Containers',
        'Terraform',
        'Infrastructure as Code',
        'Cloud Testing',
        'Microservices Testing'
      ]
    },
    {
      icon: Database,
      title: 'Data & Backend',
      color: 'bg-green-100 text-green-600',
      skills: [
        'SQL/Database Testing',
        'API Testing',
        'Data Validation',
        'ETL Testing',
        'Backend Testing',
        'Integration Testing'
      ]
    },
    {
      icon: Gauge,
      title: 'Performance & Load',
      color: 'bg-orange-100 text-orange-600',
      skills: [
        'Load Testing',
        'Performance Testing',
        'Stress Testing',
        'Monitoring',
        'JMeter/K6',
        'Performance Optimization'
      ]
    },
    {
      icon: Lock,
      title: 'Security',
      color: 'bg-yellow-100 text-yellow-600',
      skills: [
        'Security Testing',
        'Vulnerability Assessment',
        'OWASP Top 10',
        'Penetration Testing',
        'Security Compliance',
        'Secure Code Review'
      ]
    },
    {
      icon: BarChart3,
      title: 'Analytics & BI',
      color: 'bg-indigo-100 text-indigo-600',
      skills: [
        'SEO/Looker',
        'BI/Dashboard',
        'Data Visualization',
        'Reporting',
        'Analytics Testing',
        'Metrics & KPIs'
      ]
    },
    {
      icon: Bot,
      title: 'AI & Emerging Tech',
      color: 'bg-pink-100 text-pink-600',
      skills: [
        'AI/LLM Training',
        'AI Customization',
        'ML Model Testing',
        'AI Quality Assurance',
        'Chatbot Testing',
        'NLP Testing'
      ]
    },
    {
      icon: Smartphone,
      title: 'Applications',
      color: 'bg-teal-100 text-teal-600',
      skills: [
        'WebApps Testing',
        'Mobile App Testing',
        'Salesforce/CRM',
        'Independent Dev Projects',
        'SaaS Testing',
        'PWA Testing'
      ]
    },
    {
      icon: Globe,
      title: 'UX/UI',
      color: 'bg-violet-100 text-violet-600',
      skills: [
        'UX Testing',
        'UI Testing',
        'Accessibility Testing',
        'Usability Testing',
        'Figma',
        'Blender'
      ]
    },
    {
      icon: Container,
      title: 'Containerization',
      color: 'bg-slate-100 text-slate-600',
      skills: [
        'Docker',
        'Kubernetes',
        'Container Testing',
        'Docker Compose',
        'Image Security',
        'Registry Management'
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-7xl mx-auto">
        <h2 id="skills-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
          Core Competencies
        </h2>
        <p className="text-lg text-gray-400 mb-12 text-center max-w-3xl mx-auto">
          Comprehensive expertise across the entire software quality assurance spectrum
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <article 
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:bg-gray-700 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${category.color.replace('bg-', 'bg-').replace('text-', 'text-').replace('-100', '-500/20').replace('-600', '-400')}`}>
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2" role="list">
                  {category.skills.map((skill, skillIndex) => (
                    <li 
                      key={skillIndex}
                      className="flex items-start gap-2 text-gray-300"
                    >
                      <span className="text-blue-400 mt-1" aria-hidden="true">▸</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}