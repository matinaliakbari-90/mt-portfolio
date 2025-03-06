import AboutMain from "./components/aboutSection/AboutMain"
import ContactMain from "./components/contactMeSection/ContactMain"
import ExperienceMain from "./components/experienceSection/ExperienceMain"
import FooterMain from "./components/footer/FooterMain"
// import HelperSection from "./components/HelperSection"
import HeroMain from "./components/heroSection/HeroMain"
import NavbarMain from "./components/navbar/NavbarMain"
import ProjectsMain from "./components/projectsSection/ProjectsMain"
import SkillsMain from "./components/skillsMeSection/SkillsMain"

function App() {
  return (
    <div className="relative overflow-hidden text-white font-body">
      <NavbarMain />
      <HeroMain />
      <AboutMain />
      <SkillsMain />
      <ExperienceMain />
      <ProjectsMain />
      <ContactMain />
      <FooterMain />
    </div>
  )
}

export default App
