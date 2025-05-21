import React, {useEffect} from 'react'
import ProjectHeroSection from '../components/core/ProjectPage/ProjectHeroSection'
import Project from '../components/core/ProjectPage/Project'
import Footer from '../components/common/Footer'
import FinancialHeroSection from '../components/core/FSolutionsPage/FinancialHeroSection'

const FinancialSolution = () => {
    useEffect(() => {
        document.title = "Financial Solutions | NexGen Energies";
    }, [])

  return (
    <div>
        <FinancialHeroSection />

        <Project name={"CAPEX"} />
        <Project active={true} name={"OPEX"} />
        <Project name={"Deffered CAPEX"} />

        {/* <Map /> */}
        <Footer />

    </div>
  )
}

export default FinancialSolution