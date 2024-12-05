import FriendsRequestsList from "@/components/FriendsRequestsList";
import GrowList from "@/components/GrowList";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

const Connect = () => {
  const authUser = useSelector((state: RootState) => state.auth.authUser);

  const networkItems = [
    { name: "Connections", count: 953 },
    { name: "Contacts", count: null },
    { name: "Following & followers", count: null },
    { name: "Groups", count: 5 },
    { name: "Events", count: null },
    { name: "Pages", count: 369 },
    { name: "Newsletters", count: 26 },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-4 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1 h-fit">
          <CardHeader>
            <CardTitle>
              Manage my network ||{" "}
              {authUser?.family_name + " " + authUser?.given_name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {networkItems.map((item, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{item.name}</span>
                  {item.count !== null && (
                    <span className="text-gray-500">{item.count}</span>
                  )}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardContent className="p-0">
            <Tabs defaultValue="received">
              <TabsList className="w-full">
                <TabsTrigger value="grow" className="w-full">
                  Grow
                  <span className="ml-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    4
                  </span>
                </TabsTrigger>
                <TabsTrigger value="received" className="w-full">
                  Received
                  <span className="ml-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    10
                  </span>
                </TabsTrigger>
                <TabsTrigger value="sent" className="w-full">
                  Sent
                  <span className="ml-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    1
                  </span>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="grow" className="">
                <GrowList />
              </TabsContent>
              <TabsContent value="received" className="p-4">
                <FriendsRequestsList />
              </TabsContent>
              <TabsContent value="sent" className="p-4">
                <FriendsRequestsList />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Connect;
