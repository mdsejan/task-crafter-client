import { Link } from "react-router-dom";
import bannerImg from "../../assets/bannerImg.png";
const Hero = () => {
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 before:bg-[#F0F1FB]">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-24 pb-10">
          {/* Announcement Banner */}
          <div className="flex justify-center">
            {/* <a
              className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 ps-3 rounded-full transition hover:border-gray-300"
              href="#"
            >
              PRO release - Join to waitlist
              <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600 ">
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </a> */}
          </div>
          {/* End Announcement Banner */}

          {/* Title */}
          <div className="mt-5 max-w-4xl text-center mx-auto">
            <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl ">
              Empower Your Productivity with Effortless
              <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
                Task Management
              </span>
            </h1>
          </div>
          {/* End Title */}
          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-md md:text-lg text-gray-600 ">
              Efficiently organize, prioritize, and track tasks with our
              intuitive dashboard. Experience fluid task management across
              devices for an optimized workflow.
            </p>
          </div>
          {/* Button */}
          <div className="mt-8 gap-3 flex justify-center">
            <Link
              className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 "
              to="/dashboard/user"
            >
              Let’s Explore
              <svg
                className="flex-shrink-0 w-4 h-4"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </Link>
          </div>

          <div className="flex justify-center mt-10">
            <img src={bannerImg} alt="Banner Image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
