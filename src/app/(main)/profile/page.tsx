"use client";

import { useAuth } from "@/contexts/AuthContext";
import { unixTimeStampToDate } from "@/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function Profile() {
  const { user } = useAuth();
  const [userCreated, setUserCreated] = useState<string>("");
  const [userLogoff, setUserLogoff] = useState<string>("");

  useEffect(() => {
    if (user) {
      const created = unixTimeStampToDate(user.timecreated);
      const lastLogoff = unixTimeStampToDate(user.lastlogoff);

      setUserCreated(created.toLocaleString());
      setUserLogoff(lastLogoff.toLocaleString());
    }
  }, [user]);

  return (
    <div className="flex justify-center">
      {user ? (
        <div className="shadow-shadow flex flex-col items-center gap-y-6 rounded-lg bg-white p-10 shadow-lg">
          <Image
            alt="Profile avatar"
            src={user?.avatarfull}
            width={150}
            height={150}
            className="shadow-shadow content-center rounded text-center shadow-md"
          />
          <h2 className="text-center text-xl font-semibold">
            {user.personaname}
          </h2>
          <div className="border-header grid grid-cols-2 grid-rows-3 rounded-md border-2">
            <p className="border-header border-r-2 p-2 text-center">Steam ID</p>
            <p className="p-2 text-start">{user.steamid}</p>
            <p className="border-header border-y-2 border-r-2 p-2 text-center">
              Registered
            </p>
            <p className="border-header border-y-2 p-2 text-start">
              {userCreated}
            </p>
            <p className="border-header border-r-2 p-2 text-center">
              Last login
            </p>
            <p className="p-2 text-start">{userLogoff}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
