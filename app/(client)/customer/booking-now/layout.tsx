"use client";

import dynamic from "next/dynamic";

const MultistepFormContextProvider = dynamic(
  () => import("./multistep-form-context"),
  {
    ssr: false,
  },
);

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="w-full my-5">
      <MultistepFormContextProvider>{children}</MultistepFormContextProvider>
    </main>
  );
}
