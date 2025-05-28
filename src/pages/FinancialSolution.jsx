import React, { useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';

// Lazy load heavy sections
const HeroSection = lazy(() => import('../components/core/HeroSection'))
const SectionTemplate = lazy(() => import('../components/core/SectionTemplate'));
const Footer = lazy(() => import('../components/common/Footer'))

const Service = () => {
  useEffect(() => {
    document.title = "Financial Solutions | NexGen Energies";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="snap-y snap-mandatory overflow-y-scroll scroll-smooth h-screen overflow-x-hidden">
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="snap-start">
          <HeroSection title="Financial Solutions" />
          <SectionTemplate 
            name={"CAPEX"} 
            description={"Under the CAPEX (Capital Expenditure) model, the customer fully owns the rooftop solar power system. This model is ideal for businesses and individuals looking to reduce long-term electricity costs through direct investment in solar infrastructure. The customer is responsible for the entire upfront capital expenditure and, in return, benefits from significant savings on energy bills by generating their own clean and renewable power. All financial gains from tariff savings accrue directly to the customer, who also retains ownership of both the rooftop and the solar plant. Furthermore, clients can take advantage of accelerated depreciation benefits of up to 80%, improving the overall return on investment and reducing the payback period. To ensure seamless performance and efficiency, our expert EPC (Engineering, Procurement, and Construction) team offers comprehensive annual operations and maintenance (O&M) services at a mutually agreed cost. This ensures your solar plant operates optimally throughout its lifecycle."} 
          />
          <SectionTemplate name={"OPEX"} active={true} description={"Under the OPEX (Operational Expenditure) Model, the solar power plant is owned and operated by a third-party investor or energy company, such as RESCO or ENERCON. In this structure, the customer does not invest in or own the solar system. Instead, the customer signs a long-term Power Purchase Agreement (PPA) or Energy Agreement with the energy provider at a mutually agreed tariff and tenure. This model allows the customer to pay only for the electricity consumed, based on a pre-determined per-unit rate (₹/kWh)—similar to paying a monthly utility bill. All aspects of the installation, performance monitoring, and annual operations & maintenance (O&M) are handled entirely by the RESCO developer, ensuring seamless energy generation with zero capital expenditure from the customer’s side. The OPEX model is ideal for commercial and industrial consumers looking to reduce their electricity costs, meet their sustainability goals, and transition to clean energy—without incurring the upfront cost of solar infrastructure."} />
          <SectionTemplate name={"DEFERRED CAPEX"} description={"The Deferred CAPEX Model offers a strategic blend of ownership and financial convenience. In this model, the customer owns the solar power asset while enjoying the benefit of deferred or structured capital investment. This approach provides greater control over energy generation and long-term savings without requiring the full upfront expenditure typically associated with traditional CAPEX models. One of the major advantages of this model is the eligibility to claim accelerated depreciation benefits, allowing customers to significantly reduce their taxable income and improve project ROI. By owning the solar asset, businesses can also leverage the benefits of green branding, sustainability compliance, and long-term energy independence. Ideal for businesses seeking asset ownership, tax incentives, and structured payments, the Deferred CAPEX Model bridges the gap between upfront capital investment and long-term financial returns through solar power."} />
          <Footer />
        </motion.div>
      </Suspense>
    </div>
  );
};

export default Service;
