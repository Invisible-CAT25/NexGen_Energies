import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import CountryCode from "../../../data/countrycode.json"


function ContactUsFormMD() {
  const [state, handleSubmit] = useForm("myzwokyz");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }

  return (
    <form 
    className="flex flex-col gap-7"
    onSubmit={handleSubmit}>

      <div className="flex flex-col gap-5 lg:flex-row">
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="firstName" className="lable-style">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Enter first name"
            className="form-style"
          />
          <ValidationError 
            prefix="firstName" 
            field="firstName"
            errors={state.errors}
          />
        </div>
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="lastName" className="lable-style">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Enter last name"
            className="form-style"
          />
          <ValidationError 
            prefix="lastName" 
            field="lastName"
            errors={state.errors}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="lable-style">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email address"
          className="form-style"
        />
        <ValidationError 
            prefix="email" 
            field="email"
            errors={state.errors}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phonenumber" className="lable-style">
          Phone Number
        </label>

        <div className="flex gap-5">
          <div className="flex w-[81px] flex-col gap-2">
            <select
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Enter first name"
              className="form-style"
            >
              {CountryCode.map((ele, i) => {
                return (
                  <option key={i} value={ele.code}>
                    {ele.code}
                  </option>
                )
              })}
            </select>
          </div>
          <div className="flex w-[calc(100%-90px)] flex-col gap-2">
            <input
              type="tel"
              name="phonenumber"
              id="phonenumber"
              placeholder="12345 67890"
              className="form-style"
            />
            <ValidationError 
                prefix="phonenumber" 
                field="phonenumber"
                errors={state.errors}
            />
          </div>
        </div>
        
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="lable-style">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="7"
          placeholder="Enter your message here"
          className="form-style"
        />
        <ValidationError 
            prefix="message" 
            field="message"
            errors={state.errors}
        />
        
      </div>

      <button
        disabled={state.submitting}
        type="submit"
        className={`rounded-md bg-yellow-50 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
         ${
           !state.submitting &&
           "transition-all duration-200 hover:scale-95 hover:shadow-none"
         }  disabled:bg-richblack-500 sm:text-[16px] `}
      >
        Send Message
      </button>
    </form>
  );
}

export default ContactUsFormMD;