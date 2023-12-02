import React from "react";

const Guide = () => {
  return (
    <div>
      <div className="w-full min-h-screen p-10">
        <p className="text-center font-d text-3xl md:text-5xl">Guide</p>
        <div className=" flex lg:flex-row flex-col">
          <div className="lg:w-1/2  content-center lg:py-[100px] py-10">
            <img
              src="https://img.freepik.com/premium-vector/group-young-tourist-characters-traveling-tourists-with-travel-backpack-going-vacation-trip-after-covid19-virus-was-diminish-vacation-people-isolated-vector-summer-character-woman-man_37895-828.jpg?size=626&ext=jpg&ga=GA1.1.867424154.1698537600&semt=ais"
              alt=""
            />
          </div>
          <div className="lg:w-1/2 text-center content-center lg:py-[150px] py-10 text-2xl md:text-4xl p-10 flex flex-col gap-6">
            <p>
              Want to help others have fun on their trips, then join us and
              let’s guide them together
            </p>
            <button className="bg-black text-white py-2 px-0">
              Become a Guide
            </button>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
};

export default Guide;
