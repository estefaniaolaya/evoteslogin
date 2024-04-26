import React from "react";

function Contact() {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex">
      <div className="w-1/2 pr-4">
        <div className="mb-6">
          <p className="text-gray-700 text-sm">Details:</p>
          <p className="text-gray-700 text-sm">To organize the data of your institution, please contact</p>
          
        </div>

        <div className="mb-6">
          <p className="text-gray-700 text-sm">Contact Details:</p>
          <p className="text-gray-700 text-sm">Email: andrescamilopolaniabobadilla</p>
          <p className="text-gray-700 text-sm">Phone: +3205729436</p>
        </div>

        <div className="mt-6">
          <p className="text-gray-700 text-sm">Follow us on social media:</p>
          <div className="flex mt-2">
            <a href="#" className="mr-4">
              <i className="fab fa-facebook-square text-blue-500 text-lg"></i>
            </a>
            <a href="#" className="mr-4">
              <i className="fab fa-twitter-square text-blue-500 text-lg"></i>
            </a>
            <a href="#" className="mr-4">
              <i className="fab fa-instagram-square text-blue-500 text-lg"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="w-1/2 pl-4">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Enter your message"
              rows="6"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;