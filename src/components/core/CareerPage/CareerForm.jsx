import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import toast from "react-hot-toast";

import { motion, AnimatePresence } from "framer-motion";
import { apiConnector } from "../../../services/apiConnector";
import { applicationEndpoint } from "../../../services/apis";

const steps = ["Personal Information", "Job Details", "Uploads"];

export default function JobApplicationForm() {
  const [step, setStep] = useState(0);
  const [fileName, setFileName] = useState("Choose resume file (PDF, DOC, DOCX)");

  const {
    register,
    handleSubmit,
    control,
    reset,
    trigger,
    formState: { errors },
  } = useForm({
    defaultValues: {
      education: [{ institution: "", degree: "", year: "" }],
      employment: [{ company: "", role: "", duration: "" }],
    },
    mode: "onTouched",
  });

  const {
    fields: eduFields,
    append: appendEdu,
    remove: removeEdu,
  } = useFieldArray({ control, name: "education" });

  const {
    fields: empFields,
    append: appendEmp,
    remove: removeEmp,
  } = useFieldArray({ control, name: "employment" });

  const validateStep = async () => {
    const stepFields = [
      ["firstName", "lastName", "email", "phone", "gender", "address"],
      [
        "jobRole",
        "noticePeriod",
        "currentCTC",
        "expectedCTC",
        ...eduFields.map((_, i) => [
          `education.${i}.institution`,
          `education.${i}.degree`,
          `education.${i}.year`,
        ]).flat(),
        ...empFields.map((_, i) => [
          `employment.${i}.company`,
          `employment.${i}.role`,
          `employment.${i}.duration`,
        ]).flat(),
      ],
      ["resume"]
    ];
    return await trigger(stepFields[step]);
  };

  const nextStep = async () => {
    const valid = await validateStep();
    if (valid) setStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  const submitApplicationForm = async (data) => {
    const toastId = toast.loading("Loading...")
    try {
      const formData = new FormData();

      formData.append("resume", data.resume[0]);
      formData.append("data", JSON.stringify(data)); // All form values

      const res = await apiConnector(
        "POST", 
        applicationEndpoint.APPLICATION_API,
        formData,
        { "Content-Type": "multipart/form-data" }
      )

      if(res.data.success) {
        reset();
        setStep(0);
        toast.success("Application Received Successfully!")
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
    catch(error) {
      console.log("ERROR MESSAGE - ", error.message)
      toast.error("Something went wrong")
    }
    toast.dismiss(toastId)
  };

  return (
    <div className="w-11/12 mx-auto mt-20 p-10 bg-white rounded-3xl shadow-md text-[#838894] flex flex-col gap-8"
    style={{ boxShadow: "0 4px 20px rgba(34, 197, 94, 0.3)" }}>
      <h2 className="text-4xl font-semibold text-black text-center">
        Apply for a Role
      </h2>
      <p className="text-center">
        Step {step + 1} of {steps.length}: {steps[step]}
      </p>

      <form onSubmit={handleSubmit(submitApplicationForm)} className="flex flex-col">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div key="step1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: "firstName", label: "First Name", type: "text" },
                  { name: "lastName", label: "Last Name", type: "text" },
                  { name: "email", label: "Email Address", type: "email" },
                  { name: "phone", label: "Phone Number", type: "tel" },
                  { name: "gender", label: "Gender", type: "select", options: ["", "Male", "Female", "Other"] },
                  { name: "address", label: "Current Address" },
                ].map((field, idx) => (
                  <div key={idx} className={field.name === "address" || field.name === "gender" ? "md:col-span-2" : ""}>
                    <label className="block text-black" htmlFor={field.name}>{field.label}</label>
                    {field.type === "select" ? (
                      <select {...register(field.name, { required: true })} className="w-full p-3 mt-1 rounded-lg bg-black/10 text-sm placeholder:text-[#6E727F] text-black">
                        {field.options.map((opt, i) => 
                          <option key={i} value={opt}>{opt || "Select"}</option>
                        )}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
                        id={field.name}
                        placeholder={`Enter ${field.label.toLowerCase()}`}
                        {...register(field.name, { required: true })}
                        className="w-full p-3 mt-1 rounded-lg bg-black/10 text-sm text-black placeholder:text-[#6E727F]"
                      />
                    )}
                    {errors[field.name] && 
                      <span className="text-red-500 text-sm">
                        This field is required
                      </span>}
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div key="step2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: "jobRole", label: "Current Job Role", type: "text", placeholder: "N/A if not applicable" },
                  { name: "noticePeriod", label: "Notice Period", type: "number", placeholder: "e.g. 2 (in days)" },
                  { name: "currentCTC", label: "Current CTC", type: "number", placeholder: "e.g. 5 (in lacs)" },
                  { name: "expectedCTC", label: "Expected CTC", type: "number", placeholder: "e.g. 10 (in lacs)" }
                  ].map((field, idx) => (
                  <div key={idx}>
                    <label className="block text-black" htmlFor={field.name}>{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      id={field.name}
                      placeholder={`${field.placeholder}`}
                      {...register(field.name, { required: true })}
                      className="w-full p-3 mt-1 rounded-lg bg-black/10 text-sm text-black placeholder:text-[#6E727F]"
                    />
                    {errors[field.label] && <span className="text-red-500 text-sm">This field is required</span>}
                  </div>
                ))}

                <div className="md:col-span-2">
                  <label className="block text-black">Education Details</label>
                  {eduFields.map((field, index) => (
                    <div key={field.id} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 relative">
                      {["institution", "degree", "year", "percentage"].map((attr) => (
                        <input
                          key={attr}
                          {...register(`education.${index}.${attr}`, { required: true })}
                          placeholder={attr.charAt(0).toUpperCase() + attr.slice(1)}
                          className="mt-1 p-3 rounded-lg bg-black/10 text-sm text-black placeholder:text-[#6E727F]"
                        />
                      ))}
                      <button type="button" onClick={() => removeEdu(index)} className="absolute top-2 right-2 text-red-500 text-xl font-bold">&times;</button>
                    </div>
                  ))}
                  <button type="button" onClick={() => appendEdu({ institution: "", degree: "", year: "" })} className="text-blue-600 text-sm">+ Add More</button>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-black">Employment History</label>
                  {empFields.map((field, index) => (
                    <div key={field.id} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 relative">
                      {["company", "role", "duration"].map((attr) => (
                        <input
                          key={attr}
                          {...register(`employment.${index}.${attr}`, { required: true })}
                          placeholder={attr.charAt(0).toUpperCase() + attr.slice(1)}
                          className="mt-1 p-3 rounded-lg bg-black/10 text-sm text-black placeholder:text-[#6E727F]"
                        />
                      ))}
                      <button type="button" onClick={() => removeEmp(index)} className="absolute top-2 right-2 text-red-500 text-xl font-bold">&times;</button>
                    </div>
                  ))}
                  <button type="button" onClick={() => appendEmp({ company: "", role: "", duration: "" })} className="text-blue-600 text-sm">+ Add More</button>
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="space-y-6">
                <div>
                    <label className="block text-black">Upload Resume</label>
                    <div className="relative">
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        {...register("resume", {
                          required: true,
                          onChange: (e) => {
                            if (e.target.files.length > 0) {
                              setFileName(e.target.files[0].name);
                            } else {
                              setFileName("Choose resume file (PDF, DOC, DOCX)");
                            }
                          },
                        })}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div className="w-full p-3 mt-1 rounded-lg bg-black/10 text-sm text-black flex items-center justify-between pointer-events-none">
                        <span className={fileName === "Choose resume file (PDF, DOC, DOCX)" ? "text-[#6E727F]" : "text-black font-medium"}>
                          {fileName}  
                        </span>
                        <span className="text-black font-medium">Browse</span>
                      </div>
                    </div>
                    {errors.resume && (
                      <span className="text-red-500 text-sm">This field is required</span>
                    )}
                </div>
                <div>
                  <label className="block text-black">LinkedIn Profile</label>
                  <input {...register("linkedin")} placeholder="https://linkedin.com/in/..." className="w-full p-3 mt-1 rounded-lg bg-black/10 text-sm text-black placeholder:text-[#6E727F]" />
                </div>
                <div>
                  <label className="block text-black">Portfolio URL</label>
                  <input {...register("portfolio")} placeholder="https://yourportfolio.com" className="w-full p-3 mt-1 rounded-lg bg-black/10 text-sm text-black placeholder:text-[#6E727F]" />
                </div>
                <div>
                  <label className="block text-black">Additional Notes</label>
                  <textarea {...register("notes")} placeholder="Any comments or questions?" className="w-full p-3 mt-1 rounded-lg bg-black/10 text-sm text-black placeholder:text-[#6E727F]" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-between mt-8">
          <button type="button" onClick={prevStep} disabled={step === 0} className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50">
            Back
          </button>
          {step === steps.length - 1 ? (
            <button type="submit" className="px-6 py-2 bg-richgreen text-white rounded-lg hover:bg-richblue transition-all duration-200">
              Submit
            </button>
          ) : (
            <button type="button" onClick={nextStep} className="px-6 py-2 bg-richgreen text-white rounded-lg hover:bg-richblue transition-all duration-200">
              Next
            </button>
          )}
        </div>
      </form>
    </div>
  );
}