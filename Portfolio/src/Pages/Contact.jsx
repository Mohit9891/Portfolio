import React from 'react'

const Contact = () => {
  return (
    <div className=" container mt-32  w-full h-full">
      <div className="text-center text-9xl flex flex-wrap font-semibold">
        {" "}
        Let's Build Something Cool
      </div>
      <div>
        <div className="grid grid-cols-2 mt-20">
         
          <div className="p-8 ">
             <h2 className="text-5xl text-center font-bold p-4 mb-3">Contact</h2>
            {" "}
            <form action="" method="POST" className="space-y-6">
              <div className="">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <button
                type="submit"
                className=" bg-white-900 bg-opacity-10 backdrop-blur-md border border-gray-200 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out text-white py-2 px-4 rounded "
              >
                Send Message
              </button>
            </form>
          </div>
          <div>
            <img  className=" p-6 mt-15 ml-4"src="contact.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact