"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function AuthorizeUser() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const accessToken = searchParams.get("accessToken");
    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
      router.replace("/");
    }
  }, []);

  return <p>Please wait...</p>;
}
