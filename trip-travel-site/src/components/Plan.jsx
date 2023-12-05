import React from "react";

const Plan = () => {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      {/*left side*/}
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="https://images.unsplash.com/photo-1516655855035-d5215bcb5604?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fGJhcnJhY2tzJTIwbW91bnRhaW58ZW58MHwwfDB8fHww"
          alt=""
        />

        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhcnJhY2tzJTIwbW91bnRhaW58ZW58MHwwfDB8fHww"
          alt=""
        />

        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.unsplash.com/photo-1537519646099-335112f03225?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGJlYWNoJTIwc3VyZmluZ3xlbnwwfDB8MHx8fDA%3D"
          alt=""
        />

        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJlYWNofGVufDB8MHwwfHx8MA%3D%3D"
          alt=""
        />

        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="https://images.unsplash.com/photo-1496134732667-ae8d2853a045?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGJlYWNofGVufDB8MHwwfHx8MA%3D%3D"
          alt=""
        />
      </div>
      {/*right side*/}
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">Plan Your Next Trip</h3>
        <p className="text-2xl py-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <p className="pb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          asperiores itaque reiciendis modi dolorum odio dicta numquam eos, eius
          neque debitis dolores molestias maxime fugit officiis possimus odit
          provident! Dolorum?
        </p>
        <div>
          <button className="bg-black/80 text-white p-3 rounded-full mr-4 hover:shadow-xl">
            Learn More
          </button>
          <button className="bg-black/80 text-white hover:shadow-xl p-3 rounded-full">
            Book Your Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
