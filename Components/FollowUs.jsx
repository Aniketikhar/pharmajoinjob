import React, { memo } from 'react'
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa6';

const FollowUs = memo(() => {
    const socialLinks = [
        {
          name: "Facebook",
          color: "bg-blue-600",
          icon: <FaFacebook className="text-white text-lg" />,
          url: "https://chat.whatsapp.com/Kbypm5EOrMiIKDnAG1G7vb"
        },
        {
          name: "Twitter X",
          color: "bg-black",
          icon: <FaTwitter className="text-white text-lg" />,
          url: "https://chat.whatsapp.com/Kbypm5EOrMiIKDnAG1G7vb"
        },
        {
          name: "Telegram",
          color: "bg-blue-500",
          icon: <FaTelegram className="text-white text-lg" />,
          url: "https://t.me/pharmajoin"
        },
        {
          name: "Instagram",
          color: "bg-pink-500",
          icon: <FaInstagram className="text-white text-lg" />,
          url: "https://chat.whatsapp.com/Kbypm5EOrMiIKDnAG1G7vb"
        },
        {
          name: "WhatsApp",
          color: "bg-green-500",
          icon: <FaWhatsapp className="text-white text-lg" />,
          url: "https://chat.whatsapp.com/Kbypm5EOrMiIKDnAG1G7vb"
        },
      ];
  return (
    <div className="flex flex-col items-center space-y-4 mt-10">
      <h2 className="text-xl font-bold text-gray-800">FOLLOW US!</h2>
      <div className="w-full max-w-xs ">
        {socialLinks?.map((link, index) => (
          <div
            key={index}
            className={`flex items-center m-2 space-x-4 py-3 px-4 rounded-full ${link.color} shadow-lg hover:scale-105 transition-transform`}
          >
            {link.icon}
            <span className="text-white font-medium">{link.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
})

export default FollowUs