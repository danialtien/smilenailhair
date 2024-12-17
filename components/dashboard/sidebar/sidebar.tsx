import { JSX } from "react";
import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
// import { auth, signOut } from "@/app/auth";

export interface MenuItem {
  title: string;
  path: string;
  icon: JSX.Element;
}

interface MenuCategory {
  title: string;
  list: MenuItem[];
}

const menuItems: MenuCategory[] = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

export default function Sidebar() {
  // const { user } = await auth();

  return (
    <div className="sticky top-10">
      <div className="flex items-center gap-5 mb-5">
        <Image
          className="rounded-full object-cover"
          src="/images/Dashboard/noavatar.png"
          alt=""
          width="50"
          height="50"
        />
        <div className="flex flex-col">
          <span className="font-medium">Alex Helio Endour</span>
          <span className="text-sm text-yellow-700">Administrator</span>
        </div>
      </div>
      <ul className="list-none">
        {menuItems.map((items) => (
          <li key={items.title}>
            <span className="text-yellow-700 font-bold font-sm my-2.5">{items.title}</span>
            {items.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <form
        // action={async () => {
        //   "use server";
        //   await signOut();
        // }}
      >
        <button className="p-5 my-1.25 flex items-center gap-2.5 cursor-pointer rounded-lg bg-none border-none rounded-lg text-red-700 font-semibold w-full hover:bg-orange-100">
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  );
};