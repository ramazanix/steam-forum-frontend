"use client";

import Button from "@/components/Button";
import { ItemImage } from "@/components/ItemImage";
import { ItemsTable } from "@/components/ItemsTable";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";

export default function UserInventoryPage() {
  const { user } = useAuth();
  const [userInventoryData, setUserInventoryData] = useState<UserInventory>();
  const [isLoading, setIsLoading] = useState(true);
  const [itemNameValue, setItemNameValue] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/users/inventory/?game=570&currency=5", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setUserInventoryData(data))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  console.log(userInventoryData);

  return (
    <>
      {!isLoading && (
        <>
          <div className="h-10 w-fit">
            <input
              value={itemNameValue}
              onChange={(e) => {
                setItemNameValue(e.target.value);
              }}
              className="h-full"
            />
            <Button rounded="lg" onClick={() => {}}>
              Найти
            </Button>
          </div>
          <ItemsTable className="mb-5">
            {userInventoryData!.items.map((item, idx) => {
              return (
                <ItemImage
                  key={idx}
                  src={item.iconUrlLarge || item.iconUrl}
                  alt={item.marketHashName}
                  rarityColor={item.tags[0].color}
                />
              );
            })}
          </ItemsTable>
        </>
      )}
    </>
  );
}
