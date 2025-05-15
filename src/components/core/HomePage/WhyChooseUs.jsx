import React from 'react'
import HighlightText from '../../common/HighlightText';
import bgImage from '../../../assets/images/Home_Assets/choose_us_bg.png'
import Icon1 from '../../../assets/images/Home_Assets/subLogo1.png'
import Icon2 from '../../../assets/images/Home_Assets/subLogo2.png'
import Icon3 from '../../../assets/images/Home_Assets/subLogo3.png'
import Icon4 from '../../../assets/images/Home_Assets/subLogo4.png'
import Icon5 from '../../../assets/images/Home_Assets/subLogo5.png'
import Icon6 from '../../../assets/images/Home_Assets/subLogo6.png'

const features = [
  {
    icon: <img src={Icon1} />,
    title: "Best Commercial Rooftop Solar Partner",
    description: "Trusted by businesses for reliable, high-performance rooftop solutions."
  },
  {
    icon: <img src={Icon2} />,
    title: "Best Quality at the Right Price",
    description: "Premium products and services that fit your budget."
  },
  {
    icon: <img src={Icon3} />,
    title: "Team of Trusted Professionals",
    description: "Finance options designed to match your business goals."
  },
  {
    icon: <img src={Icon4} />,
    title: "Timely Project Delivery",
    description: "We value your time. Our team ensures on-time execution with no compromises."
  },
  {
    icon: <img src={Icon5} />,
    title: "Easy & Flexible Payments Methods",
    description: "Premium products and services that fit your budget."
  },
  {
    icon: <img src={Icon6} />,
    title: "End to End Solutions Provider",
    description: "Finance options designed to match your business goals."
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-11/12 mx-auto flex flex-col justify-center items-center gap-8 mt-20">
      
        <h2 className="text-3xl md:text-[2.5rem] font-bold">
          <HighlightText text={"Why Choose Us?"} />
        </h2>

        <div className="w-screen h-full bg-cover bg-center bg-no-repeat p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        style={{ backgroundImage: `url(${bgImage})`}}>
            {features.map((feature, index) => (
            <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-300 flex flex-col justify-center items-center gap-6"
            >
                {feature.icon}
                <h3 className="text-2xl font-semibold w-[80%]">{feature.title}</h3>
                <p className="text-gray-600 w-[90%] text-[17px]">{feature.description}</p>
            </div>
            ))}
        </div>
    </section>
  );
};

export default WhyChooseUs;
