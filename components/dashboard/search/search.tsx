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
    <div className="flex items-center gap-2.5 p-2.5 bg-placeholder rounded w-max">
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent border-none text-foreground outline-none"
        // onChange={handleSearch}
      />
    </div>
  );
};
