import Image from "next/image";

export default function Transactions() {
  return (
    <div className="bg-slate-100 p-5 rounded-lg">
      <h2 className="mb-5 font-extralight">Latest Transactions</h2>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <td className="p-2.5">Name</td>
            <td className="p-2.5">Status</td>
            <td className="p-2.5">Date</td>
            <td className="p-2.5">Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="pb-2">
              <div className="flex gap-2.5 items-center">
                <Image
                  src="/images/Dashboard/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className="object-cover rounded-full"
                />
                John Doe
              </div>
            </td>
            <td>
              <span className="rounded p-1.5 text-sm text-yellow-900 bg-yellow-400">
                Pending
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td className="pb-2">
              <div className="flex gap-2.5 items-center">
                <Image
                  src="/images/Dashboard/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className="object-cover rounded-full"
                />
                John Doe
              </div>
            </td>
            <td>
              <span className="rounded p-1.5 text-sm text-lime-900 bg-lime-400">Done</span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td className="pb-2">
              <div className="flex gap-2.5 items-center">
                <Image
                  src="/images/Dashboard/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className="object-cover rounded-full"
                />
                John Doe
              </div>
            </td>
            <td>
              <span className="rounded p-1.5 text-sm text-red-900 bg-red-400">
                Cancelled
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td className="pb-2">
              <div className="flex gap-2.5 items-center">
                <Image
                  src="/images/Dashboard/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className="object-cover rounded-full"
                />
                John Doe
              </div>
            </td>
            <td>
              <span className="rounded p-1.5 text-sm text-yellow-900 bg-yellow-400">
                Pending
              </span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
