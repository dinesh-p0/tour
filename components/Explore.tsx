import React from "react";

const Explore = () => {
  return (
    // <div className='min-h-screen flex-col flex-wrap'>
    //     <div className='flex flex-wrap justify-between gap-[30px] px-[50px]'>
    //         <div className="h-[450px] w-[300px] overflow-hidden rounded-2xl flex flex-col  items-center shadow-lg ">
    //             <img src="https://newsmeter.in/h-upload/2023/03/23/342090-2023-03-23-180739.webp" alt="" />
    //             <p  className='pt-2'>
    //             Hyderabad
    //             </p>
    //         </div>
    //         <div className="h-[500px] w-[300px] overflow-hidden flex flex-col  items-center shadow-lg ">
    //             <img src="https://newsmeter.in/h-upload/2023/03/23/342090-2023-03-23-180739.webp" alt="" />
    //             <p className='pt-1'>
    //             Hyderabad
    //             </p>
    //         </div>
    //         <div className="h-[500px] w-[300px] overflow-hidden flex flex-col gap-2 items-center">
    //             <img src="https://newsmeter.in/h-upload/2023/03/23/342090-2023-03-23-180739.webp" alt="" />
    //             <p>
    //             Hyderabad
    //             </p>
    //         </div>
    //         <div className="h-[500px] w-[300px] overflow-hidden flex flex-col gap-2 items-center">
    //             <img src="https://newsmeter.in/h-upload/2023/03/23/342090-2023-03-23-180739.webp" alt="" />
    //             <p>
    //             Hyderabad
    //             </p>
    //         </div>
    //         <div className="h-[500px] w-[300px] overflow-hidden flex flex-col gap-2 items-center">
    //             <img src="https://newsmeter.in/h-upload/2023/03/23/342090-2023-03-23-180739.webp" alt="" />
    //             <p>
    //             Hyderabad
    //             </p>
    //         </div>
    //         <div className="h-[500px] w-[300px] overflow-hidden flex flex-col  items-center shadow-lg ">
    //             <img src="https://newsmeter.in/h-upload/2023/03/23/342090-2023-03-23-180739.webp" alt="" />
    //             <p>
    //             Hyderabad
    //             </p>
    //         </div>
    //         <div className="h-[400px] w-[300px] overflow-hidden flex flex-col  items-center shadow-lg ">
    //             <img src="https://newsmeter.in/h-upload/2023/03/23/342090-2023-03-23-180739.webp" alt="" />
    //             <p>
    //             Hyderabad
    //             </p>
    //         </div>
    //         <div className="h-[500px] w-[300px] overflow-hidden flex flex-col  items-center shadow-lg ">
    //             <img src="https://newsmeter.in/h-upload/2023/03/23/342090-2023-03-23-180739.webp" alt="" />
    //             <p>
    //             Hyderabad
    //             </p>
    //         </div>
    //     </div>
    // </div>
    <div className="lg:min-h-screen mt-[50px] py-10" id="Explore">
      <div className="text-center">
        <p className="font-d text-3xl md:text-5xl">Popular Destinations</p>
      </div>
      <div className="grid grid-flow-col  grid-cols-3 gap-8 p-4">
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/71/Charminar_Hyderabad_1.jpg"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="col-start-3">
          <img
            src="https://images.lifestyleasia.com/wp-content/uploads/sites/6/2023/02/17135842/things-to-do-in-mumbai-travel-guide-india-destinations-attractions-to-visit-1150x900.jpg"
            alt=""
            loading="lazy"
          />
        </div>
        
        <div>
          <img
            src="https://deih43ym53wif.cloudfront.net/Rajpath-delhi-shutterstock_1195751923.jpg_7647e1aad2.jpg"
            alt=""
            loading="lazy"
          />
        </div>
        <div>
          <img
            src="https://static.toiimg.com/photo/msid-102383896,width-96,height-65.cms"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="row-start-1 col-start-2 col-span-2">
          <img
            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/f0/goa.jpg?w=700&h=500&s=1"
            alt=""
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Explore;
