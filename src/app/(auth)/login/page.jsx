"use client";

import React from "react";
import Layout from "./Layout";
import Login from "./Login";
import Welcome from "./Welcome";
import useAuth from "@/app/context/AuthContextProvider";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { user } = useAuth();
  const router = useRouter();
  if (user) {
    return router.replace("/");
  }
  return (
    <Layout>
      <Welcome />
      <Login />
    </Layout>
  );
}
