import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function Form({ form }) {
  useEffect(() => {
    import("react-toastify/dist/ReactToastify.css");
  }, []);
  // State hooks to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    category: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formParams = new URLSearchParams();
    for (const key in formData) {
      formParams.append(key, formData[key]);
    }
    formParams.append("access_key", `${form.data.accessKey}`);
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formParams,
        mode: "no-cors",
      });
      toast.success("Form Submitted Succesfully");
      setFormData({
        name: "",
        email: "",
        budget: "",
        category: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div
      className='w-540 bg-r-black rounded-xl flex-grow-0 flex-shrink basis-auto p-10 max-xl:w-full max-sm:px-5 max-sm:py-30'
      data-aos='fade-up'
      data-aos-duration='1500'>
      <ToastContainer />
      <div className='text-white tracking-tighth text-26xl font-bold leading-34 my-0 font-fraunces max-sm:text-xl max-sm:leading-6'>
        {form.data.formTitle}
      </div>
      <div className='mt-18 mb-0'>
        <div id='contact-form'>
          <form id='form' onSubmit={handleSubmit}>
            <div className='items-center mb-4 flex relative'>
              <input
                type='text'
                id='name'
                className='w-full h-38 text-white placeholder:text-dark-liver placeholder:text-base
                         align-middle py-2 px-3 text-sm leading-1.4 block min-h-052 bg-charleston-green border border-charleston-green rounded-md mb-0 pl-13'
                required
                placeholder={form.data.namePlaceholder}
                value={formData.name}
                onChange={handleChange}
              />
              <img
                src='/image/contact/name.svg'
                className='ml-4 absolute'
                alt='name-icon'
                height={30}
                width={30}
                loading='lazy'
                decoding='async'
              />
            </div>
            <div className='items-center mb-4 flex relative'>
              <input
                type='email'
                id='email'
                className='w-full h-38 text-white placeholder:text-dark-liver placeholder:text-base
                         align-middle py-2 px-3 text-sm leading-1.4 block min-h-052 bg-charleston-green border border-charleston-green rounded-md mb-0 pl-13'
                required
                placeholder={form.data.emailPlaceholder}
                value={formData.email}
                onChange={handleChange}
              />
              <img
                src='/image/contact/email.svg'
                className='ml-4 absolute'
                alt='email-icon'
                height={30}
                width={30}
                loading='lazy'
                decoding='async'
              />
            </div>
            {/* <div className='justify-between flex max-lg:flex-col max-xl:gap-30 max-lg:gap-0'>
              <div className='w-222 items-center mb-4 flex relative max-xl:w-full'>
                <img
                  src='/image/contact/budget.svg'
                  className='ml-4 absolute'
                  alt={"budget"}
                  height={30}
                  width={30}
                  loading='lazy'
                  decoding='async'
                />
                <select
                  aria-label='Dropdown1'
                  className="w-full h-38 text-white align-middle py-2 px-3 text-sm leading-1.4 block min-h-052 bg-charleston-green border border-charleston-green rounded-md mb-0 pl-13 !bg-[url('/image/contact/dropdown.svg')]"
                  required
                  id='budget'
                  value={formData.budget}
                  onChange={handleChange}>
                  <option value='' disabled selected>
                    {form.data.dropdown1.placeholder}
                  </option>
                  {form.data.dropdown1.values.map((value) => (
                    <option key={value}>{value}</option>
                  ))}
                </select>
              </div>
              <div className='w-222 items-center mb-4 flex relative max-xl:w-full'>
                <img
                  src='/image/contact/Categories.svg'
                  className='ml-4 absolute'
                  alt={"category"}
                  height={30}
                  width={30}
                  loading='lazy'
                  decoding='async'
                />
                <select
                  aria-label='Dropdow2'
                  className="w-full h-38 text-white align-middle py-2 px-3 text-sm leading-1.4 block min-h-052 bg-charleston-green border border-charleston-green rounded-md mb-0 pl-13 !bg-[url('/image/contact/dropdown.svg')] max-sm:min-h-150"
                  id='category'
                  value={formData.category}
                  onChange={handleChange}>
                  <option value='' disabled selected>
                    {form.data.dropdown2.placeholder}
                  </option>
                  {form.data.dropdown2.values.map((value) => (
                    <option key={value}>{value}</option>
                  ))}
                </select>
              </div>
            </div> */}
            <div className='items-start flex relative'>
              <textarea
                id='message'
                className='h-auto min-h-170 bg-charleston-green border border-charleston-green rounded-md pt-07 pl-13 w-full text-white align-middle py-2 px-3 text-sm leading-1.4 block placeholder:text-dark-liver placeholder:text-base'
                placeholder={form.data.messagePlaceholder}
                value={formData.message}
                onChange={handleChange}></textarea>
              <img
                src='/image/contact/message.svg'
                className='mt-014 ml-4 absolute'
                alt='Message'
                height={30}
                width={30}
                loading='lazy'
                decoding='async'
              />
            </div>
            <input
              type='submit'
              id='myButton'
              className='w-full mt-8 bg-white text-black-strom rounded-sm1 py-3 px-6 text-base font-medium leading-6 transition-opacity duration-300 cursor-pointer border-0 no-underline inline-block hover:bg-chi-white'
              value='Send Message'
            />
          </form>
        </div>
        <div
          className='text-center bg-gainsboro p-5'
          style={{ display: "none" }}
          id='contact-success'>
          <div className='text-dark-charcoal text-sm'>
            {form.data.submitMessage}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
