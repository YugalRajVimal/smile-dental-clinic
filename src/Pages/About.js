import React from "react";
import Footer from "../Components/Footer";

const About = () => {
  const lang = "en";
  const texts = {
    title: {
      en: "About SMILE DENTAL CARE",
      hi: "स्माइल डेंटल केयर के बारे में",
    },

    tagline: {
      en: "Personalized, Painless, and Advanced Dental Care in Gurgaon.",
      hi: "व्यक्तिगत, दर्द रहित और उन्नत दंत चिकित्सा — गुरुग्राम में।",
    },

    paragraphs: {
      en: [
        "At SMILE DENTAL CARE, we believe that every smile deserves the best. Led by Dr. Himanshu Singh (BDS, MDS Orthodontics & TMJ Specialist), our clinic provides world-class dental care that combines advanced technology, modern techniques, and compassionate treatment for patients of all ages.",
        "We specialize in a comprehensive range of dental services — from painless single-sitting root canal treatments and dental implants to orthodontic braces, cosmetic dentistry, and TMJ care. Every treatment is designed to deliver lasting results with comfort and precision.",
        "Our clinic stands out for its patient-centric approach. We listen, educate, and create personalized treatment plans that help our patients achieve not just better oral health, but renewed confidence in their smiles. We also provide expert skin and hair restoration services, ensuring a complete aesthetic care experience under one roof.",
        "Recognized for excellence, SMILE DENTAL CARE has participated in prestigious programs such as the AIIMS Total TMJ Replacement Workshop, reflecting our continuous commitment to innovation, learning, and clinical excellence.",
        "Our vision is to provide affordable, high-quality dental and aesthetic care that prioritizes trust, transparency, and long-term wellness for every patient who walks through our doors.",
      ],

      hi: [
        "स्माइल डेंटल केयर में हमारा विश्वास है कि हर मुस्कान सर्वश्रेष्ठ देखभाल की हकदार है। डॉ. हिमांशु सिंह (BDS, MDS ऑर्थोडॉन्टिक्स और TMJ विशेषज्ञ) के नेतृत्व में हमारा क्लिनिक उन्नत तकनीक, आधुनिक उपचार विधियों और सहानुभूतिपूर्ण सेवा का उत्कृष्ट संयोजन प्रदान करता है।",
        "हम विभिन्न दंत सेवाओं में विशेषज्ञ हैं — जैसे दर्द रहित सिंगल-सिटिंग रूट कैनाल, डेंटल इम्प्लांट्स, ऑर्थोडॉन्टिक ब्रेसेस, कॉस्मेटिक डेंटिस्ट्री और TMJ उपचार। हर प्रक्रिया को अधिकतम आराम और सटीकता के साथ परिणाम देने के लिए डिज़ाइन किया गया है।",
        "हमारा क्लिनिक अपने मरीज-केंद्रित दृष्टिकोण के लिए जाना जाता है। हम हर मरीज को ध्यान से सुनते हैं, शिक्षित करते हैं, और उसकी आवश्यकताओं के अनुसार व्यक्तिगत उपचार योजनाएँ बनाते हैं ताकि उसका आत्मविश्वास और मुस्कान दोनों फिर से लौट सकें। साथ ही, हम त्वचा और बालों से संबंधित आधुनिक सौंदर्य सेवाएँ भी प्रदान करते हैं।",
        "स्माइल डेंटल केयर को प्रतिष्ठित कार्यक्रमों जैसे AIIMS टोटल TMJ रिप्लेसमेंट वर्कशॉप में भाग लेने का गौरव प्राप्त है, जो हमारे निरंतर नवाचार और उत्कृष्टता के प्रति समर्पण को दर्शाता है।",
        "हमारा उद्देश्य है — हर मरीज को विश्वसनीय, सुलभ और उच्च-गुणवत्ता वाली दंत और सौंदर्य देखभाल प्रदान करना, जिससे उनका स्वास्थ्य और आत्मविश्वास दोनों सशक्त बन सकें।",
      ],
    },

    footer: {
      en: "Healthy smiles begin here — Trust, Comfort, and Excellence at SMILE DENTAL CARE.",
      hi: "स्वस्थ मुस्कान की शुरुआत यहाँ से — विश्वास, आराम और उत्कृष्टता स्माइल डेंटल केयर में।",
    },

    years: {
      en: "Years of Trusted Dental Care",
      hi: "विश्वसनीय दंत चिकित्सा के वर्ष",
    },
  };

  return (
    <div className="pt-16 bg-blue-200">
      <section className="py-24 text-white mb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
            {/* Text Section */}
            <div className="md:w-[60%] mt-20 md:mt-0 prose prose-invert max-w-none flex flex-col justify-center items-center">
              <h3 className="text-3xl md:text-4xl text-black font-bold font-montserrat mb-6 tracking-tight">
                {texts.title[lang]}
              </h3>

              <p className="text-black font-roboto mb-6 text-lg italic">
                {texts.tagline[lang]}
              </p>

              {texts.paragraphs[lang].map((para, index) => (
                <p key={index} className="text-black font-roboto mb-4">
                  {para}
                </p>
              ))}

              <p className="text-black font-roboto italic text-right">
                {texts.footer[lang]}
              </p>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-[40%] relative aspect-square md:aspect-auto rounded-lg md:h-[600px]">
              <img
                src="/den7.jpg"
                alt="Smile Dental Care Clinic"
                className="w-full h-full object-cover rounded-lg"
              />

              <div className="absolute -bottom-20 md:-bottom-24 -right-4 bg-gradient-to-r from-[#023893] to-[#3ec2ce] border border-danger/40 rounded-lg p-4 md:p-6 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-3xl md:text-5xl font-bold font-montserrat text-danger shadow-text">
                    10+
                  </p>
                  <p className="text-xs md:text-base text-gray-light font-roboto mt-1 md:mt-2">
                    {texts.years[lang]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
