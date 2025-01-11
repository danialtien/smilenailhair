import Navbar from "@/components/dashboard/navbar/navbar";
import Sidebar from "@/components/dashboard/sidebar/sidebar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] flex">
      <div className="bg-base w-2/12 p-5 min-h-screen rounded-xl">
        <Sidebar />
      </div>
      <div className="flex flex-col w-10/12 p-5">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
