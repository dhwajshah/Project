import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="container max-w-4xl p-6 mx-auto bg-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-3xl font-bold text-gray-800">Privacy Policy</h1>
        <p className="mb-4 text-gray-700">Last updated: [8/8/2024]</p>
        
        <h2 className="mt-6 mb-2 text-2xl font-semibold text-gray-800">Introduction</h2>
        <p className="mb-4 text-gray-700">
          This Privacy Policy explains how our company FilmVibe collects, uses, discloses, and safeguards your information when you visit our website or use our services.
        </p>

        <h2 className="mt-6 mb-2 text-2xl font-semibold text-gray-800">Information We Collect</h2>
        <p className="mb-4 text-gray-700">
          We may collect the following types of information:
        </p>
        <ul className="mb-4 list-disc list-inside text-gray-700">
          <li><strong>Personal Data:</strong> Information that can be used to identify you, such as your name, email address, and phone number.</li>
          <li><strong>Usage Data:</strong> Data about how you use our website, including your IP address, browser type, and pages visited.</li>
          <li><strong>Cookies:</strong> Small files stored on your device that help us improve your experience on our website.</li>
        </ul>

        <h2 className="mt-6 mb-2 text-2xl font-semibold text-gray-800">How We Use Your Information</h2>
        <p className="mb-4 text-gray-700">
          We use the information we collect for various purposes, including:
        </p>
        <ul className="mb-4 list-disc list-inside text-gray-700">
          <li>To provide and maintain our Service</li>
          <li>To notify you about changes to our Service</li>
          <li>To allow you to participate in interactive features when you choose to do so</li>
          <li>To provide customer support</li>
          <li>To gather analysis or valuable information so that we can improve our Service</li>
        </ul>

        <h2 className="mt-6 mb-2 text-2xl font-semibold text-gray-800">Disclosure of Your Information</h2>
        <p className="mb-4 text-gray-700">
          We may share your personal information in the following situations:
        </p>
        <ul className="mb-4 list-disc list-inside text-gray-700">
          <li>With service providers to monitor and analyze the use of our Service</li>
          <li>For compliance with legal obligations</li>
          <li>To protect and defend the rights or property of FilmVibe</li>
        </ul>

        <h2 className="mt-6 mb-2 text-2xl font-semibold text-gray-800">Security of Your Information</h2>
        <p className="mb-4 text-gray-700">
          The security of your personal information is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure.
        </p>

        <h2 className="mt-6 mb-2 text-2xl font-semibold text-gray-800">Changes to This Privacy Policy</h2>
        <p className="mb-4 text-gray-700">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
        </p>

        <h2 className="mt-6 mb-2 text-2xl font-semibold text-gray-800">Contact Us</h2>
        <p className="mb-4 text-gray-700">
          If you have any questions about this Privacy Policy, please contact us:
        </p>
        <p className="text-gray-700">
          Email: <a href="mailto:contact@FilmVibe.com" className="text-blue-500 hover:underline">contact@FilmVibe.com</a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
