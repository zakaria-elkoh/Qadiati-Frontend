import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Globe } from "lucide-react";
import ProfileBanner from "@/components/profile/ProfileBanner";
import ProfileImage from "@/components/profile/ProfileImage";
import Edication from "@/components/Education";
import Experience from "@/components/Experience";
import VerifiedIcon from "@/components/ui/VerifiedIcon";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { selectAuth } from "@/store/slices/authSlice";

const Profile = () => {
  const authUser = useSelector((state: RootState) => state.auth.authUser);
  const { isAuthenticated, isLoading } = useSelector(selectAuth);

  console.log("is auth: ", isAuthenticated, "| | isLoading: ", isLoading);

  if (!authUser) {
    return <div>Loading...</div>;
  }
  console.log("user", authUser);

  const { email, family_name, given_name } = authUser;

  return (
    <div className="my-8 max-w-7xl mx-auto flex flex-col gap-6">
      <Card className="relative overflow-hidden">
        <ProfileBanner />
        <ProfileImage />
        <CardContent className="pt-20 pb-4">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex gap-2 items-center">
                <h2 className="text-2xl font-bold leadi">
                  {given_name + " " + family_name}
                </h2>
                <div className="relative top-0.5">
                  <VerifiedIcon w={6} h={6} />
                </div>
              </div>
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
                  <span>{email}</span>
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
      <Edication />
      <Experience />
    </div>
  );
};

export default Profile;
