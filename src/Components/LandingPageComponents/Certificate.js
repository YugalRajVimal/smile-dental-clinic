// CertificateShowcase.jsx
import React from "react";

export default function CertificateShowcase() {
  return (
    <div className="flex flex-col items-center w-full min-h-[60vh] bg-gray-50 py-10 px-4">
      <h2 className="text-3xl font-bold text-[#214764] mb-2 text-center">
        Recognized Excellence in Dentistry
      </h2>
      <p className="text-lg text-gray-600 mb-6 text-center max-w-2xl">
        Our clinic is proud to be recognized by leading medical institutions.
        Shown below is our participation certificate for the{" "}
        <span className="font-semibold text-[#d99233]">
          1st AIIMS Total TMJ Replacement Workshop with Hands-on
        </span>
        . This achievement demonstrates our commitment to continuous learning,
        innovation, and the highest standards in oral and maxillofacial surgery.
      </p>
      <div className="flex justify-center md:flex-row flex-col items-center w-full gap-6">
        <div className="flex-shrink-0 flex items-center h-[350px]">
          <img
            src="/cert.jpeg"
            alt="AIIMS TMJ Workshop Certificate"
            className="h-full object-contain max-w-full rounded-xl shadow-2xl border-4 border-gray-200 bg-white"
          />
        </div>
        <div className="flex-shrink-0 flex items-center h-[350px]">
          <img
            src="/cert2.jpeg"
            alt=""
            className="h-full object-contain max-w-full rounded-xl shadow-2xl border-4 border-gray-200 bg-white"
          />
        </div>
      </div>
    </div>
  );
}
