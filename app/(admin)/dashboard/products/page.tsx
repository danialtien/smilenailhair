import Link from "next/link";
import Image from "next/image";
import Search from "@/components/dashboard/search/search";
import Pagination from "@/components/dashboard/pagination/pagination";

import { products } from "@/model/data";

export default function ProductsPage() {
  return (
    <div className="bg-slate-100 p-5 rounded mt-5">
      <div className="flex items-center justify-between">
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button className="p-2.5 bg-btn-light text-rose-700 font-medium border-none rounded cursor-pointer hover:bg-yellow-700 hover:text-rose-100">
            Add New
          </button>
        </Link>
      </div>
      <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10 mt-5">
        <table className="table table-fixed w-full">
          <thead>
            <tr className="bg-slate-200">
              <td className="w-1/4 text-left text-gray-600 font-bold uppercase">
                Title
              </td>
              <td className="w-1/4 text-left text-gray-600 font-bold uppercase">
                Description
              </td>
              <td className="w-1/4 text-left text-gray-600 font-bold uppercase">
                Price
              </td>
              <td className="w-1/4 text-left text-gray-600 font-bold uppercase">
                Created At
              </td>
              <td className="w-1/4 text-left text-gray-600 font-bold uppercase">
                Stock
              </td>
              <td className="w-1/4 text-left text-gray-600 font-bold uppercase">
                Action
              </td>
            </tr>
          </thead>
          <tbody className="bg-white">
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-b border-slate-200 hover:bg-orange-100"
              >
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2.5">
                    <Image
                      src={product.img || "/images/Dashboard/noproduct.jpg"}
                      alt=""
                      width={40}
                      height={40}
                      className="rounded-full object-cover w-10 h-10"
                    />
                    {product.title}
                  </div>
                </td>
                <td className="py-4 px-6">{product.desc}</td>
                <td className="py-4 px-6">${product.price}</td>
                <td className="py-4 px-6">
                  {product.createdAt?.toString().slice(4, 16)}
                </td>
                <td className="py-4 px-6">{product.stock}</td>
                <td className="py-4 px-6">
                  <div className="flex gap-2.5">
                    <Link href={`/dashboard/products/${product.id}`}>
                      <button className="p-2.5 rounded text-foreground border-none cursor-pointer bg-yellow-600">
                        View
                      </button>
                    </Link>
                    <form>
                      <input type="hidden" name="id" value={product.id} />
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
        <div className="flex bg-white justify-center py-4">
          <Pagination count={2} />
        </div>
      </div>
    </div>
  );
}
