"use client"
import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
import Search from "../search/search";

export default function Navbar() {
  const pathName = usePathname();

  return (
    <div className="bg-base p-5 rounded-lg flex items-center justify-between">
      <div className="text-lg text-yellow-700 font-bold capitalize">
        {`/${pathName.split("/").pop()}`}
      </div>
      <div className="flex items-center gap-5">
        <Search placeholder="Search..." />
        <div className="flex gap-5">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
}
