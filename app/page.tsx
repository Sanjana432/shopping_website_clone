import { PortfolioNav } from "@/components/portfolio/nav"
import { PortfolioHero } from "@/components/portfolio/hero"
import { PortfolioExperience } from "@/components/portfolio/experience"
import { PortfolioSkills } from "@/components/portfolio/skills"
import { PortfolioContact } from "@/components/portfolio/contact"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PortfolioNav />
      <main>
        <PortfolioHero />
        <PortfolioExperience />
        <PortfolioSkills />
        <PortfolioContact />
      </main>
    </div>
  )
}
