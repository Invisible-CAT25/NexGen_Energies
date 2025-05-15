import React, {useEffect} from 'react'
import ProjectHeroSection from '../components/core/ProjectPage/ProjectHeroSection'
import Project from '../components/core/ProjectPage/Project'
import Map from '../components/core/ProjectPage/Map'
import Footer from '../components/common/Footer'

const Projects = () => {
    useEffect(() => {
        document.title = "Projects | NexGen Energies";
    }, [])

  return (
    <div>
        <ProjectHeroSection />

        <Project />
        <Project active={true} />
        <Project />
        <Project active={true} />

        <Map />
        <Footer />

    </div>
  )
}

export default Projects