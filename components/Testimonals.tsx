import React from "react";
import Testimonalcard from "./Testimonalcard";
const Testimonals = () => {
  return (
    <div className="min-h-screen p-4">
      <div>
        <p className="font-d text-3xl text-center lg:text-5xl">Testimonals</p>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:mx-12 md:grid-cols-2 lg:grid-cols-3">
        <Testimonalcard content={'abcdef'} name={'Indra'} imgadd={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfdWwVU65gZW5--Ypno_l2GBNhI_sinWkNUw&usqp=CAU'}/>
        <Testimonalcard content={'abcdef'} name={'Dinesh'} imgadd={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfdWwVU65gZW5--Ypno_l2GBNhI_sinWkNUw&usqp=CAU'} />
        <Testimonalcard content={'abcdef'} name={'Gowtham'} imgadd={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfdWwVU65gZW5--Ypno_l2GBNhI_sinWkNUw&usqp=CAU'} />
        <Testimonalcard content={'I like Animals and you can call me a Zoophile'} name={'Abhiram'} imgadd={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfdWwVU65gZW5--Ypno_l2GBNhI_sinWkNUw&usqp=CAU'} />
        <Testimonalcard content={"Scars On The Back Are A Swordsman's Shame."} name={'Zoro'} imgadd={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfdWwVU65gZW5--Ypno_l2GBNhI_sinWkNUw&usqp=CAU'} />
        <Testimonalcard content={'Even the strongest of opponents always have a weakness.'} name={'Itachi'} imgadd={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfdWwVU65gZW5--Ypno_l2GBNhI_sinWkNUw&usqp=CAU'} />
      </div>
    </div>
  );
};

export default Testimonals;
