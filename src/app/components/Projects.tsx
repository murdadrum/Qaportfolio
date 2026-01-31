import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Enterprise E-Commerce Test Automation Suite",
      description:
        "Comprehensive end-to-end testing framework using Playwright and BDD, integrated with CI/CD pipeline.",
      repoUrl:
        "https://github.com/murdadrum/enterprise-ecommerce-test-automation-suite",
      demoUrl: "/demos/enterprise-ecommerce-test-automation-suite",
      technologies: [
        "Playwright",
        "TypeScript",
        "Cucumber",
        "GitHub Actions",
        "Docker",
      ],
      highlights: [
        "Cross-browser & cross-platform testing",
        "API integration testing",
        "Performance monitoring",
        "Accessibility compliance validation",
      ],
    },
    {
      title: "Cloud Infrastructure Testing Framework",
      description:
        "Built automated testing infrastructure for GCP environments using Terraform and containerized test suites. Validated infrastructure deployments and cloud security configurations.",
      repoUrl:
        "https://github.com/murdadrum/cloud-infrastructure-testing-framework",
      demoUrl: "/demos/cloud-infrastructure-testing-framework",
      technologies: ["Terraform", "GCP", "Docker", "Python", "Kubernetes"],
      highlights: [
        "Infrastructure as Code validation",
        "Security testing automation",
        "Cloud resource monitoring",
        "Cost optimization testing",
      ],
    },
    {
      title: "AI/LLM Quality Assurance Platform",
      description:
        "Developed comprehensive testing framework for Large Language Model applications, including prompt testing, response validation, and bias detection.",
      repoUrl:
        "https://github.com/murdadrum/ai-llm-quality-assurance-platform",
      demoUrl: "/demos/ai-llm-quality-assurance-platform",
      technologies: [
        "Python",
        "OpenAI API",
        "pytest",
        "Machine Learning",
        "Data Analytics",
      ],
      highlights: [
        "Prompt engineering validation",
        "Response quality metrics",
        "Bias and toxicity detection",
        "Model performance benchmarking",
      ],
    },
    {
      title: "Mobile App Testing Framework",
      description:
        "Created cross-platform mobile testing solution using Appium for iOS and Android applications, with integration to CI/CD pipelines.",
      repoUrl: "https://github.com/murdadrum/mobile-app-testing-framework",
      demoUrl: "/demos/mobile-app-testing-framework",
      technologies: ["Appium", "Java", "TestNG", "Jenkins", "Sauce Labs"],
      highlights: [
        "Native & hybrid app testing",
        "Device farm integration",
        "Performance profiling",
        "Crash analytics integration",
      ],
    },
    {
      title: "Performance & Load Testing Platform",
      description:
        "Designed and implemented comprehensive performance testing suite for high-traffic web applications, identifying bottlenecks and optimization opportunities.",
      repoUrl:
        "https://github.com/murdadrum/performance-load-testing-platform",
      demoUrl: "/demos/performance-load-testing-platform",
      technologies: ["JMeter", "K6", "Grafana", "InfluxDB", "AWS CloudWatch"],
      highlights: [
        "Load testing scenarios",
        "Real-time monitoring",
        "Performance regression detection",
        "Scalability validation",
      ],
    },
    {
      title: "Security Testing Automation",
      description:
        "Implemented automated security testing pipeline using OWASP ZAP and custom scripts to identify vulnerabilities in web applications.",
      repoUrl: "https://github.com/murdadrum/security-testing-automation",
      demoUrl: "/demos/security-testing-automation",
      technologies: [
        "OWASP ZAP",
        "Burp Suite",
        "Python",
        "GitLab CI",
        "Security Scanning",
      ],
      highlights: [
        "OWASP Top 10 validation",
        "Penetration testing automation",
        "Security compliance reporting",
        "Vulnerability remediation tracking",
      ],
    },
    {
      title: "Salesforce CRM Testing Suite",
      description:
        "Developed comprehensive testing framework for Salesforce implementations, including custom objects, workflows, and integrations.",
      repoUrl: "https://github.com/murdadrum/salesforce-crm-testing-suite",
      demoUrl: "/demos/salesforce-crm-testing-suite",
      technologies: [
        "Selenium",
        "Java",
        "Salesforce API",
        "SOQL",
        "REST Assured",
      ],
      highlights: [
        "Custom component testing",
        "Integration testing",
        "Data migration validation",
        "User acceptance testing",
      ],
    },
    {
      title: "BI Dashboard Validation Framework",
      description:
        "Created automated validation system for business intelligence dashboards and data visualizations using Looker and custom analytics.",
      repoUrl:
        "https://github.com/murdadrum/bi-dashboard-validation-framework",
      demoUrl: "/demos/bi-dashboard-validation-framework",
      technologies: ["Looker", "SQL", "Python", "Data Validation", "Selenium"],
      highlights: [
        "Data accuracy validation",
        "Visual regression testing",
        "ETL pipeline testing",
        "Report generation automation",
      ],
    },
    {
      title: "Web Crawler & Data Scraper",
      description:
        "Built robust web crawling and scraping solution with automated testing and monitoring capabilities for data quality assurance.",
      repoUrl: "https://github.com/murdadrum/web-crawler-data-scraper",
      demoUrl: "/demos/web-crawler-data-scraper",
      technologies: [
        "Python",
        "Scrapy",
        "Selenium",
        "BeautifulSoup",
        "MongoDB",
      ],
      highlights: [
        "Dynamic content handling",
        "Data validation automation",
        "Anti-bot detection bypass",
        "Scheduling & monitoring",
      ],
    },
    {
      title: "Microservices API Testing Platform",
      description:
        "Comprehensive API testing framework for microservices architecture, including contract testing and service virtualization.",
      repoUrl:
        "https://github.com/murdadrum/microservices-api-testing-platform",
      demoUrl: "/demos/microservices-api-testing-platform",
      technologies: ["REST Assured", "Postman", "Pact", "Docker", "Kubernetes"],
      highlights: [
        "Contract testing",
        "Service virtualization",
        "API performance testing",
        "Integration validation",
      ],
    },
    {
      title: "Accessibility Testing Automation",
      description:
        "Implemented automated accessibility testing using axe-core and custom validators to ensure WCAG 2.1 AA compliance.",
      repoUrl: "https://github.com/murdadrum/accessibility-testing-automation",
      demoUrl: "/demos/accessibility-testing-automation",
      technologies: ["axe-core", "Pa11y", "Lighthouse", "Playwright", "ARIA"],
      highlights: [
        "WCAG 2.1 AA/AAA validation",
        "Screen reader testing",
        "Keyboard navigation testing",
        "Color contrast validation",
      ],
    },
    {
      title: "DevOps Pipeline Optimization",
      description:
        "Optimized and enhanced CI/CD pipelines with comprehensive testing stages, reducing deployment time and increasing reliability.",
      repoUrl: "https://github.com/murdadrum/devops-pipeline-optimization",
      demoUrl: "/demos/devops-pipeline-optimization",
      technologies: [
        "Jenkins",
        "GitHub Actions",
        "Docker",
        "Terraform",
        "Kubernetes",
      ],
      highlights: [
        "Pipeline automation",
        "Test parallelization",
        "Deployment validation",
        "Rollback mechanisms",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="projects-heading"
          className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center"
        >
          Featured Projects & Experience
        </h2>
        <p className="text-lg text-gray-400 mb-12 text-center max-w-3xl mx-auto">
          Real-world applications of QA expertise across diverse domains and
          technologies
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:bg-gray-700 transition-all"
            >
              <h3 className="text-xl font-bold text-white mb-3">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">
                  Key Highlights:
                </h4>
                <ul className="space-y-1" role="list">
                  {project.highlights.map((highlight, hIndex) => (
                    <li
                      key={hIndex}
                      className="flex items-start gap-2 text-sm text-gray-400"
                    >
                      <span
                        className="text-green-400 mt-0.5"
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 pt-4 border-t border-gray-700">
                <a
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label={`View ${project.title} on GitHub`}
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={16} aria-hidden="true" />
                  <span>View Code</span>
                </a>
                <a
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label={`View live demo of ${project.title}`}
                  href={project.demoUrl}
                >
                  <ExternalLink size={16} aria-hidden="true" />
                  <span>Live Demo</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
