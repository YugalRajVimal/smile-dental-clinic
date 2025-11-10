import React from "react";
import { motion } from "framer-motion";
import { FaTooth, FaChild, FaMagic, FaUserMd } from "react-icons/fa";
import { GiToothbrush, GiSkullSabertooth } from "react-icons/gi";

const services = [
  {
    id: 1,
    title: "Root Canal Treatment (Single Sitting) - 10% Off",
    desc: "Save time and money with our advanced single-visit root canal treatment, now at an exclusive 10% discount. Experience pain-free care for severely decayed or infected teeth.",
    icon: <FaTooth className="w-6 h-6 text-white" />, // Tooth icon
    image: "/image5.jpeg",
  },
  {
    id: 2,
    title: "Implantologist - 20% Off",
    desc: "Restore missing teeth with permanent, natural-looking dental implants placed by our experienced implantologist, now at 20% off for a limited time.",
    icon: <FaUserMd className="w-6 h-6 text-white" />, // Doctor icon
    image: "/image3.jpeg",
  },
  {
    id: 3,
    title: "Cleaning & Bleaching",
    desc: "Achieve a brilliant, fresh smile with professional dental cleaning and teeth bleaching services for stain-free, sparkling teeth.",
    icon: <GiToothbrush className="w-6 h-6 text-white" />, // Toothbrush icon
    image: "/den5.jpg",
  },
  {
    id: 4,
    title: "TMJ Specialist",
    desc: "Get expert diagnosis and treatment for jaw joint (TMJ) disorders to relieve pain, popping, or restricted movement with our TMJ specialist.",
    icon: <FaUserMd className="w-6 h-6 text-white" />, // Doctor icon
    image: "/tmj.jpeg",
  },
  {
    id: 5,
    title: "Orthodontic Treatment",
    desc: "Straighten crooked or crowded teeth with braces or aligners. Our orthodontic treatments help children, teens, and adults achieve beautiful, aligned smiles.",
    icon: <FaTooth className="w-6 h-6 text-white" />, // Tooth icon
    image: "/den3.jpg",
  },
  {
    id: 6,
    title: "Fillings",
    desc: "Restore decayed, cracked, or chipped teeth with modern, long-lasting dental fillings that blend seamlessly with your natural smile.",
    icon: <FaTooth className="w-6 h-6 text-white" />, // Tooth icon
    image: "/filling.jpeg",
  },
  {
    id: 7,
    title: "Cosmetic Dentistry",
    desc: "Boost your confidence with veneers, smile designing, and other cosmetic dentistry solutions tailored to enhance the appearance of your teeth.",
    icon: <FaMagic className="w-6 h-6 text-white" />, // Magic wand icon
    image: "/cosmetic.jpeg",
  },
  {
    id: 8,
    title: "Hair Transplant",
    desc: "Regain your hair and confidence with proven, minimally-invasive hair transplant solutions performed by qualified experts.",
    icon: <FaUserMd className="w-6 h-6 text-white" />, // Doctor icon (or change to a hair icon if desired)
    image: "/image4.jpeg",
  },
  {
    id: 9,
    title: "Skin Specialist",
    desc: "Avail advanced dermatological treatments for acne, pigmentation, anti-aging, and more from our experienced skin specialists.",
    icon: <FaUserMd className="w-6 h-6 text-white" />, // Doctor icon (or change to a skin/face icon if desired)
    image: "/skin.jpeg",
  },
];

const textVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function DentalServices() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.div
          variants={textVariant}
          initial="hidden"
          animate="visible"
          className="mb-12"
        >
          <span className="inline-block bg-gray-100 text-[#7367F0] px-5 py-1.5 rounded-full font-medium text-sm mb-4">
            Dental Services
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold text-[#0D0D25]">
            Your Smile Deserves the <br />
            <span className="italic text-[#7367F0] font-medium">
              Best in Dental Care
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={textVariant}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 * index }}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
            >
              <div className="relative ">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute  bottom-0 left-6 transform translate-y-1/2 
                    bg-[#7367F0] p-3 rounded-xl shadow-lg transition-transform duration-500 group-hover:rotate-45 group-hover:scale-x-[-1]"
                >
                  {service.icon}
                </div>
              </div>

              <div className="pt-10 pb-8 px-6 text-left">
                <h3 className="text-xl font-semibold text-[#0D0D25] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {service.desc}
                </p>
                {/* <button className="text-[#0D0D25] font-medium flex items-center gap-2 hover:text-[#7367F0] transition">
                  Explore Service <FaArrowRight className="w-4 h-4" />
                </button> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
