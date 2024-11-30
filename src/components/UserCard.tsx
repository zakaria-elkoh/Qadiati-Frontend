// import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "./ui/card";

interface UserCardProps {
  name: string;
  title: string;
  company: string;
  imageUrl: string;
  mutualConnections: { name: string; imageUrl: string }[];
}

export function UserCard({
  name,
  title,
  company,
  imageUrl,
  mutualConnections,
}: UserCardProps) {
  return (
    <Card className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-300">
      <div className="relative h-20 bg-gray-200">
        <img
          src={imageUrl}
          alt={name}
          width={80}
          height={80}
          className="absolute bottom-0 left-4 transform translate-y-1/2 rounded-full border-4 border-white"
        />
      </div>
      <div className="p-4 pt-12">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-sm text-gray-600">{company}</p>
        <div className="mt-4 flex items-center">
          {mutualConnections.slice(0, 2).map((connection, index) => (
            <img
              key={index}
              src={connection.imageUrl}
              alt={connection.name}
              width={24}
              height={24}
              className="rounded-full border border-white -ml-2 first:ml-0"
            />
          ))}
          {mutualConnections.length > 0 && (
            <span className="text-xs text-gray-600 ml-2">
              {mutualConnections[0].name} and {mutualConnections.length - 1}{" "}
              other mutual connection
              {mutualConnections.length > 2 ? "s" : ""}
            </span>
          )}
        </div>
        <Button className="w-full mt-4">Connect</Button>
      </div>
    </Card>
  );
}
