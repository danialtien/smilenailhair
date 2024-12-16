"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuItem } from "../sidebar";

interface MenuLinkProps {
  item: MenuItem;
}

export default function MenuLink({ item }: MenuLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`flex p-5 items-center gap-2.5 my-1 rounded-lg hover:bg-orange-100 ${pathname === item.path && "bg-orange-100"}`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
}

