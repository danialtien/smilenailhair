export default function AddUserPage() {
  return (
    <div className="bg-slate-100 p-5 rounded mt-5">
      <form className="flex flex-wrap justify-between">
        <input type="text" placeholder="username" name="username" required className="p-7 bg-brown-100 text-foreground border-2 border-solid border-[#2e374a] rounded mb-7 w-2/5" />
        <input type="email" placeholder="email" name="email" required className="p-7 bg-brown-100 text-foreground border-2 border-solid border-[#2e374a] rounded mb-7 w-2/5" />
        <input
          type="password"
          placeholder="password"
          name="password"
          required className="p-7 bg-brown-100 text-foreground border-2 border-solid border-[#2e374a] rounded mb-7 w-2/5"
        />
        <input type="phone" placeholder="phone" name="phone" className="p-7 bg-brown-100 text-foreground border-2 border-solid border-[#2e374a] rounded mb-7 w-2/5" />
        <select name="isAdmin" id="isAdmin" className="p-7 bg-brown-100 text-foreground border-2 border-solid border-[#2e374a] rounded mb-7 w-2/5">
          <option>
            Is Admin?
          </option>
          <option>Yes</option>
          <option>No</option>
        </select>
        <select name="isActive" id="isActive" className="p-7 bg-brown-100 text-foreground border-2 border-solid border-[#2e374a] rounded mb-7 w-2/5">
          <option>
            Is Active?
          </option>
          <option>Yes</option>
          <option>No</option>
        </select>
        <textarea
          name="address"
          id="address"
          rows={16}
          placeholder="Address" className="p-7 bg-brown-100 text-foreground border-2 border-solid border-[#2e374a] rounded mb-7 w-full"
        ></textarea>
        <button type="submit" className="w-full p-7 bg-brown-100 text-foreground border-none rounded cursor-pointer">Submit</button>
      </form>
    </div>
  );
};

