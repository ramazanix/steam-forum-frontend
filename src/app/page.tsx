"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const authorizeSteam = () => {
    router.replace("https://ramazanix.tech/auth/login");
  };
  return (
    <main>
      <button onClick={authorizeSteam}>Authorize through Steam</button>
    </main>
  );
}
