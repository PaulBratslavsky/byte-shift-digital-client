import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function NewsLetterForm({ accessKey }) {
  useEffect(() => {
    import("react-toastify/dist/ReactToastify.css");
  }, []);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formParams = new URLSearchParams();
    formParams.append("fullName", fullName);
    formParams.append("email", email);
    formParams.append("access_key", `${accessKey}`);
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formParams,
        mode: "no-cors",
      });
      toast.success("Form Submitted Successfully");
      setEmail("");
      setFullName("");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <ToastContainer />
      <div className='min-h-12 flex relative mb-010 items-center'>
        <input
          type='text'
          className='min-h-12 bg-raisin-black border placeholder:text-dark-silver placeholder:text-base text-white border-raisin-black rounded-sm1 mb-0 py-3 pl-13 w-full h-38 align-middle pr-3 text-sm leading-1.4 block'
          placeholder='Full Name'
          value={fullName}
          onChange={handleFullNameChange}
          required
        />
        <img
          alt={"Blog-form"}
          src='/image/blog-form1.svg'
          className='-mt-1 ml-5 absolute'
          height={20}
          width={20}
          loading='lazy'
          decoding='async'
        />
      </div>
      <div className='min-h-12 flex relative mb-010 items-center'>
        <input
          type='email'
          className='min-h-12 bg-raisin-black border placeholder:text-dark-silver placeholder:text-base border-raisin-black rounded-sm1 mb-0 py-3 pl-13 w-full h-38 text-white align-middle pr-3 text-sm leading-1.4 block'
          placeholder='E-mail'
          value={email}
          onChange={handleEmailChange}
          required
        />
        <img
          src='/image/blog-form2.svg'
          className='-mt-1 ml-5 absolute'
          alt='form2'
          height={20}
          width={20}
          loading='lazy'
          decoding='async'
        />
      </div>
      <input
        type='submit'
        className='w-full text-center cursor-pointer bg-white text-black-strom rounded-sm1 py-3 px-6 text-base font-medium leading-6 transition-opacity duration-300 max-sm:py-010 max-sm:px-5 hover:bg-ch-white'
        value='Sign Up Now'
      />
    </form>
  );
}

export default NewsLetterForm;
