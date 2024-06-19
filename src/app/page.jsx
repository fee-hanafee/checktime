"use client";

import { useRouter } from "next/navigation";
import  { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  // useEffect(() => {
  //   if (true) {
  //     router.replace("/login");
  //   }
  // }, []);
  return (
    <main>
      <h1 className="text-red-400">Hello</h1>
    </main>
  );
}
