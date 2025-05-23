import React from "react"
import * as Icon1 from "react-icons/bi"
import * as Icon3 from "react-icons/hi2"
import * as Icon2 from "react-icons/io5"

const contactDetails = [
  {
    icon: "HiChatBubbleLeftRight",
    heading: "Chat on us",
    description: "Our friendly team is here to help.",
    details: "info@nexgenenergies.co.in",
  },
  {
    icon: "BiWorld",
    heading: "Visit us",
    description: "Come and say hello at our office HQ.",
    details:
      "Unit No. 1032, 10th Floor, Tower A, Spaze-I-Tech Park, Sector 49, Sohna Road, Gurugram - 122018",
  },
  {
    icon: "IoCall",
    heading: "Call us",
    description: "Mon - Fri From 8am to 5pm",
    details: "+91 987 039 7770",
  },
]

const ContactDetails = () => {
  return (
    <div className="flex flex-col gap-6 rounded-xl bg-white p-4 lg:p-6"
    style={{ boxShadow: "0 4px 20px rgba(34, 197, 94, 0.3)" }}>
      {contactDetails.map((ele, i) => {
        let Icon = Icon1[ele.icon] || Icon2[ele.icon] || Icon3[ele.icon]
        return (
          <div
            className="flex flex-col gap-[2px] p-3 text-sm text-[#999DAA]"
            key={i}
          >
            <div className="flex flex-row items-center gap-3">
              <Icon size={25} className="text-black" />
              <h1 className="text-lg font-semibold text-black">
                {ele?.heading}
              </h1>
            </div>
            <p className="font-medium">{ele?.description}</p>
            <p className="font-semibold">{ele?.details}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ContactDetails