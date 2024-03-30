import React from "react";

const FirstPage = () => {
  return (
    <div className="h-5/6 flex w-full justify-center items-center ">
      <div className="relative overflow-hidden">
        <div className="relative z-10">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
            <div className="max-w-3xl text-start mx-auto">
              <div className="mt-20">
                <h1 className="about-text-h block text-sa text-xl md:text-4xl lg:text-5xl">
                  Navigating Through My Professional Voyage
                </h1>
              </div>

              <div className="max-w-3xl">
                <p className="text-about mt-5 text-justify">
                  In the fast-paced digital world, I've immersed myself in
                  innovation, strategic problem-solving, and an unquenchable
                  thirst for knowledge.Let me unveil the core principles guiding
                  my journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
