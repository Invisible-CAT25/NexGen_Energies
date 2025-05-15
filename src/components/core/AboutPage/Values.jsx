import {
  Users,
  Lightbulb,
  ShieldCheck,
  Target,
  TrendingUp,
  UserCheck,
  Infinity,
  Handshake
} from 'lucide-react';

import HighlightText from '../../common/HighlightText';
import e from '../../../assets/images/About_Assets/e.png'
import t from '../../../assets/images/About_Assets/t.png'
import h from '../../../assets/images/About_Assets/h.png'
import i from '../../../assets/images/About_Assets/i.png'
import c from '../../../assets/images/About_Assets/c.png'
import a from '../../../assets/images/About_Assets/a.png'
import l from '../../../assets/images/About_Assets/l.png'

const values = [
  {
    title: "Empowerment",
    icon: <img src={e} height={50} width={50} />,
    description: "By empowering every team member, we fuel innovation, encourage bold ideas, value every voice and drive collective success."
  },
  {
    title: "Team Work",
    icon: <img src={t} height={50} width={50} />,
    description: "Collaboration fuels our teamwork, helping us harness diverse ideas and achieve powerful outcomes together."
  },
  {
    title: "Honesty",
    icon: <img src={h} height={50} width={50} />,
    description: "Integrity builds trust, strengthens partnerships, and shapes our reputation through honesty and accountability."
  },
  {
    title: "Innovative",
    icon: <img src={i} height={50} width={50} />,
    description: "Innovation drives progress. By fostering creativity, agility, and forward-thinking, we meet evolving needs with impactful, future-ready solutions."
  },
  {
    title: "Customer-Centric",
    icon: <img src={c} height={50} width={50} />,
    description: "Clients are our core. By prioritizing their evolving needs and exceeding expectations, we build trusted relationships that drive meaningful growth."
  },
  {
    title: "Accountability",
    icon: <img src={a} height={50} width={50} />,
    description: "Owning our actions end-to-end strengthens culture, deepens stakeholder trust, and fuels promise-driven performance. Accountability is our foundation."
  },
  {
    title: "Limitless",
    icon: <img src={l} height={50} width={50} />,
    description: "We believe in growth without boundaries. By fostering a limitless mindset, we challenge ourselves to push for excellence and explore new possibilities."
  }
];

const Values = () => {
  return (
    <section className="w-11/12 mx-auto px-4 mt-20" aria-labelledby="our-values-heading">
      <h2 id="our-values-heading" className="text-3xl md:text-[2.5rem] font-bold text-center text-gradient mb-8">
        <HighlightText text={"Our Values"} />
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-11">
        {/* Vertical Label */}
        <div className="bg-gradient-to-b from-[#5078B9] to-[#4BBB93] text-white font-semibold text-8xl px-6 py-12 rounded-2xl text-center md:min-w-[322px] hidden md:block">
          <div className="flex flex-col items-center justify-center gap-6">
            {"ETHICAL".split("").map((letter, index) => (
              <span key={index}>{letter}</span>
            ))}
          </div>
        </div>

        {/* Values List */}
        <div className="flex-1 grid sm:grid-cols-1 gap-8">
          {values.map((value, index) => (
            <div key={index} className="flex items-start gap-11">
              <div className="flex-shrink-0 h-full flex items-center justify-center">
                {value.icon}
              </div>
              <div className='flex flex-col gap-3'>
                <h3 className="text-2xl font-semibold">{value.title}</h3>
                <p className="text-gray-600 text-[17px]">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;