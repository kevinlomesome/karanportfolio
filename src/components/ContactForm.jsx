import { useState } from "react";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import { contactSchema } from "../validation/contactSchema";
import ls from "../utils/secureLS";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function ContactForm() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },

    validationSchema: contactSchema,

   onSubmit: async (values, { resetForm }) => {
  setLoading(true);
  setStatus("");

  const templateParams = {
    name: values.name,
    email: values.email,
    subject: values.subject,
    message: values.message,
  };

  try {
    // Send Email
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    
   // Get Existing Messages
// Get Existing Messages Safely
let messages = [];

try {
  messages = ls.get("messages");

  if (!Array.isArray(messages)) {
    messages = [];
  }
} catch (error) {
  ls.remove("messages");
  messages = [];
}
    // New Message
    const newMessage = {
      id: Date.now(),
      name: values.name,
      email: values.email,
      subject: values.subject,
      message: values.message,
      date: new Date().toLocaleDateString(),
    };

    // Add Latest Message First
    messages.unshift(newMessage);

    // Save
   ls.set("messages", messages);

   
    setStatus("✅ Message Sent Successfully!");
    resetForm();

  } catch (error) {
    console.error(error);
    setStatus("❌ Failed to send message.");
  }

  setLoading(false);
},
  });

  return (
    <section className="min-h-screen bg-slate-900 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-14">
          Contact Me
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left Side */}
          <div className="bg-slate-800 rounded-2xl p-8">

            <h2 className="text-3xl font-bold mb-6">
              Let's Work Together
            </h2>

            <p className="text-gray-300 mb-8">
              Have a project in mind or want to collaborate?
              Feel free to reach out.
            </p>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-cyan-400 text-2xl" />
                <span>kevinwork2005@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone className="text-cyan-400 text-2xl" />
                <span>+91 7990359221</span>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
                <span>India</span>
              </div>

            </div>

            <div className="flex gap-6 mt-10 text-3xl">

              <a
                href="https://github.com/kevindaniels2004"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="hover:text-cyan-400 transition" />
              </a>

              <a
                href="https://www.linkedin.com/in/kevinnn7x"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="hover:text-cyan-400 transition" />
              </a>

            </div>

          </div>

          {/* Right Side */}
          <form
            onSubmit={formik.handleSubmit}
            className="bg-slate-800 rounded-2xl p-8"
          >

            <div className="space-y-5">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full bg-slate-700 p-4 rounded-lg outline-none focus:ring-2 focus:ring-cyan-400"
              />

              {formik.touched.name && formik.errors.name && (
                <p className="text-red-400 text-sm">
                  {formik.errors.name}
                </p>
              )}

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full bg-slate-700 p-4 rounded-lg outline-none focus:ring-2 focus:ring-cyan-400"
              />

              {formik.touched.email && formik.errors.email && (
                <p className="text-red-400 text-sm">
                  {formik.errors.email}
                </p>
              )}

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formik.values.subject}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full bg-slate-700 p-4 rounded-lg outline-none focus:ring-2 focus:ring-cyan-400"
              />

              {formik.touched.subject && formik.errors.subject && (
                <p className="text-red-400 text-sm">
                  {formik.errors.subject}
                </p>
              )}

              <textarea
                name="message"
                rows={6}
                placeholder="Your Message..."
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full bg-slate-700 p-4 rounded-lg outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
              />

              {formik.touched.message && formik.errors.message && (
                <p className="text-red-400 text-sm">
                  {formik.errors.message}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-cyan-500 hover:bg-cyan-600 py-4 rounded-lg font-semibold transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message →"}
              </button>

              {status && (
                <p className="text-center mt-4 text-cyan-400 font-medium">
                  {status}
                </p>
              )}

            </div>

          </form>

        </div>

      </div>
    </section>
  );
}

export default ContactForm;