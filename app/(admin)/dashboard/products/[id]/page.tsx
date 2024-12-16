import Image from "next/image";

export default function SingleProductPage() {
  return (
    <div className="flex gap-7 mt-5">
      <div className="w-2/12 bg-btn-light p-5 rounded font-bold text-yellow-700 h-max">
        <div className="w-full h-[300px] relative rounded overflow-hidden mb-5">
          <Image src="/images/Dashboard/noavatar.png" alt="" fill />
        </div>
        Product A
      </div>
      <div className="w-10/12 bg-btn-light p-5 rounded">
        <form className="flex flex-col">
          <input type="hidden" name="id" value="1" className="p-5 rounded border-2 border-solid border-yellow-700 bg-background text-foreground mx-2" />
          <label className="text-sm">Title</label>
          <input type="text" name="title" placeholder="Product A" className="p-5 rounded border-2 border-solid border-yellow-700 bg-background text-foreground mx-2" />
          <label className="text-sm">Price</label>
          <input type="number" name="price" placeholder="10$" className="p-5 rounded border-2 border-solid border-yellow-700 bg-background text-foreground mx-2" />
          <label className="text-sm">Stock</label>
          <input type="number" name="stock" placeholder="99" className="p-5 rounded border-2 border-solid border-yellow-700 bg-background text-foreground mx-2" />
          <label className="text-sm">Color</label>
          <input
            type="text"
            name="color"
            placeholder="color"
            className="p-5 rounded border-2 border-solid border-yellow-700 bg-background text-foreground mx-2"
          />
          <label className="text-sm">Size</label>
          <textarea
            name="size"
            placeholder="size"
            className="p-5 rounded border-2 border-solid border-yellow-700 bg-background text-foreground mx-2"
          />
          <label className="text-sm">Cat</label>
          <select name="cat" id="cat" className="p-5 rounded border-2 border-solid border-yellow-700 bg-background text-foreground mx-2">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label className="text-sm">Description</label>
          <textarea
            name="desc"
            id="desc"
            rows={10}
            placeholder="This is a product A"
            className="p-5 rounded border-2 border-solid border-yellow-700 bg-background text-foreground mx-2"
          ></textarea>
          <button className="w-full p-5 bg-teal-500 text-foreground border-none rounded cursor-pointer mt-5">Update</button>
        </form>
      </div>
    </div>
  );
};
