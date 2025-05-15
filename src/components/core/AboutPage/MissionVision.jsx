import React from 'react'
import Icon1 from '../../../assets/images/Home_Assets/subLogo1.png'
import Icon2 from '../../../assets/images/Home_Assets/subLogo2.png'
import Icon3 from '../../../assets/images/Home_Assets/subLogo3.png'

const features = [
  {
    icon: <img src={Icon1} />,
    title: "Our Mission",
    description: "Powering a greener future with clean energy and strong transmission, while reducing carbon emissions for a sustainable tomorrow."
  },
  {
    icon: <img src={Icon2} />,
    title: "Our Vision",
    description: "To lead the way in clean energy by advancing renewable innovation and reliable power transmission for a sustainable planet."
  },
  {
    icon: <img src={Icon3} />,
    title: "Our Goal",
    description: "Achieve 10 GW of renewable energy capacity by 2030 and build strong power transmission networks to support clean energy delivery."
  },
];

const MissionVision = () => {
  return (
    <section className="w-11/12 mx-auto flex flex-col justify-center items-center gap-8 mt-20">

        <div className="w-screen h-full bg-cover bg-center bg-no-repeat p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
            <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-300 flex flex-col justify-center items-center gap-6"
            >
                {feature.icon}
                <h3 className="text-2xl font-semibold w-[80%]">{feature.title}</h3>
                <p className="text-gray-600 text-[20px]">{feature.description}</p>
            </div>
            ))}
        </div>
    </section>
  );
};

export default MissionVision;
