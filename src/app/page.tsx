"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const authorizeSteam = () => {
    router.push(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`);
  };
  return (
    <main>
      <button onClick={authorizeSteam}>Authorize through Steam</button>
    </main>
  );
}
