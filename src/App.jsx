 
 
import AboutMeMain from './Component/AboutSection/AboutMeMain'
import ContactMeMain from './Component/ContactMeSection/ContactMeMain'
import ExperianceMain from './Component/Experiance/ExperianceMain'
import FooterMain from './Component/FooterSection/FooterMain'
import HelperSection from './Component/HelperSection'
import HeroGradient from './Component/HeroSection/HeroGradient'
import HeroMain from './Component/HeroSection/HeroMain'
import SubHeroSection from './Component/HeroSection/SubHeroSection'
import NavbarMain from './Component/Navbar/NavbarMain'
import ProjectMain from './Component/Project/ProjectMain'
import SkillsMain from './Component/SkillsSection/SkillsMain'
import SubSkills from './Component/SkillsSection/SubSkills'
function App() {
   

  return (
    <>
       <main className="font-body">
        <NavbarMain></NavbarMain>
        <HeroMain/>
        <HeroGradient/>
        <SubHeroSection></SubHeroSection>
        <AboutMeMain></AboutMeMain>
        <SkillsMain></SkillsMain>
        <SubSkills></SubSkills>
        <ExperianceMain></ExperianceMain>
        <ProjectMain></ProjectMain>
        <ContactMeMain></ContactMeMain>
        <FooterMain></FooterMain>
         
        
       </main>
    </>
  )
}

export default App
