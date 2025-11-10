// Footer.jsx
import React from "react";
import InfiniteMarquee from "./LandingPageComponents/InfiniteMarquee";
import InfiniteMarquee2 from "./InfiniteMarquee2";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#0b617e] via-[#0b1e3b] via-50% to-[#d77660] to-100% pt-20 pb-0 px-4 md:px-0">
      <div className=" mx-auto rounded-3xl overflow-visible  pb-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 px-8 py-12">
          {/* Left CARD */}
          <div className="bg-white rounded-xl p-8 shadow-lg w-full sm:w-[350px] mb-4 flex-shrink-0">
            <div className="flex items-center gap-2 mb-3">
              {/* Add your logo or SVG */}

              {/* Replace with your logo SVG or image */}
              <img
                src="/logo.jpeg"
                alt="SMILE DENTAL CARE Logo"
                className="w-20 h-20 object-cover rounded-xl"
              />

              <span className="text-[#0b1e3b] text-3xl font-semibold">
                SMILE DENTAL CARE
              </span>
            </div>
            <p className="text-gray-700 text-base mt-1 mb-4">
              We dedicated to providing flexible & accessible healthcare
              services.
            </p>
            <div className="pt-2 border-t border-gray-200 text-sm text-[#101a38] space-y-2">
              <div className="flex justify-between pt-2">
                <span className="font-medium">Mon - Fri</span>
                <span>9:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Sat - Sun</span>
                <span>8:00 - 16:00</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Emergency</span>
                <span>24/7 Hours</span>
              </div>
            </div>
          </div>
          {/* QUICK LINKS, DEPARTMENT, NEWSLETTER */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-8 w-full">
            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold text-xl mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3 text-base">
                <li>
                  <a href="/" className="text-white hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-white hover:underline">
                    About Us
                  </a>
                </li>

                <li>
                  <a href="/contact" className="text-white hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            {/* Departments */}
            <div>
              <h3 className="text-white font-semibold text-xl mb-4">
                Department
              </h3>
              <ul className="space-y-3 text-base">
                <li>
                  <a href="#" className="text-white hover:underline">
                    Cardiology
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:underline">
                    Dentist
                  </a>
                </li>
              </ul>
            </div>
            {/* Newsletter */}
            <div>
              <h3 className="text-white font-semibold text-xl mb-4">
                Newsletter
              </h3>
              <p className="text-white text-base mb-4">
                Join the Community and Receive Our Monthly Newsletter Straight
                to Your Inbox
              </p>
              <form className="flex w-full">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="px-4 py-2 rounded-l-lg w-full text-gray-800 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[#02acca] rounded-r-lg px-4 flex items-center justify-center"
                >
                  {/* Send icon */}
                  <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                    <path d="M2 21l21-9-21-9v7l15 2-15 2z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* Footer bottom mini-links */}
        <div className="flex flex-col md:flex-row md:items-center justify-center md:justify-evenly py-4 bg-transparent gap-5 border-t border-[#202b4c] px-8">
          <div className="flex items-center gap-2 text-white">
            <span className="bg-[#1ec2ef] rounded-full p-2">
              {/* location icon */}
              <svg width="20" height="20" fill="white" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="10" />
              </svg>
            </span>
            <span>
              Visit Our Clinic: Smile Dental Care Gurgaon, Sector 56 D 235
              <br />
              Dr Himanshu Singh BDS MDS Orthodontics, TMJ Specialist
            </span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <span className="bg-[#1ec2ef] rounded-full p-2">
              {/* mail icon */}
              <svg width="20" height="20" fill="white" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="10" />
              </svg>
            </span>
            <span>General Inquiries himanshusingh118763@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <span className="bg-[#1ec2ef] rounded-full p-2">
              {/* phone icon */}
              <svg width="20" height="20" fill="white" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="10" />
              </svg>
            </span>
            <span>Emergency Cases +918799718615</span>
          </div>
        </div>
      </div>

      <InfiniteMarquee2 />
      {/* Attribution */}
      <div className="text-center text-[#70749b] bg-white rounded-t-3xl w-[96%] mx-auto mt-8 py-3 text-base z-10 relative">
        © 2025, SMILE DENTAL CARE. Made with passion by GoWappily Infotech.
      </div>
      {/* Floating Arrow */}
      {/* <div className="fixed bottom-8 right-8 z-20">
        <button className="bg-[#02acca] p-3 rounded-lg">

          <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
            <path d="M12 8l-7 8h14z" />
          </svg>
        </button>
      </div> */}
    </footer>
  );
}
