import React from 'react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="container max-w-4xl p-6 mx-auto bg-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-3xl font-bold text-gray-800">Terms of Service</h1>
        <p className="mb-4 text-gray-700">Last updated: [8/8/2024]</p>
        
        <h2 className="mt-6 mb-2 text-2xl font-semibold text-gray-800">Introduction</h2>
        <p className="mb-4 text-gray-700">
          These Terms of Service govern your use of our website and any related services provided by FilmVibe.
        </p>

        <h2 className="mt-6 mb-2 text-2xl font-semibold text-gray-800">Acceptance of Terms</h2>
        <p className="mb-4 text-gray-700">
          By accessing or using our Service, you agree to be bound by these Terms. If you do not agree to any part of these Terms, you must not use our Service.
        </p>

        <h2 className="mt-6 mb-2 text-2xl font-semibold text-gray-800">User Accounts</h2>
        <p className="mb-4 text-gray-700">
          When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
        </p>

        <h2 className="mt-6 mb-2 text-2xl font-semibold text-gray-800">Content</h2>
        <p className="mb-4 text-gray-700">
          You are responsible for any content that you post or upload on our Service. You agree not to post content that is illegal, offensive, or violates any third-party rights.
        </p>

        <h2 className="mt-6 mb-2 text-2xl font-semibold text-gray-800">Termination</h2>
        <p className="mb-4 text-gray-700">
          We reserve the right to terminate or suspend your account and access to our Service, without prior notice or liability, for any reason whatsoever, including, without limitation, a breach of these Terms.
        </p>

        <h2 className="mt-6 mb-2 text-2xl font-semibold text-gray-800">Limitation of Liability</h2>
        <p className="mb-4 text-gray-700">
          In no event shall [Your Company Name] or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever arising out of or in connection with your use of our Service.
        </p>

        <h2 className="mt-6 mb-2 text-2xl font-semibold text-gray-800">Changes to Terms</h2>
        <p className="mb-4 text-gray-700">
          We may revise these Terms from time to time. The most current version will always be posted on this page. We will notify you of any changes by updating the date at the top of the Terms.
        </p>

        <h2 className="mt-6 mb-2 text-2xl font-semibold text-gray-800">Contact Us</h2>
        <p className="mb-4 text-gray-700">
          If you have any questions about these Terms, please contact us:
        </p>
        <p className="text-gray-700">
          Email: <a href="mailto:contact@FilmVibe.com" className="text-blue-500 hover:underline">contact@yourcompany.com</a>
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
