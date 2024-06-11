"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const authorizeSteam = () => {
    router.replace(`${process.env.API_URL}/auth/login`);
  };
  return (
    <main>
      <button onClick={authorizeSteam}>Authorize through Steam</button>
    </main>
  );
}
