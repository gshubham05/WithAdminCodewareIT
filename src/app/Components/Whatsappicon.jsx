import React from "react";

const Whatsappicon = () => {
  return (
    <a
      href="https://wa.me/9837218345" // Replace with your WhatsApp number
      target="_blank"
      className="fixed bottom-6 right-5 w-12 h-12 bg-green-500 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
      title="Chat with us on WhatsApp"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-8 h-8"
      />
    </a>
  );
};

export default Whatsappicon;
