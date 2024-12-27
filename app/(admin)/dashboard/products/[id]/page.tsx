import Image from "next/image";

export default function SingleProductPage() {
  return (
    <div className="flex gap-12 mt-5">
      <div className="w-2/12 bg-slate-100 p-5 rounded font-bold text-yellow-700 h-max">
        <div className="w-full h-[300px] relative rounded overflow-hidden mb-5">
          <Image src="/images/Dashboard/noavatar.png" alt="" fill />
        </div>
        Product A
      </div>
      <div className="w-10/12 bg-slate-100 p-5 rounded">
        <form className="flex flex-col">
          <input type="hidden" name="id" value="1" />
          <label className="text-xs font-bold">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Product A"
            className="p-2 mb-2 border border-solid border-orange-300 rounded bg-brown-50 text-foreground mx-2"
          />
          <label className="text-xs font-bold">Price</label>
          <input
            type="number"
            name="price"
            placeholder="10$"
            className="p-2 mb-2 border border-solid border-orange-300 rounded bg-brown-50 text-foreground mx-2"
          />
          <label className="text-xs font-bold">Stock</label>
          <input
            type="number"
            name="stock"
            placeholder="99"
            className="p-2 mb-2 border border-solid border-orange-300 rounded bg-brown-50 text-foreground mx-2"
          />
          <label className="text-xs font-bold">Color</label>
          <input
            type="text"
            name="color"
            placeholder="color"
            className="p-2 mb-2 border border-solid border-orange-300 rounded bg-brown-50 text-foreground mx-2"
          />
          <label className="text-xs font-bold">Size</label>
          <input
            name="size"
            placeholder="size"
            className="p-2 mb-2 border border-solid border-orange-300 rounded bg-brown-50 text-foreground mx-2"
          />
          <label className="text-xs font-bold">Cat</label>
          <select
            name="cat"
            id="cat"
            className="p-2 mb-2 border border-solid border-orange-300 rounded bg-brown-50 text-foreground mx-2"
          >
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label className="text-xs font-bold">Description</label>
          <textarea
            name="desc"
            id="desc"
            rows={10}
            placeholder="This is a product A"
            className="p-2 mb-2 border border-solid border-orange-300 rounded bg-brown-50 text-foreground mx-2"
          ></textarea>
          <button className="w-full p-2 bg-brown-100 text-yellow-900 border-none rounded cursor-pointer mt-5 hover:bg-orange-100 hover:text-orange-700">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
