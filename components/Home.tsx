import React from "react";
const Home = () => {
  return (
    <div id="Home">
      <div className="hidden lg:min-h-screen lg:flex flex-row w-full">
        <div className="w-1/2 flex flex-col py-[50px] ">
          <div className=" left-0">
            <img src="/4.jpg" className="w-[70%] rounded-r-full" alt="a" />
          </div>
        </div>
        <div className="w-1/2">
          <div className="py-[30%] px-[10%] text-center gap-5">
            <p className="text-6xl">
              Find the best Guide that can make your trip the Bestt.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:hidden flex flex-col w-full justify-items-center min-h-screen">
        <div className="h-1/2">
          <img src="/4.jpg" className=" w-[70%] rounded-r-full" alt="" />
        </div>
        <div className="text-center pt-[20%] px-6">
             <p className="text-3xl">
              Find the best Guide that can make your trip the Bestt.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
