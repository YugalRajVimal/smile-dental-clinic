export default function WhoWeAre() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-10 md:gap-0 py-12 md:py-24 w-full max-w-7xl mx-auto px-4 md:px-8">
      {/* Left/Center Text + Checklist */}
      <div className="flex-1 max-w-xl">
        <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-gray-100 text-[#162146] mb-4">
          • Who We Are
        </span>
        <h1 className="text-[#162146] text-4xl md:text-5xl font-semibold tracking-tight mb-2">
          Providing Quality Care
          <br />
          for{" "}
          <span className="italic text-[#7a80fa] font-normal">
            Every Patient
          </span>
        </h1>
        <p className="text-[#7a80fa] text-xl font-medium mb-3">
          SMILE DENTAL CARE, we are dedicated to providing compassionate,
          personalized dental care for patients of all ages.
        </p>
        <p className="text-gray-500 mb-5">
          Our experienced team combines the latest technology with gentle
          techniques to ensure your visit is comfortable and effective.
        </p>

        <div className="flex items-start gap-3">
          {/* <img
            src=""
            alt="Braces Icon"
            className="w-16 md:w-24 flex-shrink-0 md:mr-2"
          /> */}
          <ul className="space-y-2 text-[#162146] text-base md:text-lg">
            <li className="flex items-center gap-2">
              <span className="text-indigo-400">✔</span>
              Innovative Solutions for Straight Teeth
            </li>
            <li className="flex items-center gap-2">
              <span className="text-indigo-400">✔</span>
              Clinic offers a comprehensive
            </li>
            <li className="flex items-center gap-2">
              <span className="text-indigo-400">✔</span>
              Help you achieve optimal oral health
            </li>
            {/* <li className="flex items-center gap-2">
              <span className="text-indigo-400">✔</span>
              Full Mouth X-ray Facility
            </li> */}
          </ul>
        </div>
      </div>
      {/* Right Image - Tooth Shape Mask */}
      <div className="flex-1 flex justify-center items-center w-full h-72 md:h-[420px] relative">
        <div className="w-64 h-64 md:w-[420px] md:h-[520px] rounded-3xl shadow-xl  flex items-center justify-center">
          <img src="/den7.jpg" className="h-full w-full rounded-xl object-cover" />
        </div>
      </div>
    </section>
  );
}
