import React from "react";

function Contact() {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-6 py-8">
        <div className="mb-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">Contact Us</h2>
          <p className="text-gray-600 text-sm">To organize the data of your institution, please contact:</p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact Details:</h3>
          <p className="text-gray-600 text-sm">Email:</p>
          <p className="text-gray-600 text-sm">Phone: </p>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Follow us on social media:</h3>
          <div className="flex mt-2">
            <a href="#" className="mr-4 text-blue-500 hover:text-blue-700">
              <i className="fab fa-facebook-square text-lg"></i>
            </a>
            <a href="#" className="mr-4 text-blue-500 hover:text-blue-700">
              <i className="fab fa-twitter-square text-lg"></i>
            </a>
            <a href="#" className="mr-4 text-blue-500 hover:text-blue-700">
              <i className="fab fa-instagram-square text-lg"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-4 px-6">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
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
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
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
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Enter your message"
              rows="6"
            />
          </div>
          <div className="flex justify-end">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
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