import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://portfolio-react-55c1.onrender.com";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    location: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          location: form.location,
          message: form.message,
        }),
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thank you. I will get back to you as soon as possible.",
          confirmButtonColor: "#915EFF",
        });
        setForm({ name: "", email: "", location: "", message: "" });
      } else {
        Swal.fire({
          icon: "error",
          title: "Something went wrong!",
          text: "Please try again later.",
          confirmButtonColor: "#915EFF",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Server Error!",
        text: "Unable to send your message. Please try again.",
        confirmButtonColor: "#915EFF",
      });
    } finally {
      setLoading(false);
    }
  };

  const openLinkedInProfile = () => {
    window.open("http://linkedin.com/in/kamranikramofficial", "_blank");
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      {/* LEFT SIDE - FORM */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          {/* Name */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              <FontAwesomeIcon icon={faUser} size='1x' style={{ color: "#915EFF" }} /> Name
            </span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='Enter your name'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>

          {/* Email */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              <FontAwesomeIcon icon={faEnvelope} size='1x' style={{ color: "#915EFF" }} /> Email
            </span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Enter your email'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>

          {/* Location */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              <FontAwesomeIcon icon={faMapMarkerAlt} size='1x' style={{ color: "#915EFF" }} /> Location
            </span>
            <input
              type='text'
              name='location'
              value={form.location}
              onChange={handleChange}
              placeholder='Your location (optional)'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          {/* Message */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Message</span>
            <textarea
              rows='6'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Write your message here...'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none'
              required
            />
          </label>

          {/* Submit Button */}
          <button
            type='submit'
            className='bg-[#915EFF] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Footer */}
          <p className='text-center' style={{ color: "#7C7E80" }}>
            Copyright &copy; 2024 M.R. Portfolio
            <br />
            Designed and Developed by{" "}
            <a
              href='http://linkedin.com/in/kamranikramofficial'
              onClick={openLinkedInProfile}
              className='text-[#915EFF]'
            >
              <strong>kamran ikram official</strong>
            </a>
          </p>
        </form>
      </motion.div>

      {/* RIGHT SIDE - EARTH CANVAS */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
