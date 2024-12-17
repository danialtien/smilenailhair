import Image from "next/image";

import { user } from "@/model/data";

export default function SingleUserPage() {
  return (
    <div className="flex gap-12 mt-5">
      <div className="w-2/12 bg-slate-100 p-5 rounded font-bold text-yellow-700 h-max">
        <div className="w-full h-[300px] relative rounded overflow-hidden mb-5">
          <Image src={user.img || "/images/Dashboard/noavatar.png"} alt="" fill />
        </div>
        {user.username}
      </div>
      <div className="w-10/12 bg-slate-100 p-5 rounded">
        <form className="flex flex-col">
          <input
            type="hidden"
            name="id"
            value={user.id}
          />
          <label className="text-xs font-bold">Username</label>
          <input
            type="text"
            name="username"
            placeholder={user.username}
            className="p-2 mb-2 border-2 border-solid border-yellow-700 rounded bg-placeholder text-foreground mx-2" />
          <label className="text-xs font-bold">Email</label>
          <input
            type="email"
            name="email"
            placeholder={user.email}
            className="p-2 mb-2 border-2 border-solid border-yellow-700 rounded bg-placeholder text-foreground mx-2"
          />
          <label className="text-xs font-bold">Password</label>
          <input
            type="password"
            name="password"
            className="p-2 mb-2 border-2 border-solid border-yellow-700 rounded bg-placeholder text-foreground mx-2"
          />
          <label className="text-xs font-bold">Phone</label>
          <input
            type="text"
            name="phone"
            placeholder={user.phone}
            className="p-2 mb-2 border-2 border-solid border-yellow-700 rounded bg-placeholder text-foreground mx-2"
          />
          <label className="text-xs font-bold">Address</label>
          <input
            type="text"
            name="address"
            placeholder={user.address}
            className="p-2 mb-2 border-2 border-solid border-yellow-700 rounded bg-placeholder text-foreground mx-2"
          />
          <label className="text-xs font-bold">Is Admin?</label>
          <select
            name="isAdmin"
            id="isAdmin"
            className="p-2 mb-2 border-2 border-solid border-yellow-700 rounded bg-placeholder text-foreground mx-2"
          >
            <option selected={user.isAdmin}>Yes</option>
            <option selected={!user.isAdmin}>No</option>
          </select>
          <label className="text-xs font-bold">Is Active?</label>
          <select
            name="isActive"
            id="isActive"
            className="p-2 mb-2 border-2 border-solid border-yellow-700 rounded bg-placeholder text-foreground mx-2"
          >
            <option selected={user.isActive}>Yes</option>
            <option selected={!user.isActive}>No</option>
          </select>
          <button className="w-full p-2 bg-btn-light text-yellow-900 border-none rounded cursor-pointer mt-5">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
