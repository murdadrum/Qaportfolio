export function Expertise() {
  const expertiseAreas = [
    {
      category: 'Test Automation Frameworks',
      items: ['Selenium WebDriver', 'Playwright', 'Cypress', 'TestNG', 'JUnit', 'PyTest'],
      years: 10
    },
    {
      category: 'Programming Languages',
      items: ['Java', 'Python', 'JavaScript/TypeScript', 'SQL', 'Bash/Shell'],
      years: 9
    },
    {
      category: 'BDD & Test Design',
      items: ['Cucumber', 'Gherkin', 'SpecFlow', 'Behave', 'Test Case Design'],
      years: 9
    },
    {
      category: 'CI/CD & DevOps',
      items: ['Jenkins', 'GitHub Actions', 'GitLab CI', 'CircleCI', 'Azure DevOps'],
      years: 9
    },
    {
      category: 'Cloud Platforms',
      items: ['Google Cloud Platform', 'AWS', 'Azure', 'Cloud Testing', 'Serverless'],
      years: 8
    },
    {
      category: 'Containerization',
      items: ['Docker', 'Kubernetes', 'Docker Compose', 'Container Security'],
      years: 9
    },
    {
      category: 'Infrastructure as Code',
      items: ['Terraform', 'CloudFormation', 'Ansible', 'Infrastructure Testing'],
      years: 8
    },
    {
      category: 'Performance Testing',
      items: ['JMeter', 'LoadRunner', 'K6', 'Gatling', 'Performance Monitoring'],
      years: 9
    },
    {
      category: 'Security Testing',
      items: ['OWASP ZAP', 'Burp Suite', 'Security Scanning', 'Vulnerability Assessment'],
      years: 8
    },
    {
      category: 'API Testing',
      items: ['Postman', 'REST Assured', 'SoapUI', 'GraphQL Testing', 'API Automation'],
      years: 9
    },
    {
      category: 'Database Testing',
      items: ['SQL', 'PostgreSQL', 'MySQL', 'MongoDB', 'Data Validation'],
      years: 9
    },
    {
      category: 'Mobile Testing',
      items: ['Appium', 'Android Studio', 'XCode', 'iOS Testing', 'Android Testing'],
      years: 8
    },
    {
      category: 'Web Technologies',
      items: ['HTML/CSS', 'React', 'Angular', 'Vue.js', 'Web Scraping'],
      years: 9
    },
    {
      category: 'Bug Tracking & Management',
      items: ['JIRA', 'Azure DevOps', 'Bugzilla', 'MantisBT', 'Test Management'],
      years: 9
    },
    {
      category: 'Business Intelligence',
      items: ['Looker', 'Tableau', 'Power BI', 'Data Analytics', 'Reporting'],
      years: 8
    },
    {
      category: 'CRM & Enterprise',
      items: ['Salesforce Testing', 'CRM Automation', 'Enterprise Applications'],
      years: 8
    },
    {
      category: 'Version Control',
      items: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'Code Review'],
      years: 9
    },
    {
      category: 'Agile Methodologies',
      items: ['Scrum', 'Kanban', 'SAFe', 'Sprint Planning', 'Story Estimation'],
      years: 9
    },
    {
      category: 'UAT & Requirements Grooming',
      items: ['User Acceptance Testing', 'Requirements Analysis', 'Stakeholder Collaboration', 'Test Case Review', 'Acceptance Criteria'],
      years: 9
    },
    {
      category: 'AI & Machine Learning',
      items: ['LLM Testing', 'AI Model QA', 'Training Data Validation', 'AI Customization'],
      years: 8
    },
    {
      category: 'Design & Prototyping',
      items: ['Figma', 'Blender', 'UI/UX Testing', 'Design Systems'],
      years: 8
    }
  ];

  return (
    <section 
      id="expertise" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800"
      aria-labelledby="expertise-heading"
    >
      <div className="max-w-7xl mx-auto">
        <h2 id="expertise-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
          Technical Proficiency
        </h2>
        <p className="text-lg text-gray-400 mb-8 text-center max-w-3xl mx-auto">
          Deep technical knowledge across tools, frameworks, and methodologies
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {expertiseAreas.map((area, index) => (
            <article key={index} className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-colors">
              <h3 className="text-base font-semibold text-white mb-1">
                {area.category}
              </h3>
              <p className="text-xs text-gray-400 mb-2 line-clamp-2">
                {area.items.join(' • ')}
              </p>
              
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-gray-600 rounded-full h-1.5" role="progressbar" aria-valuenow={area.years} aria-valuemin={0} aria-valuemax={10} aria-label={`${area.category} experience: ${area.years} years`}>
                  <div 
                    className="bg-blue-500 h-1.5 rounded-full transition-all duration-1000"
                    style={{ width: `${(area.years / 10) * 100}%` }}
                  />
                </div>
                <span className="text-xs font-medium text-blue-400 min-w-[2.5rem] text-right">{area.years} yrs</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}