"use client"
import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

export default function Navbar() {
  const pathName = usePathname();

  return (
    <div className="web-header p-5 rounded-lg flex items-center justify-between">
      <div className="text-lg text-yellow-700 font-bold capitalize">
        {`/${pathName.split("/").pop()}`}
      </div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2.5 bg-placeholder p-2.5 rounded-lg">
          <MdSearch />
          <input type="text" placeholder="Search..." className="bg-transparent border-none rounded-none" />
        </div>
        <div className="flex gap-5">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
}
