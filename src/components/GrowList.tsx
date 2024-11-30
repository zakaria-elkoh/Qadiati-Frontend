import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus } from "lucide-react";

const GrowList = () => {
  const engineers = [
    {
      name: "Dame GAYE",
      title: "Full Stack Developer | Cybersecurity ...",
      connections: "Adriane and 7 other mutual connections",
    },
    {
      name: "Omar Bouykourne",
      title: "Flutter Developer || Mobile Dev || IT ...",
      connections: "Adriane and 56 other mutual connections",
    },
    {
      name: "Mohsine Ennemli",
      title: "Full Stack Developer | Problem Solver",
      connections: "Adriane and 43 other mutual connections",
    },
    {
      name: "Noreddine ...",
      title: "Mobile Developer at Mynk | Software ...",
      connections: "Ghizlane and 23 other mutual connections",
    },
    {
      name: "Aaron Haddad",
      title: "Engineering @ Root | Powering -...",
      connections: "MOHAMED is a mutual connection",
    },
    {
      name: "Ismail Ait El Kamel",
      title: "Junior Web Developer | Laravel |...",
      connections: "ENNEDDI and 39 other mutual connections",
    },
    {
      name: "Nisrine L.",
      title: "@Njioom.ai | Back-End Developer | ...",
      connections: "Zaiid and 28 other mutual connections",
    },
    {
      name: "Jawhar HASSOU",
      title: "Lead Software Engineer | Expert in ...",
      connections: "Mohamed and 40 other mutual connections",
    },
  ];

  return (
    <Card className="border-0 shadow-none ">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Software Engineers you may know</CardTitle>
        <Button variant="link">Show all</Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {engineers.map((engineer, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="w-28 h-28 mb-4">
                    <AvatarImage
                      alt={engineer.name}
                      src={`https://xsgames.co/randomusers/avatar.php?g=male`}
                    />
                  </Avatar>
                  <h3 className="font-semibold">{engineer.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{engineer.title}</p>
                  <p className="text-xs text-gray-400 mb-4">
                    {engineer.connections}
                  </p>
                  <Button className="w-full" size="sm">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Connect
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default GrowList;
