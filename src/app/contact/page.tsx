"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage("Your message was sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorData = await response.json();
        setResponseMessage(errorData.error || "Something went wrong. Please try again.");
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setResponseMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-16 bg-gray-50 flex items-center justify-center"
    >
      <div className="max-w-4xl mx-auto px-8">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="mb-8 bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transition-all"
        >
          ← Back
        </button>

        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-center mb-6 text-blue-900">
          Let&apos;s Connect!
        </h2>

        <p className="text-center text-gray-700 mb-10">
          Drop a message, share ideas, or just say hello. I&apos;d love to hear from you!
        </p>

        {/* Contact Form */}
        <div className="relative bg-white shadow-lg rounded-lg p-8 border border-gray-200">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 z-10">
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
                value={formData.name}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                placeholder="Write something awesome!"
                className="mt-1 p-3 block w-full border rounded-md shadow-sm focus:ring-blue-400 focus:ring-2"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`${
                  isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
                } text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300`}
              >
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </div>
          </form>

          {responseMessage && (
            <p className="mt-4 text-center text-sm text-blue-900">{responseMessage}</p>
          )}
        </div>
      </div>
    </section>
  );
}

