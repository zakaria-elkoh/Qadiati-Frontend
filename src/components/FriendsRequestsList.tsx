import { X } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const FriendsRequestsList = () => {
  const invitations = [
    {
      name: "affinis",
      description: "affinis invited you to subscribe to affinis logfiles",
      type: "Newsletter",
      frequency: "Monthly",
    },
    {
      name: "Omniplex Learning",
      description:
        "Omniplex Learning invited you to subscribe to Omniplex Learning Connected",
      type: "Newsletter",
      frequency: "Monthly",
    },
    {
      name: "RHrecrutement.ma",
      description: "RHrecrutement.ma invited you to subscribe to HR Hiiiv's",
      type: "Newsletter",
      frequency: "Daily",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Invitations (62)</h3>
        <Button variant="link">Show all</Button>
      </div>
      <Card className="mb-4 bg-blue-50">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Avatar className="w-10 h-10 mr-4">
                <AvatarImage
                  alt="Houssam-Eddine Boudhir"
                  src="/placeholder.svg?height=40&width=40"
                />
              </Avatar>
              <p className="text-sm">
                Houssam-Eddine Boudhir and 3 others accepted your invitations.
                View all
              </p>
            </div>
            <Button size="icon" variant="ghost">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
      {invitations.map((invitation, index) => (
        <Card key={index} className="mb-4">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Avatar className="w-10 h-10 mr-4">
                  <AvatarImage
                    alt={invitation.name}
                    src={`https://xsgames.co/randomusers/avatar.php?g=male`}
                  />
                </Avatar>
                <div>
                  <p className="text-xs text-gray-500">
                    {invitation.type} • {invitation.frequency}
                  </p>
                  <p className="text-sm font-semibold">
                    {invitation.description}
                  </p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  Ignore
                </Button>
                <Button size="sm">Accept</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FriendsRequestsList;
