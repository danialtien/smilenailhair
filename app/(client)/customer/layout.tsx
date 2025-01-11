import NavbarCustom from "@/components/client/NavbarCustom/NavbarCustom";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      {/* <Navbar /> */}
      <NavbarCustom />
      {children}
    </>
  );
}
