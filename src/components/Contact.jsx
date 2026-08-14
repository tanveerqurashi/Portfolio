import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Send,
} from "lucide-react";
import { toast } from "react-toastify";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactDetails = [
    {
      icon: <Mail className="w-5 h-5 text-blue-400" />,
      label: "Email",
      value: "23cs87@ksriet.ac.in",
      href: "mailto:23cs87@ksriet.ac.in",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      toast.error("Web3Forms access key is missing.", {
        position: "bottom-right",
        autoClose: 5000,
        theme: "dark",
      });

      console.error(
        "VITE_WEB3FORMS_ACCESS_KEY is undefined. Check your .env file."
      );

      return;
    }

    setIsSubmitting(true);

    try {
      const form = e.target;
      const data = new FormData(form);

      data.append("access_key", accessKey);

      data.append(
        "subject",
        `Portfolio Contact - ${formData.name}`
      );

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();

      console.log("Web3Forms Response:", result);

      if (result.success) {
        toast.success(
          "Message sent successfully! I will get back to you soon.",
          {
            position: "bottom-right",
            autoClose: 5000,
            theme: "dark",
          }
        );

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        form.reset();
      } else {
        toast.error(
          result.message || "Failed to send message. Please try again.",
          {
            position: "bottom-right",
            autoClose: 5000,
            theme: "dark",
          }
        );
      }
    } catch (error) {
      console.error("Web3Forms Error:", error);

      toast.error(
        "Something went wrong. Please check your internet connection.",
        {
          position: "bottom-right",
          autoClose: 5000,
          theme: "dark",
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden bg-slate-950/40"
    >
      {/* Background radial spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono tracking-widest text-blue-400 uppercase mb-2"
          >
            Get In Touch
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Contact Me
          </motion.h2>

          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >

            <div className="space-y-6 text-left">
              <h3 className="text-2xl font-semibold text-white">
                Let's discuss something great
              </h3>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                I am always open to exploring new engineering opportunities,
                contributing to open-source systems, or collaborating on
                innovative web & AI applications. Shoot me a message!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactDetails.map((detail, idx) => (
                <a
                  key={idx}
                  href={detail.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-5 rounded-2xl glass-card flex items-center gap-4 text-left group border border-white/5 hover:border-blue-500/20 transition-all"
                >
                  <div className="p-3 rounded-xl bg-slate-900 border border-white/5 group-hover:text-blue-400 group-hover:border-blue-500/20 transition-all">
                    {detail.icon}
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 block mb-0.5">
                      {detail.label}
                    </span>

                    <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {detail.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>

          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 p-8 rounded-2xl glass-card text-left border border-white/5"
          >

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-xs font-mono text-slate-400"
                  >
                    Your Name{" "}
                    <span className="text-blue-500">*</span>
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 hover:border-white/20 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/20 text-sm text-white placeholder-slate-600 transition-all"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-mono text-slate-400"
                  >
                    Email Address{" "}
                    <span className="text-blue-500">*</span>
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 hover:border-white/20 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/20 text-sm text-white placeholder-slate-600 transition-all"
                  />
                </div>

              </div>

              {/* Message */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs font-mono text-slate-400"
                >
                  Message Details{" "}
                  <span className="text-blue-500">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Enter your message here..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 hover:border-white/20 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/20 text-sm text-white placeholder-slate-600 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />

                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>

                    Sending message...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}