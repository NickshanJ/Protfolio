import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import config from './config';
import Modal from './Modal';

function Contact() {
  const [modalMessage, setModalMessage] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        config.SERVICE_ID,
        config.TEMPLATE_ID,
        e.target,
        config.USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setModalMessage('Message sent successfully!');
          setIsModalVisible(true); 
        },
        (error) => {
          console.log(error.text);
          setModalMessage('An error occurred. Please try again.');
          setIsModalVisible(true);
        }
      );

    e.target.reset();
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-gray-300">
      <div className="w-full max-w-2xl p-8">
        <h2 className="text-center text-3xl mt-10 font-stylish mb-6">
          Get in touch with Me
        </h2>
        <form onSubmit={sendEmail} className="space-y-6 mt-16 font-stylish">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xl mb-1" htmlFor="from_name">
                Your Name (required)
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-white p-2"
                required
              />
            </div>
            <div>
              <label className="block text-xl mb-1" htmlFor="reply_to">
                Your E-mail (required)
              </label>
              <input
                type="email"
                id="reply_to"
                name="reply_to"
                className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-white p-2"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-xl mb-1" htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="3"
              className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-white p-2"
            ></textarea>
          </div>
          <div className="text-center text-xl mt-4">
            <button
              type="submit"
              className="px-6 py-2 rounded-lg border border-gray-500 text-gray-300 hover:bg-[#d4af37] hover:text-black hover:scale-110 transition-transform"
            >
              Get in touch
            </button>
          </div>
        </form>
        <div className="flex justify-center mt-10 space-x-6">
          <a
            href="https://www.linkedin.com/in/nickshanj/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:scale-110 transition-transform hover:text-blue-600"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://github.com/NickshanJ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:scale-110 transition-transform hover:text-[#FEE715FF]"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="mailto:nickshan001@gmail.com"
            className="text-gray-300 hover:scale-110 transition-transform hover:text-red-600"
          >
            <FaEnvelope size={32} />
          </a>
          <a
            href="https://wa.me/7358176388"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:scale-110 transition-transform hover:text-green-400"
          >
            <FaWhatsapp size={32} />
          </a>
        </div>
      </div>

      <Modal
        isVisible={isModalVisible}
        message={modalMessage}
        onClose={closeModal}
      />
    </div>
  );
}

export default Contact;