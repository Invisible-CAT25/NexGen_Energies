import React from 'react'
import HighlightText from '../../common/HighlightText';
import bgImage from '../../../assets/images/Home_Assets/choose_us_bg.png'
import leader from '../../../assets/images/About_Assets/leader.png'
import icon from '../../../assets/images/About_Assets/join_icon.png'

const features = [
    {
        icon: <img src={leader} />,
        title: "Neeraj Kumar",
        description: "-CEO"
    },
    {
        icon: <img src={leader} />,
        title: "Neeraj Kumar",
        description: "-CEO"
    },
    {
        icon: <img src={leader} />,
        title: "Neeraj Kumar",
        description: "-CEO"
    },
    {
        icon: <img src={leader} />,
        title: "Neeraj Kumar",
        description: "-CEO"
    },
    {
        icon: <img src={leader} />,
        title: "Neeraj Kumar",
        description: "-CEO"
    },
];

const Leaders = () => {
  return (
    <section className="w-11/12 mx-auto flex flex-col justify-center items-center gap-8 mt-20">
      
        <h2 className="text-3xl md:text-[2.5rem] font-bold">
          <HighlightText text={"Meet Our Leaders"} />
        </h2>

        <div className="w-screen h-full bg-cover bg-center bg-no-repeat p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        style={{ backgroundImage: `url(${bgImage})`}}>
            {features.map((feature, index) => (
            <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-300 flex flex-col justify-center items-center gap-6"
            >
                <div className='border-b-2 border-gray-600'>
                    {feature.icon}
                </div>
                <div>
                    <h3 className="text-2xl font-semibold w-[100%]">{feature.title}</h3>
                    <p className="text-gray-600 text-[20px]">{feature.description}</p>
                </div>
            </div>
            ))}

            {/* Join our Team */}
            <div
                className="bg-gradient-to-b from-[#5078B9] to-[#4BBB93] rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-300 flex flex-col justify-center items-center gap-6"
            >
                <img src={icon} />
                <h3 className="text-4xl font-semibold w-[100%] text-white">Join Our Team</h3>
            </div>
        </div>
    </section>
  );
};

export default Leaders;
