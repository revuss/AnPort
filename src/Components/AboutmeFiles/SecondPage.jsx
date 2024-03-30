import React from "react";

const SecondPage = () => {
  return (
    <div className="snap-always snap-start">
      <div className="h-5/6 w-full flex justify-center items-center ">
        <div className="relative overflow-hidden">
          <div className="relative z-10">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
              <div className="max-w-3xl text-start mx-auto">
                <div className="mt-1 max-w-2xl">
                  <h1 className="about-text-h block text-sa text-xl md:text-4xl lg:text-5xl">
                    Innovation{" "}
                  </h1>
                </div>

                <div className="mt-1 max-w-3xl">
                  <p className="text-about mt-5 text-start md:text-justify  dark:text-white">
                    I'm always looking for clever solutions, whether I'm
                    creating user-friendly web apps, improving code, or solving
                    tricky problems. Innovation keeps my tech journey exciting
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

export default SecondPage;
