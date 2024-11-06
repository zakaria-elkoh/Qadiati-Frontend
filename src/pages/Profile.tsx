import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Globe } from "lucide-react";
import ProfileBanner from "@/components/profile/ProfileBanner";
import ProfileImage from "@/components/profile/ProfileImage";

const Profile = () => {
  return (
    <Card className="relative overflow-hidden my-8 max-w-7xl mx-auto">
      <ProfileBanner />
      <ProfileImage />
      <CardContent className="pt-20 pb-4">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold">Murphy Rodriguez</h2>
            <p className="text-gray-500">Lawyer</p>
            <p className="text-sm text-gray-500">
              Marrakesh, Marrakesh-Safi, Morocco •{" "}
              <button className="text-blue-500">Contact info</button>
            </p>
            <div className="flex space-x-2 mt-2">
              <Button size="sm" variant="outline">
                Open to
              </Button>
              <Button size="sm" variant="outline">
                Add profile section
              </Button>
              <Button size="sm" variant="outline">
                Enhance profile
              </Button>
              <Button size="sm" variant="outline">
                Resources
              </Button>
            </div>
          </div>
          <div className="text-right">
            <div className="flex flex-col items-end space-y-1">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+212 70507-4846</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>zakaria.elkoh10@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-4 h-4 mr-2" />
                <span>elkoh.me</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Profile;
