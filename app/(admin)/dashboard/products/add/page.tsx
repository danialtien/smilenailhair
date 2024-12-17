export default function AddProductPage() {
  return (
    <div className="bg-slate-100 p-5 rounded mt-5">
      <form className="flex flex-wrap justify-between">
        <input type="text" placeholder="title" name="title" required className="p-7 bg-yellow-50 text-foreground border-2 border-solid border-yellow-700 rounded mb-7 w-2/5" />
        <select name="cat" id="cat" className="p-7 bg-yellow-50 text-foreground border-2 border-solid border-yellow-700 rounded mb-7 w-2/5">
          <option value="general">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input type="number" placeholder="price" name="price" required className="p-7 bg-yellow-50 text-foreground border-2 border-solid border-yellow-700 rounded mb-7 w-2/5" />
        <input type="number" placeholder="stock" name="stock" required className="p-7 bg-yellow-50 text-foreground border-2 border-solid border-yellow-700 rounded mb-7 w-2/5" />
        <input type="text" placeholder="color" name="color" className="p-7 bg-yellow-50 text-foreground border-2 border-solid border-yellow-700 rounded mb-7 w-2/5" />
        <input type="text" placeholder="size" name="size" className="p-7 bg-yellow-50 text-foreground border-2 border-solid border-yellow-700 rounded mb-7 w-2/5" />
        <textarea
          required
          name="desc"
          id="desc"
          rows={16}
          placeholder="Description"
          className="p-7 bg-yellow-50 text-foreground border-2 border-solid border-yellow-700 rounded mb-7 w-full"
        ></textarea>
        <button type="submit" className="w-full p-7 bg-teal-500 text-foreground border-none rounded cursor-pointer">Submit</button>
      </form>
    </div>
  );
};
