import React from "react";

const PrivacyPolicy = () => (
  <div className="max-w-4xl mx-auto px-6 py-16 bg-white  rounded-lg mt-10 text-gray-800">
    <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">
      Privacy Policy
    </h1>

    <p className="mb-4">
      <strong>Codeware IT Pvt Ltd</strong> ("we", "us", or "our") operates the
      website{" "}
      <a
        href="https://codewareit.in"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        codewareit.in
      </a>
      . We are committed to protecting your privacy and ensuring that your
      personal information is handled safely and responsibly.
    </p>

    <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">
      1. Information We Collect
    </h2>
    <p className="mb-2">
      We may collect the following information through our contact forms:
    </p>
    <ul className="list-disc list-inside ml-4 mb-4">
      <li>Name</li>
      <li>Email address</li>
      <li>Phone number</li>
      <li>Message content</li>
    </ul>

    <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">
      2. How We Use Your Information
    </h2>
    <ul className="list-disc list-inside ml-4 mb-4">
      <li>To respond to your inquiries</li>
      <li>To communicate updates and service details</li>
      <li>To improve our services and website performance</li>
      <li>To meet any legal requirements</li>
    </ul>

    <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">
      3. Sharing Your Information
    </h2>
    <ul className="list-disc list-inside ml-4 mb-4">
      <li>We do not sell or rent your information.</li>
      <li>
        Information may be shared with service providers under confidentiality
        agreements.
      </li>
      <li>Information may be disclosed to comply with legal obligations.</li>
    </ul>

    <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">
      4. Data Security
    </h2>
    <p className="mb-4">
      We implement appropriate security measures to protect your data from
      unauthorized access, alteration, or disclosure.
    </p>

    <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">
      5. Your Rights
    </h2>
    <ul className="list-disc list-inside ml-4 mb-4">
      <li>Access the personal data we hold about you</li>
      <li>Request correction or deletion</li>
      <li>Withdraw consent</li>
    </ul>
    <p className="mb-4">
      Contact us using the information below to exercise these rights.
    </p>

    <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">
      6. Contact Us
    </h2>
    <ul className="ml-4 mb-6">
      <li>
        <strong>Director:</strong> Shubham Goyal
      </li>
      <li>
        <strong>Phone:</strong>{" "}
        <a href="tel:+919837218345" className="text-blue-600">
          +91 98372 18345
        </a>
      </li>
      <li>
        <strong>Email:</strong>{" "}
        <a href="mailto:gshubham.05@gmail.com" className="text-blue-600">
          gshubham.05@gmail.com
        </a>
      </li>
      <li>
        <strong>Company:</strong> Codeware IT Pvt Ltd
      </li>
      <li>
        <strong>Location:</strong> Dehradun, Uttarakhand, India
      </li>
    </ul>

    <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">
      7. Policy Updates
    </h2>
    <p className="mb-6">
      This Privacy Policy may be updated periodically. We recommend reviewing
      this page for any changes.
    </p>

    <div className="bg-blue-50 p-4 rounded-md text-sm text-gray-700">
      <strong>Note:</strong> For complete legal compliance, especially if your
      data handling expands, consult a legal advisor.
    </div>
  </div>
);

export default PrivacyPolicy;
