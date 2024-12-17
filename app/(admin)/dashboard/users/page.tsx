import Image from "next/image";
import Link from "next/link";
import Pagination from "@/components/dashboard/pagination/pagination";
import Search from "@/components/dashboard/search/search";

import { users } from "@/model/data";
import { PiPlusCircleBold } from "react-icons/pi";

export default function UsersPage() {
  return (
    <div className="bg-slate-100 p-5 rounded mt-5">
      <div className="flex items-center justify-between">
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className="flex items-center gap-1 p-2.5 bg-btn-light text-yellow-700 font-medium border-none rounded cursor-pointer">
            <PiPlusCircleBold />
            Add New
          </button>
        </Link>
      </div>
      <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10 mt-5">
        <table className="table table-fixed w-full">
          <thead>
            <tr className="bg-slate-200">
              <td className="w-1/4 text-left text-gray-600 font-bold uppercase">
                Name
              </td>
              <td className="w-1/4 text-left text-gray-600 font-bold uppercase">
                Email
              </td>
              <td className="w-1/4 text-left text-gray-600 font-bold uppercase">
                Created At
              </td>
              <td className="w-1/4 text-left text-gray-600 font-bold uppercase">
                Role
              </td>
              <td className="w-1/4 text-left text-gray-600 font-bold uppercase">
                Status
              </td>
              <td className="w-1/4 text-left text-gray-600 font-bold uppercase">
                Action
              </td>
            </tr>
          </thead>
          <tbody className="bg-white">
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b border-slate-200 hover:bg-orange-100"
              >
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2.5">
                    <Image
                      src={user.img || "/noavatar.png"}
                      alt=""
                      width={40}
                      height={40}
                      className="rounded-full object-cover w-10 h-10"
                    />
                    {user.username}
                  </div>
                </td>
                <td className="py-4 px-6">{user.email}</td>
                <td className="py-4 px-6">
                  {user.createdAt?.toString().slice(4, 16)}
                </td>
                <td className="py-4 px-6">
                  {user.isAdmin ? "Admin" : "Client"}
                </td>
                <td className="py-4 px-6">
                  {user.isActive ? "active" : "passive"}
                </td>
                <td className="py-4 px-6">
                  <div className="flex gap-2.5">
                    <Link href={`/dashboard/users/${user.id}`}>
                      <button className="p-2.5 rounded text-yellow-900 border-none cursor-pointer bg-yellow-400">
                        View
                      </button>
                    </Link>
                    <form>
                      <input type="hidden" name="id" value={user.id} />
                      <button className="p-2.5 rounded text-red-900 border-none cursor-pointer bg-red-400">
                        Delete
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex bg-white justify-center py-4">
          <Pagination count={2} />
        </div>
      </div>
    </div>
  );
}
