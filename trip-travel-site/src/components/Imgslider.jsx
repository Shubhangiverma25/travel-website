import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const Imgslider = () => {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8fDA%3D",
      title: "Pizza",
    },
    {
      url: "https://images.unsplash.com/photo-1544378730-8b5104b18790?q=80&w=2049&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Biryani",
    },
    {
      url: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZCUyMG1vbW98ZW58MHx8MHx8fDA%3D",
      title: "Momo",
    },
    {
      url: "https://images.unsplash.com/photo-1522784081430-8ac6a122cbc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA3fHxmb29kfGVufDB8MHwwfHx8MA%3D%3D",
      title: "MacnCheese",
    },
    {
      url: "https://images.unsplash.com/photo-1576698961062-0096e22f1767?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGZvb2QlMjBwYXN0YXxlbnwwfDB8MHx8fDA%3D",
      title: "Pasta",
    },
  ];

  const [currIndex, setIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currIndex - 1;
    setIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currIndex + 1;
    setIndex(newIndex);
  };

  return (
    <div className="max-w-full bg-slate-100 h-[580px] w-full m-auto py-16 flex justify-center relative group">
      <div
        className="w-[850px] h-full px-4 rounded-2xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${slides[currIndex].url})` }}
      ></div>

      {/*left arrow*/}
      <div className="absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={20} />
      </div>

      {/*right arrow*/}
      <div className="absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={20} />
      </div>
    </div>
  );
};

export default Imgslider;
