export function PortfolioSkills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Java", "Python", "C/C++", "SQL", "JavaScript", "HTML/CSS", "R"]
    },
    {
      category: "Frameworks",
      skills: ["React", "Node.js", "Flask"]
    },
    {
      category: "Tools",
      skills: ["Git", "Docker", "VS Code", "Visual Studio"]
    },
    {
      category: "Libraries",
      skills: ["pandas", "NumPy", "Matplotlib"]
    },
    {
      category: "Specializations",
      skills: ["Deep Learning", "Machine Learning", "LLM Architecture", "Quantum ML", "Semantic Segmentation", "Computer Vision"]
    }
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-lg">
            Tools and technologies I work with across AI, web development, and data science
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((section, index) => (
            <div 
              key={index}
              className="p-6 border border-border rounded-lg hover:border-accent transition-all duration-300 hover:bg-card/50"
            >
              <h3 className="font-serif text-xl font-bold text-accent mb-4">
                {section.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {section.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-secondary/40 text-foreground rounded-full text-sm hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="p-6 border border-accent/50 bg-accent/10 rounded-lg">
            <div className="text-3xl font-bold text-accent mb-2">5+</div>
            <p className="text-muted-foreground">Research Projects</p>
          </div>
          <div className="p-6 border border-accent/50 bg-accent/10 rounded-lg">
            <div className="text-3xl font-bold text-accent mb-2">94.6%</div>
            <p className="text-muted-foreground">Highest Model Accuracy</p>
          </div>
          <div className="p-6 border border-accent/50 bg-accent/10 rounded-lg">
            <div className="text-3xl font-bold text-accent mb-2">7</div>
            <p className="text-muted-foreground">Active Roles & Positions</p>
          </div>
        </div>
      </div>
    </section>
  )
}
