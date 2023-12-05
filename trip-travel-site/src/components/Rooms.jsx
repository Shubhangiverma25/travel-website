import React from "react";

const Rooms = () => {
  return (
    <div className="max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 mg:md-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4">
      <div className="lg:top-20 relative lg:col-span-1 col-span-2">
        <h3 className="text-2xl font-bold">Fine Interior Rooms</h3>
        <p className="pt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque amet
          dolore consectetur illum vel fuga iure odit illo deserunt magnam!
        </p>
      </div>

      <div className="grid grid-cols-2 col-span-2 gap-2">
        <img
          className="object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHJvb21zfGVufDB8fDB8fHww"
          alt="/"
        />

        <img
          className="row-span-2 object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsJTIwcm9vbXMlMjBpbnRlcmlvcnN8ZW58MHx8MHx8fDA%3D"
          alt="/"
        />

        <img
          className="object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1549294413-26f195200c16?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGhvdGVsJTIwcm9vbXMlMjBpbnRlcmlvcnN8ZW58MHx8MHx8fDA%3D"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Rooms;
