import './App.css'
import { useEffect } from "react";
import { Route, Routes } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";

// component
import Navbar from './components/common/Navbar'
import ScrollToTop from './components/common/ScrollToTop'
import LeadersTemplate from './components/core/LeadersTemplate'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import FinancialSolution from './pages/FinancialSolution'
import Projects from './pages/Projects'
import Career from './pages/Career'
import Contact from './pages/Contact'

import image1 from './assets/images/About_Assets/leader1.png'
import image2 from './assets/images/About_Assets/leader2.png'
import image3 from './assets/images/About_Assets/leader3.png'
import image4 from './assets/images/About_Assets/leader4.png'
import image5 from './assets/images/About_Assets/leader5.png'

function App() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className='flex flex-col w-screen min-h-screen font-poppins bg-[#F7F9FB]'>
      <Navbar />  
      <ScrollToTop />

      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/about-us' element={<About />} />
        <Route path='/services' element={<Service />} />
        <Route path='/financial-solutions' element={<FinancialSolution />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/careers' element={<Career />} />
        <Route path='/contact-us' element={<Contact />} />

        <Route 
          path='/neeraj-kumar' 
          element={<LeadersTemplate 
            image={image1} 
            name={"NEERAJ KUMAR"} designation={"-CEO"} 
            property={"-right-75"} 
            about={
              ["Ravi Gupta is a PMP-certified Engineering Graduate with over 20 years of extensive experience in Business Operations, Project and Program Management, and Service Delivery across diverse sectors including Telecom, Smart Cities, Mobility & Transport, and Urban Infrastructure. His career is built on successfully delivering complex ICT/ITES/EPC projects, driving innovation, and aligning operations with strategic business objectives.",
              "As the Business Head at NexGen, Ravi leads the end-to-end management of business pipelines across key verticals—Telecom, EV Charging, and Renewable Energy. He is responsible for driving strategic growth, market expansion, and ensuring operational excellence, while effectively aligning cross-functional teams to achieve long-term organizational goals.",
              "Throughout his career, Ravi has spearheaded several high-value and mission-critical projects, including:",
              ["Bhorgarh Industrial Area IoT-Based Street Lighting – valued at INR 112 million",
              "Guwahati Spine Roads Lighting Project – valued at INR 250 million",
              "Vadodara Smart City Project – awarded SKOCH and Business World Awards",
              "World’s Largest Network Consolidation Project – for Vodafone and Idea",
              "Mumbai Trans-Harbour Link ITMS Implementation (ATAL SETU) – valued at INR 1,890 million"
              ],
              "His experience also includes integrating city data systems using AI and ML technologies, demonstrating his ability to lead technologically advanced and future-ready solutions.",
              "Ravi’s professional development includes certifications in PMP, Six Sigma Green Belt, ITIL, Agile, and Scrum. These credentials reflect his deep commitment to process excellence, continuous improvement, and collaborative leadership. His strategic approach and operational insight have consistently led to minimized productivity gaps, enhanced value delivery, and significant contributions to organizational growth."              
              ]
            }
          />} 
        />

        <Route 
          path='/vikas-mishra' 
          element={<LeadersTemplate 
            image={image2} 
            name={"VIKAS MISHRA"} 
            designation={"-CFO"} 
            property={"-right-70"}  
            about={
              ["Vikash Kumar Mishra has been serving as the Chief Financial Officer at NexGen since 2023, bringing with him over 18 years of strategic leadership and financial expertise across diverse domains. He is a proactive, result-oriented finance professional with a proven track record in driving financial transformation, ensuring fiscal discipline, and enabling sustainable business growth.",
              "With extensive cross-functional experience, Vikash has led initiatives in Corporate Finance, Fund Raising, Financial Restructuring, and Business Process Optimization. His expertise spans Resource Management, Cost Control, SOP development, Performance Appraisal Matrices, and Strategic Realignments—all aimed at building a financially agile organization.",
              "At NexGen, Vikash plays a pivotal role in:",
              ["Leading the organization’s financial planning, analysis, and reporting functions",
              "Driving fundraising strategies, investor relations, and aligning financial resources with strategic priorities",
              "Ensuring regulatory and compliance adherence, audit governance, and risk mitigation",
              "Overseeing cash flow management, budgeting, and cost optimization initiatives",
              "Partnering with business heads to evaluate project viability, performance, and return on investment (ROI)",
              "Facilitating due diligence, preparation of Business Models, IMs, DPRs, and valuation for investors and financial institutions",
              "Enhancing operational efficiency through automation, control frameworks, and performance-driven reporting structures"
              ],
              "Vikash has also contributed significantly in legal and arbitration areas, including quantification of damages in proceedings, working closely with legal and finance teams for tribunal and arbitration matters.",
              "A firm believer in nurturing talent and building high-performing teams, Vikash’s leadership style is grounded in empowerment, accountability, and empathy. His personal mantras — “Make me the in-charge, and it will be done” and “Keep smiling, always” — reflect his dedication, resilience, and positive spirit."              
              ]
            }
        />} />

        <Route 
          path='/ashish-gupta'  
          element={<LeadersTemplate 
            image={image3} 
            name={"ASHISH GUPTA"} 
            designation={"-Director Projects"} 
            property={"-right-72"} 
            about={
              ["Ashish Gupta is a seasoned engineering and project management professional with over 17 years of rich and diverse experience in Infrastructure Utilities, Project Execution, Quality Control, Engineering Operations, and Telecom Energy Systems. Currently serving as the Director – Projects at NexGen, he plays a pivotal role in driving large-scale infrastructures & renewables deployments and delivering operational excellence across various business verticals.",
              "Ashish is a flexible & solution driven individual with a hands-on leadership in executing and managing complex projects including telecom, renewable energy, Digital infrastructure, EV charging systems, special energy-saving programs & transmission.",
              "At NexGen, his core responsibilities include:",
              ["Leading multiple high-value projects from estimation to completion, ensuring alignment with business goals",
              "Standardizing project management processes, SOPs, and driving continuous improvement initiatives",
              "Managing project P&L, revenue planning, cash flow, and stakeholder communication",
              "Supporting pre-sales through technical solutioning, RFP preparation, and bid management",
              "Supporting pre-sales through technical solutioning, RFP preparation, and bid management",
              "Driving automation, project tracking systems, and performance monitoring frameworks",
              "Collaborating with cross-functional teams for new product development and implementation",
              "Resource management, team mentoring, and fostering a culture of accountability and delivery excellence"
              ],
              "His expertise extends to contract lifecycle management, quality assurance, production optimization, vendor engagement, and deployment of technological innovations across telecom and smart infrastructure projects.",
              "Ashish is recognized for his commitment to quality, structured problem-solving, and strategic execution. He has consistently delivered performance outcomes that exceed expectations and add significant value to the organization. A believer in “Make me the in-charge, and it will be done” and “Keep smiling, always,” his leadership style reflects optimism, ownership, and resilience."              
              ]
            }
        />} />

        <Route 
          path='/ravi-gupta' 
          element={<LeadersTemplate 
            image={image4} 
            name={"RAVI GUPTA"} 
            designation={"-Business Head"} 
            property={"-right-62"} 
            about={
              ["Ravi Gupta is a PMP-certified Engineering Graduate with over 20 years of extensive experience in Business Operations, Project and Program Management, and Service Delivery across diverse sectors including Telecom, Smart Cities, Mobility & Transport, and Urban Infrastructure. His career is built on successfully delivering complex ICT/ITES/EPC projects, driving innovation, and aligning operations with strategic business objectives.",
              "As the Business Head at NexGen, Ravi leads the end-to-end management of business pipelines across key verticals—Telecom, EV Charging, and Renewable Energy. He is responsible for driving strategic growth, market expansion, and ensuring operational excellence, while effectively aligning cross-functional teams to achieve long-term organizational goals.",
              "Throughout his career, Ravi has spearheaded several high-value and mission-critical projects, including:",
              ["Bhorgarh Industrial Area IoT-Based Street Lighting – valued at INR 112 million",
              "Guwahati Spine Roads Lighting Project – valued at INR 250 million",
              "Vadodara Smart City Project – awarded SKOCH and Business World Awards",
              "World’s Largest Network Consolidation Project – for Vodafone and Idea",
              "Mumbai Trans-Harbour Link ITMS Implementation (ATAL SETU) – valued at INR 1,890 million"
              ],
              "His experience also includes integrating city data systems using AI and ML technologies, demonstrating his ability to lead technologically advanced and future-ready solutions.",
              "Ravi’s professional development includes certifications in PMP, Six Sigma Green Belt, ITIL, Agile, and Scrum. These credentials reflect his deep commitment to process excellence, continuous improvement, and collaborative leadership. His strategic approach and operational insight have consistently led to minimized productivity gaps, enhanced value delivery, and significant contributions to organizational growth."              
              ]
            }
        />} />

        <Route 
          path='/hemraj-katariya' 
          element={<LeadersTemplate 
            image={image5} 
            name={"HEMRAJ KATARIYA"} 
            designation={"-CTO"}
            property={"-right-90"}
            about={
              ["Hemraj Kattariya is a dynamic and accomplished professional with over 15 years of experience in Business Operations, Service Delivery, Process Management, and Strategic Leadership within the telecommunications and infrastructure sectors. As the Chief Technology Officer (CTO) at NexGen Digital Infrastructures, he plays a pivotal role in shaping the company’s operational roadmap and technology strategy, while ensuring excellence in service delivery across India.",
              "Hemraj leads a pan-India team of over 120 professionals, directly reporting to the Managing Director, and oversees end-to-end operations and service delivery for leading Telecom OEMs and Service Providers. He is known for his ability to balance strategic planning with operational execution, delivering consistent value to clients and stakeholders.",
              "Key Responsibilities at NexGen:",
              ["Leading nationwide service delivery operations with a focus on efficiency, quality, and client satisfaction",
              "Driving operational strategy and technological execution, ensuring alignment with business growth objectives",
              "Managing vendor relationships, performance contracts, and process optimization across multi-location projects",
              "Developing and mentoring high-performing teams while instilling a culture of accountability and innovation",
              "Ensuring seamless execution of customer-centric solutions, meeting SLAs and compliance standards",
              "Spearheading project management initiatives, resource planning, and operational governance",
              "Collaborating with leadership for business development and strategic partnerships"
              ],
              "Hemraj is a results-driven technology leader with a strong foundation in people management, scalable operations, and client engagement. He aspires to take on increasingly challenging leadership roles in Service Delivery, Operations Management, and Customer Relationship Management, with a vision to drive business transformation and growth.",
              "His commitment to operational excellence and forward-looking leadership continues to elevate NexGen’s position as a reliable and innovative service partner in the telecom and infrastructure industry."              
              ]
            }
        />} />

      </Routes>
    </div>
  )
}

export default App
