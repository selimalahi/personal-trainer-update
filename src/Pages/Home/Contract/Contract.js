import React from 'react';

const Contract = () => {
    return (
        <div name="contact"className="w-full h-screen bg-gradient-to-b to-gray-800 p-4 text-white bg-black mt-10 pt-16 mb-10 rounded-xl">
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
          <div className=" pb-5">
            <p className="text-4xl font-bold">
              Contact
            </p>
            <h1 className="text-lg ">Request a free consultation</h1>
            <p className="text-lg ">Submit the form below to get in touch with me</p>
          </div>
  
          <div className=" flex justify-center items-center">
            <form
              action="https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6"
              method="POST"
              className=" flex flex-col w-full md:w-1/2"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Enter your message"
                rows="10"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              ></textarea>
  
              <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                Let's talk
              </button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Contract
;