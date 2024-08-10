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
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users/inventory?game=570&currency=5`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      },
    )
      .then((response) => response.json())
      .then((data) => {
        setUserInventoryData(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const filteredItems = userInventoryData
    ? userInventoryData.items.filter((item) =>
        item.marketHashName.toLowerCase().includes(itemNameValue.toLowerCase()),
      )
    : [];

  return (
    <>
      {!isLoading && (
        <div className="flex flex-col">
          <div className="h-10 w-fit self-center">
            <input
              type="text"
              value={itemNameValue}
              onChange={(e) => {
                setItemNameValue(e.target.value);
              }}
              className="h-full rounded-lg border-2 border-gray-400 px-2 shadow-lg focus:border-accent_2 focus:outline-none"
            />
          </div>
          <ItemsTable className="my-5 min-w-full self-center">
            {filteredItems.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className="relative h-fit transition-transform hover:scale-105"
                  title={item.marketHashName}
                >
                  <ItemImage
                    src={item.iconUrlLarge || item.iconUrl}
                    alt={item.marketHashName}
                    rarityColor={item.tags[0].color}
                  />
                  <span className="absolute bottom-1 right-2 font-medium text-neutral-200">
                    {item.priceInfo?.lowestPrice || item.priceInfo?.medianPrice}
                  </span>
                </div>
              );
            })}
          </ItemsTable>
        </div>
      )}
    </>
  );
}
