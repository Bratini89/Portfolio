import React from "react";

const Contact = () => {
  return (
    <div style={{boxShadow: "3px 3px 10px 3px lightblue"}} id="contact" className="max-w-[1040px] m-auto  md:pl-20 p-4 py-16  bg-slate-400/10 rounded-lg">
      <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">
        Contact
      </h1>
      <form
        action="https://getform.io/f/5149d20f-edf0-43bd-a58b-1a7b24abf2cc"
        method="POST"
        encType="multipart-form-data"
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Name</label>
            <input style={{boxShadow: "3px 3px 10px 3px lightblue"}}
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Phone</label>
            <input style={{boxShadow: "3px 3px 10px 3px lightblue"}}
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="phone"
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Email</label>
          <input style={{boxShadow: "3px 3px 10px 3px lightblue"}}
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="email"
            name="email"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Subject</label>
          <input style={{boxShadow: "3px 3px 10px 3px lightblue"}}
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="text"
            name="subject"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Message</label>
          <textarea style={{boxShadow: "3px 3px 10px 3px lightblue"}}
            className="border-2 rounded-lg p-3 border-gray-300"
            rows="10"
            name="message"
          ></textarea>
        </div>
        <button className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
