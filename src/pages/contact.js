import React from "react";

function Contact() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Kontak</h2>
      <ul className="list-disc ml-6 text-gray-700">
        <li>
          Email:{" "}
          <a href="mailto:komisariat@example.com">komisariat@example.com</a>
        </li>
        <li>Telepon: +62 812 3456 7890</li>
        <li>Alamat: Jember, Jawa Timur, Indonesia</li>
      </ul>
      <p className="mt-4">
        Anda juga bisa menghubungi kami melalui media sosial:
      </p>
      <div className="flex space-x-4 mt-2">
        {/* Add social media links here (replace with placeholders) */}
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f text-blue-500 hover:text-blue-700 transition duration-300"></i>
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram text-red-500 hover:text-red-700 transition duration-300"></i>
        </a>
        {/* Add links for other social media platforms as needed */}
      </div>
    </div>
  );
}

export default Contact;
