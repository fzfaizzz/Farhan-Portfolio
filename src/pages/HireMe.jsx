import React, { useRef } from "react";
import { AiOutlinePhone, AiOutlineMail, AiOutlineGlobal } from "react-icons/ai";
import emailjs from "emailjs-com";
import { Toaster, toast } from "react-hot-toast";
import Header from "../component/Header";

function HireMe() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_sutkj9s', 'template_emlmiiu', formRef.current, 'XejmapJ86pj9bpUp-')
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          toast.error("An error occurred, please try again.");
        }
      );

    e.target.reset(); 
  };

  return (
    <div className="h-screen relative bg-white p-5 flex items-center justify-center">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="h-full p-5 w-full  bg-black rounded-3xl overflow-hidden bg-cover bg-[url('https://static.wixstatic.com/media/f1c650_e5c1c4b281ea418a8663a17e66f283f1~mv2.png/v1/fill/w_777,h_668,al_c,q_90,enc_auto/triangle%203.png')]">
        <img
          className="absolute h-14 w-14 ml-4 md:h-20 md:w-20 md:ml-10"
          src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_140,h_140,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png"
          alt=""
        />

        {/* Header with right padding */}
        <div className="pr-4 md:pr-10 absolute -left-10 -mt-10">
         <Header/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="flex flex-col justify-center items-start p-8 md:p-12 space-y-4 text-white">
            <h1 className="text-6xl md:text-7xl leading-[0vh] font-[anzo1]">
              FARHAN
            </h1>
            <h2 className="md:text-[39px] text-[32px] leading-tight md:leading-[0vw] md:mt-10">
              AKHTAR HAMZA
            </h2>
          </div>

          {/* Contact Us Form with Glass Effect */}
          <div className="flex flex-col bg-none -mt-36 justify-center items-start p- md:pl-5 space-y-4 md:bg-gray-00/10 md:backdrop-blur-sm text-white rounded-xl shadow-lg mx-4 md:mx-8">
            <form ref={formRef} onSubmit={sendEmail} className="w-full sm:mt-36 space-y-6">
              <input
                type="text"
                required
                name="user_name"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-800/60 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              />
              <input
                type="email"
                required
                name="user_email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-gray-800/60 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              />
              <textarea
                name="message"
                required
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-3 rounded-lg bg-gray-800/60 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              ></textarea>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold shadow-lg transform hover:scale-105 transition-transform duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="mt-6 space-y-3 absolute text-white hidden md:inline-block bottom-16 left-[85px] text-base md:text-lg">
            <p className="flex items-center space-x-2">
              <AiOutlinePhone className="text-gray-400" />
              <span className="font-semibold">+91 9580345032</span>
            </p>
            <p className="flex items-center space-x-2">
              <AiOutlineMail className="text-gray-400" />
              <span className="font-semibold">akhtarfarhan658@gmail.com</span>
            </p>
            <p className="flex items-center space-x-2">
              <AiOutlineGlobal className="text-gray-400" />
              <span className="font-semibold">farhan.studio</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HireMe;
