import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faInfoCircle, faPhoneAlt, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";  // Corrected import for faYoutube

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-3xl font-bold mb-4 text-yellow-300">GoldFish Entertainment</h2>
            <p className="text-sm text-gray-200 text-center md:text-left">
              Your ultimate destination for classic and modern cartoons. Stream your favorite shows anytime, anywhere!
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="hover:text-yellow-300 transition duration-200"
                >
                  <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-yellow-300 transition duration-200"
                >
                  <FontAwesomeIcon icon={faInfoCircle} className="mr-2" /> About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-yellow-300 transition duration-200"
                >
                  <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" /> Contact
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-yellow-300 transition duration-200"
                >
                  <FontAwesomeIcon icon={faLock} className="mr-2" /> Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media & Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 text-2xl">
              {/* Facebook Icon */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition duration-200"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              {/* Twitter Icon */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition duration-200"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              {/* Instagram Icon */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition duration-200"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              {/* YouTube Icon */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition duration-200"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>

            {/* Contact Section */}
            <h3 className="text-xl font-semibold mt-6 mb-4">Contact Us</h3>
            <p className="text-sm text-gray-200">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              <a
                href="mailto:support@cartoonstream.com"
                className="hover:text-yellow-300 transition duration-200"
              >
                support@cartoonstream.com
              </a>
            </p>
            <p className="text-sm text-gray-200">
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
              <a
                href="tel:+1234567890"
                className="hover:text-yellow-300 transition duration-200"
              >
                +1 (234) 567-890
              </a>
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} GoldFish Entertainment. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
