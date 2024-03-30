import React from "react";

const FourPage = () => {
  return (
    <div>
      <div className=" flex w-full justify-center items-center snap-always snap-start ">
        <div className="relative overflow-hidden">
          <div className="relative z-10">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
              <div className="max-w-3xl text-start mx-auto">
                <div className="mt-1 max-w-2xl">
                  <h1 className="about-text-h block text-sa text-xl md:text-4xl lg:text-5xl">
                    Diversity
                  </h1>
                </div>

                <div className="mt-1 max-w-3xl">
                  <p className="text-about mt-5 text-start md:text-justify  dark:text-white">
                    The world of technology is expansive, and I've explored its
                    diverse landscapes. From data annotation to SEO analysis and
                    more, I've gained skills and experiences that enrich my
                    journey.
                  </p>
                </div>
                <div className="mt-1 max-w-3xl">
                  <p className="text-about mt-5 text-start md:text-justify  dark:text-white ">
                    Let's journey through the digital world together, where
                    technology and creativity unite to overcome challenges. If
                    you're interested, let's connect and move forward into the
                    future of tech!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourPage;
