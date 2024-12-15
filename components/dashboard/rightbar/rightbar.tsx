import Image from "next/image";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

export default function Rightbar () {
  return (
    <div className="fixed mr-5">
      <div className="bg-gradient-to-t from-[#d7c1a7] to-orange-200 px-5 py-6 rounded-lg mb-5 relative">
        <div className="absolute right-0 bottom-0 w-1/2 h-1/2">
          <Image className="object-contain opacity-20" src="/images/Dashboard/astronaut.png" alt="" fill />
        </div>
        <div className="flex flex-col gap-6">
          <span className="font-bold">🔥 Available Now</span>
          <h3 className="text-yellow-900 font-bold text-base">
            How to use the new version of the admin dashboard?
          </h3>
          <span className="text-yellow-800 font-medium text-sm">Takes 4 minutes to learn</span>
          <p className="text-yellow-800 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className="flex p-2.5 items-center gap-2.5 w-max bg-orange-100 border-none rounded cursor-pointer">
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className="bg-gradient-to-t from-[#d7c1a7] to-orange-200 px-5 py-6 rounded-lg mb-5 relative">
        <div className="flex flex-col gap-6">
          <span className="font-bold">🚀 Coming Soon</span>
          <h3 className="text-yellow-900 font-bold text-base">
            New server actions are available, partial pre-rendering is coming
            up!
          </h3>
          <span className="text-yellow-800 font-medium text-sm">Boost your productivity</span>
          <p className="text-yellow-800 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className="flex p-2.5 items-center gap-2.5 w-max bg-orange-100 border-none rounded cursor-pointer">
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};