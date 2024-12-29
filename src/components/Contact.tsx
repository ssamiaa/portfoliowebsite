"use client";



export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen py-16 bg-gray-50 flex items-center justify-center"
    >
      <div className="max-w-4xl mx-auto px-8">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center mb-6 text-blue-900">
          Let&apos;s Connect! 
        </h2>

        <p className="text-center text-gray-700 mb-10">
          Drop a message, share ideas, or just say hello. I&apos;d love to hear from you!
        </p>

        {/* Contact Form */}
        <div className="relative bg-white shadow-lg rounded-lg p-8 border border-gray-200">
          <form
            action="#"
            method="POST"
            className="grid grid-cols-1 gap-6 z-10"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                What&apos;s your name? 
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your name"
                className="mt-1 p-3 block w-full border rounded-md shadow-sm focus:ring-blue-400 focus:ring-2"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Your email"
                className="mt-1 p-3 block w-full border rounded-md shadow-sm focus:ring-blue-400 focus:ring-2"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-600"
              >
                Your message 
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Write something awesome!"
                className="mt-1 p-3 block w-full border rounded-md shadow-sm focus:ring-blue-400 focus:ring-2"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-gradient-to-r bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gradient-to-l transition-all duration-300"
              >
                Send it 
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
