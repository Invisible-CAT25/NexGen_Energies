import React, { useEffect, lazy, Suspense } from "react"
import { motion } from "framer-motion"
import smoothscroll from "smoothscroll-polyfill"
import HighlightText from "../components/common/HighlightText"

const HeroSection = lazy(() => import("../components/core/HeroSection"))
const ContactDetails = lazy(() => import("../components/core/ContactUsPage/ContactDetails"))
const ContactForm = lazy(() => import("../components/core/ContactUsPage/ContactForm"))
const OfficeLocationMap = lazy(() => import("../components/core/ContactUsPage/OfficeLocationMap"))
const Footer = lazy(() => import("../components/common/Footer"))

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us | NexGen Energies"
    window.scrollTo(0, 0)
    smoothscroll.polyfill()
  }, [])

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth overflow-x-hidden">
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        {/* Hero Section */}
        <motion.section
          className="snap-start snap-always"
          variants={sectionVariants}
          viewport={{ once: true }}
        >
          <HeroSection title={"Contact Us"} />

          <div className="w-11/12 mx-auto flex flex-col justify-between gap-10 pt-20 lg:flex-row">
            <div className="lg:w-[40%]">
              <ContactDetails />
            </div>
            <div className="lg:w-[60%]">
              <ContactForm />
            </div>
          </div>

          <div className="w-11/12 mx-auto flex flex-col justify-between items-center pt-20 relative z-0 ">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <HighlightText text="Our Offices" />
            </motion.h2>
            <OfficeLocationMap />
          </div>



          <Footer />
        </motion.section>
      </Suspense>
    </main>
  )
}

export default Contact
