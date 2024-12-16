import Image from "next/image";

import { user } from "@/model/data";

export default function SingleUserPage() {
  return (
    <div className="flex gap-12 mt-5">
      <div className="w-2/12 bg-slate-100 p-5 rounded font-bold text-yellow-700 h-max">
        <div className="w-full h-[300px] relative rounded overflow-hidden mb-5">
          <Image src={user.img || "/noavatar.png"} alt="" fill />
        </div>
        {user.username}
      </div>
      <div className="w-10/12 bg-slate-100 p-5 rounded">
        <form className="flex flex-col">
          <input type="hidden" name="id" value={user.id} className="p-5 border-2 border-solid border-[#2e374a] rounded bg-btn-light text-foreground mx-2" />
          <label className="text-sm">Username</label>
          <input type="text" name="username" placeholder={user.username} className="p-5 border-2 border-solid border-[#2e374a] rounded bg-btn-light text-foreground mx-2" />
          <label className="text-sm">Email</label>
          <input type="email" name="email" placeholder={user.email} className="p-5 border-2 border-solid border-[#2e374a] rounded bg-btn-light text-foreground mx-2" />
          <label className="text-sm">Password</label>
          <input type="password" name="password" className="p-5 border-2 border-solid border-[#2e374a] rounded bg-btn-light text-foreground mx-2" />
          <label className="text-sm">Phone</label>
          <input type="text" name="phone" placeholder={user.phone} className="p-5 border-2 border-solid border-[#2e374a] rounded bg-btn-light text-foreground mx-2" />
          <label className="text-sm">Address</label>
          <input type="text" name="address" placeholder={user.address} className="p-5 border-2 border-solid border-[#2e374a] rounded bg-btn-light text-foreground mx-2" />
          <label className="text-sm">Is Admin?</label>
          <select name="isAdmin" id="isAdmin" className="p-5 border-2 border-solid border-[#2e374a] rounded bg-btn-light text-foreground mx-2">
            <option selected={user.isAdmin}>Yes</option>
            <option selected={!user.isAdmin}>No</option>
          </select>
          <label className="text-sm">Is Active?</label>
          <select name="isActive" id="isActive" className="p-5 border-2 border-solid border-[#2e374a] rounded bg-btn-light text-foreground mx-2">
            <option selected={user.isActive}>Yes</option>
            <option selected={!user.isActive}>No</option>
          </select>
          <button className="w-full p-5 bg-btn-light text-foreground border-none rounded cursor-pointer mt-5">Update</button>
        </form>
      </div>
    </div>
  );
};

