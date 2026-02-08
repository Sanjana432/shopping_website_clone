export function PortfolioExperience() {
  const experiences = [
    {
      title: "Research Intern",
      company: "Vellore Institute of Technology",
      period: "July 2025 – Present",
      highlights: [
        "Presented paper at National Conference on Innovations in Computing Technologies proposing CNN-LSTM hybrid for climate anomaly prediction achieving 94.6% accuracy",
        "Reviewing deep learning-based semantic segmentation of Lung Adenocarcinoma WSIs",
        "Authored book chapter on LLM architectures and system-level considerations",
        "Conducting comparative study of Quantum ML models vs classical ML models for lung cancer histopathology"
      ]
    },
    {
      title: "Project Intern",
      company: "Vellore Institute of Technology",
      period: "Dec 2025 – Present",
      highlights: [
        "Working on physics-guided deep learning framework for flood susceptibility mapping using SAR imagery",
        "Developing flood water detection and inundation depth monitoring systems",
        "Integrating GeoAI-based high-resolution DEM simulation with ALOS PALSAR and ICESat-2 LiDAR"
      ]
    },
    {
      title: "Technical Core Member",
      company: "IEEE Computer Society & Mozilla Firefox Club",
      period: "March 2025 – Present",
      highlights: [
        "Developed Python Discord bot with Gemini API for chat summarization and task automation",
        "Designed and deployed portfolio website using HTML, CSS, and JavaScript",
        "Strengthening problem-solving through competitive programming"
      ]
    },
    {
      title: "Secretary",
      company: "Toastmasters International",
      period: "March 2025 – Present",
      highlights: [
        "Pursuing Dynamic Leadership Pathway - Level 3",
        "Managing organizational documentation and club operations",
        "Developing leadership and public speaking skills"
      ]
    },
    {
      title: "Innovation Ambassador",
      company: "Institution's Innovation Council (IIC-VIT)",
      period: "Sep 2024 – Present",
      highlights: [
        "Promoting innovation-driven initiatives and interdisciplinary collaboration",
        "Supporting Ministry of Education Institutional Innovation Council framework"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            A timeline of my professional journey in AI, research, and software development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-accent pl-8 pb-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 gap-2">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-foreground">
                    {exp.title}
                  </h3>
                  <p className="text-accent font-mono text-sm">
                    {exp.company}
                  </p>
                </div>
                <span className="text-muted-foreground text-sm whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-3">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <span className="text-accent mt-1">•</span>
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
