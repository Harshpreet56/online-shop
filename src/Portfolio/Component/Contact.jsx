import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully 🚀");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-4">
          Contact Me
        </h2>

        <p className="text-center text-gray-600 mb-10">
          Have a project in mind? Let's work together!
        </p>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left Info */}
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg">Email</h4>
              <p className="text-gray-600">yourmail@gmail.com</p>
            </div>

            <div>
              <h4 className="font-semibold text-lg">Phone</h4>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>

            <div>
              <h4 className="font-semibold text-lg">Location</h4>
              <p className="text-gray-600">India</p>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-md space-y-6"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 rounded-md hover:bg-teal-700 transition"
            >
              Send Message
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;