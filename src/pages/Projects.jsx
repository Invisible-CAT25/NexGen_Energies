import React, {useEffect} from 'react'
import ProjectHeroSection from '../components/core/ProjectPage/ProjectHeroSection'
import Project from '../components/core/ProjectPage/Project'
import Map from '../components/core/ProjectPage/Map'
import Footer from '../components/common/Footer'
import hellosvg from '../assets/images/hellosvg.svg'

const Projects = () => {
    useEffect(() => {
        document.title = "Projects | NexGen Energies";
    }, [])

  return (
    <div>
        <ProjectHeroSection />

        <Project name={"Continental"} />
        <Project active={true} name={"Continental"}/>
        <Project name={"Continental"}/>
        <Project active={true} name={"Continental"}/>

        {/* <Map /> */}
        <Footer />

    </div>
  )
}

export default Projects