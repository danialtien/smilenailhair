import Image from "next/image";
import Link from "next/link";
import Pagination from "@/components/dashboard/pagination/pagination";
import Search from "@/components/dashboard/search/search";

import { users } from "@/model/data";

export default function UsersPage() {
  return (
    <div className="bg-slate-100 p-5 rounded mt-5">
      <div className="flex items-center justify-between">
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className="p-2.5 bg-[#5d57c9] text-rose-700 border-none rounded cursor-pointer">Add New</button>
        </Link>
      </div>
      <table className="table w-full">
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className="flex items-center gap-2.5">
                  <Image
                    src={user.img || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td>{user.isAdmin ? "Admin" : "Client"}</td>
              <td>{user.isActive ? "active" : "passive"}</td>
              <td>
                <div className="flex gap-2.5">
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className="p-2.5 rounded text-foreground border-none cursor-pointer bg-yellow-600">
                      View
                    </button>
                  </Link>
                  <form>
                    <input type="hidden" name="id" value={(user.id)} />
                    <button className="p-2.5 rounded text-foreground border-none cursor-pointer bg-red-600">
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={2} />
    </div>
  );
};

