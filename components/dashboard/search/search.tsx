"use client";
import { MdSearch } from "react-icons/md";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { useDebouncedCallback } from "use-debounce";

interface SearchProps {
  placeholder: string;
}

export default function Search({ placeholder } : SearchProps) {
  // const searchParams = useSearchParams();
  // const { replace } = useRouter();
  // const pathname = usePathname();

  // const handleSearch = useDebouncedCallback((e) => {
  //   const params = new URLSearchParams(searchParams);

  //   params.set("page", 1);

  //   if (e.target.value) {
  //     e.target.value.length > 2 && params.set("q", e.target.value);
  //   } else {
  //     params.delete("q");
  //   }
  //   replace(`${pathname}?${params}`);
  // }, 300);

  return (
    <div className="flex items-center px-3.5 py-2 bg-brown-50 rounded-lg w-full max-w-sm space-x-2 border border-orange-300 shadow">
      <MdSearch className="h-5 w-5" />
      <input
        type="search"
        placeholder={placeholder}
        className="w-full px-1 border-none bg-transparent"
        // onChange={handleSearch}
      />
    </div>
  );
};
